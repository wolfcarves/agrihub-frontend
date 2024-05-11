import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { askQuestionSchema } from "./schema";
import { QuestionSchema } from "@api/openapi";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { toast } from "sonner";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import { FormField } from "@components/ui/form";
import ActivityIndicator from "@icons/ActivityIndicator";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFilesToBlobs from "@hooks/utils/useFilesToBlobs";
import { IoTrashOutline } from "react-icons/io5";
import QuestionProfanityWarningDialog from "../../dialog/QuestionProfanityWarningDialog";

const QuestionAskForm = () => {
  const navigate = useNavigate();

  const [isContainProfane, setIsContainProfane] = useState<boolean>(false);
  const [isProfane, setIsProfane] = useState<boolean>(false);
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [isQuestionAskLoading, setIsQuestionAskLoading] =
    useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onChange"
  });

  const handleSubmitForm = async (data: QuestionSchema) => {
    try {
      if (isContainProfane) {
        setIsProfane(true);

        return;
      }

      setIsQuestionAskLoading(true);
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("question", data.question);

      data?.tags?.forEach((tag, idx) => {
        formData.append(`tags[${idx}]`, tag);
      });

      const blobs = await useFilesToBlobs(files);

      if (blobs) {
        for (const key of Object.keys(blobs)) {
          formData.append("imagesrc", blobs[Number(key)]);
        }
      }

      await axios({
        url: "https://apiv2.qc-agrihub.xyz/api/forums",
        method: "POST",
        data: formData,
        withCredentials: true
      }).then(() => {
        setIsQuestionAskLoading(false);
        navigate(-1);
      });

      toast.success("Question successfully posted!");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).map(file => {
        setFiles(prev => prev.concat(file));
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderImages = (dataFile: File[]) => {
    return dataFile.map((f, idx) => {
      return (
        <div className="relative w-max h-max" key={f.name}>
          <img
            width={180}
            src={URL.createObjectURL(f)}
            className="rounded-2xl aspect-square object-cover"
          />

          <button
            type="button"
            className="absolute -top-3 -end-3 bg-background rounded-full p-1 text-background"
            onClick={() => {
              setFiles(files.filter((_, index) => index !== idx));
            }}
          >
            <div className="-ms-[1px]">
              <IoTrashOutline
                size={25}
                className="  border p-1 rounded-full text-red-600 border-red-400/45 bg-red-300/30"
              />
            </div>
          </button>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col pb-20 px-0 lg:px-10">
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
      >
        <div className="max-w-[60rem]">
          <h3 className="text-foreground text-md font-poppins-bold">
            Question Title
          </h3>

          <p className="text-foreground my-2 text-sm">
            Be specific and imagine you’re asking a question to another person.
          </p>

          <p className="text-foreground my-2 text-sm">
            {
              "(Maging tiyak sa ilalagay na pamagat ng iyong tanong, Paki-taype ng hindi bababa sa 10 na karakter)"
            }
          </p>

          <FormField
            name="title"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState }) => {
              return (
                <Input {...field} $errorMessage={fieldState.error?.message} />
              );
            }}
          />
        </div>

        <div className="mt-20">
          <h3 className="text-foreground text-md font-poppins-bold">
            Question Description
          </h3>

          <p className="text-foreground my-2 text-sm">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>
          <p className="text-foreground my-2 text-sm">
            {"("}
            Ilagay ang paliwanag patungkol sa iyong tanong, Paki-taype ng hindi
            bababa sa 20 na karakter
            {")"}
          </p>

          <div className="max-w-[60rem]">
            <FormField
              name="question"
              control={form.control}
              render={({ field: { onChange }, fieldState }) => {
                return (
                  <>
                    <div className="flex">
                      <RichTextEditor
                        allowUploadImage={false}
                        allowImagePaste={false}
                        onChange={({ charSize }) => {
                          //Validation, tiptap's worst documentation
                          if (charSize! < 20) {
                            if (charSize! < 20) {
                              form.setError("question", {
                                message:
                                  'Please enter at least 20 characters, ("Paki-taype ng hindi bababa sa 20 na karakter."'
                              });
                            } else form.clearErrors("question");
                            if (charSize! >= 5000) {
                              form.setError("question", {
                                message:
                                  '5000 characters is the maximum, ("5000 karakter lamang ang sagad")'
                              });
                            }
                            form.setError("question", {
                              message: "Please enter at least 20 characters"
                            });
                          } else form.clearErrors("question");
                          if (charSize! >= 5000) {
                            form.setError("question", {
                              message: "5000 characters is the maximum"
                            });
                          }
                        }}
                        onBlur={({ html, isProfane: _isProfane }) => {
                          if (_isProfane) {
                            setIsContainProfane(true);
                          } else {
                            setIsContainProfane(false);
                          }

                          onChange(html);
                        }}
                        height={300}
                      />
                    </div>

                    <div className="h-5">
                      <span className="text-red-500">
                        {fieldState.error?.message}
                      </span>
                    </div>
                  </>
                );
              }}
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-foreground text-md font-poppins-bold">
            Add Tags
          </h3>

          <p className="text-foreground my-2 text-sm">
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions. This is optional
          </p>

          <p className="text-foreground my-2 text-sm">
            Idagdag ang mga tag na hinggil sa iyong katanungan, Simulan magtype
            para makita ang mga mungkahi
          </p>

          <div className="max-w-[60rem]">
            <FormField
              name="tags"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <UserTagInputDropdown
                    keyword={searchInputTagValue}
                    onChange={e => {
                      setSearchInputTagValue(e.target.value);
                    }}
                    onTagsValueChange={e => {
                      onChange(e);
                    }}
                  />
                );
              }}
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-foreground text-md font-poppins-bold">
            Attach Image
          </h3>

          <p className="text-foreground my-2 text-sm">
            To provide better context for your question, consider attaching an
            image that can help illustrate your point more effectively
          </p>

          <p className="text-foreground my-2 text-sm max-w-[55rem]">
            {"("}
            Upang makapagbigay ng mas magandang konteksto para sa iyong tanong,
            isaalang-alang ang paglakip ng isang larawan na maaaring makatulong
            na mailarawan ang iyong punto nang mas epektibo
            {")"}
          </p>

          <div className="max-w-[60rem]">
            <div className="flex flex-wrap gap-2">{renderImages(files)}</div>

            <div className="py-5">
              <button
                type="button"
                className="relative border border-dashed max-w-[426px] w-full h-20 rounded-xl text-foreground/20 text-xl hover:bg-foreground/5 duration-100 cursor-pointer"
              >
                Upload image +
                <input
                  id="imagesrc"
                  type="file"
                  multiple
                  accept="image/png, image/jpg, image/jpeg"
                  className="absolute inset-0 text-[0px] cursor-pointer opacity-0"
                  {...form.register("imagesrc", { required: true })}
                  onChange={onImageChange}
                />
              </button>
            </div>
          </div>
        </div>

        {isQuestionAskLoading && <ActivityIndicator />}

        <div className="mt-5">
          <Button
            className="px-7"
            type="submit"
            isLoading={isQuestionAskLoading}
            disabled={isQuestionAskLoading}
          >
            Post your question
          </Button>
        </div>
      </form>

      <QuestionProfanityWarningDialog
        open={isProfane}
        onOpenChange={setIsProfane}
      />
    </div>
  );
};

export default QuestionAskForm;
