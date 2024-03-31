import { useEffect, useRef, useState } from "react";
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
import BackButton from "@components/ui/custom/button/back-button";
import { LiaTrashAlt } from "react-icons/lia";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useFilesToBlobs from "@hooks/utils/useFilesToBlobs";

const QuestionAskFormRules = () => (
  <div>
    <h2 className="font-poppins-bold text-foreground">Ask a public question</h2>

    <div className="mt-10 mb-20 w-full max-w-[60rem] p-7 rounded-md border border-primary bg-secondary">
      <div className="text-lg">
        Gabay sa pagsulat ng isang wastong katanungan
      </div>
      <p className="mt-3">
        Alam mo sa sarili mong ikaw ay handa na upang magtanong patungkol sa
        katanungan ukol sa pagsasaka at itong form na ito ay makakatulong sayo
        sa pagsasaayos ng iyong itatanong.
      </p>

      <div className="text-md font-poppins-bold mt-10">Mga pamamaraan</div>

      <div className="text-sm">
        <ul className="list-disc ps-4">
          <li className="my-3 ">
            Ilarawan ang iyong problema gamit ang mas maraming detalye.
          </li>
          <li className="my-3 ">
            Maglagay ng "tags" na makakatulong upang ang iyong katanungan ay
            agad na makita ng mga miyembro ng mga komunidad.
          </li>
          <li className="my-3 ">
            Suriin ang iyong tanong at i-post ito sa aming website
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const QuestionAskForm = () => {
  const navigate = useNavigate();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const [isQuestionAskLoading, setIsQuestionAskLoading] =
    useState<boolean>(false);
  const imageRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onBlur"
  });

  const handleSubmitForm = async (data: QuestionSchema) => {
    try {
      setIsQuestionAskLoading(true);
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("question", data.question);

      data?.tags?.forEach((tag, idx) => {
        formData.append(`tags[${idx}]`, tag);
      });

      const blobs = await useFilesToBlobs(files);

      for (const key of Object.keys(blobs)) {
        console.log(blobs[Number(key)]);
        formData.append("imagesrc", blobs[Number(key)]);
      }

      await axios({
        url: "https://api.qc-agrihub.xyz/api/forums",
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

  const renderImages = (dataFile: File[]) => {
    return dataFile.map((f, idx) => {
      return (
        <div className="relative w-max h-max" key={f.name}>
          <img
            width={426}
            height={240}
            src={URL.createObjectURL(f)}
            className=""
          />

          <button
            type="button"
            className="absolute -top-3 -end-3 bg-destructive rounded-full p-1 text-background"
            onClick={() => {
              setFiles(files.filter((_, index) => index !== idx));
            }}
          >
            <div className="-ms-[1px]">
              <LiaTrashAlt size={24} />
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
        <BackButton className="mb-10" />
        <QuestionAskFormRules />

        <div className="max-w-[60rem]">
          <h3 className="text-foreground text-md font-poppins-bold">Title</h3>

          <p className="text-foreground my-2 text-sm">
            Be specific and imagine you’re asking a question to another person.
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
            What are the details of your problem?
          </h3>

          <p className="text-foreground my-2 text-sm">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
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
                          if (charSize! < 20) {
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
                        onBlur={data => {
                          onChange(data.html);
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
            typing to see suggestions.
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

          <div className="max-w-[60rem]">
            <div className="space-y-4">{renderImages(files)}</div>

            <div className="py-5">
              <button
                type="button"
                className="border border-dashed max-w-[426px] w-full h-20 rounded-xl text-foreground/20 text-xl hover:bg-foreground/5 duration-100"
                onClick={() => imageRef.current?.click()}
              >
                Upload image +
              </button>
            </div>

            <input
              id="imagesrc"
              type="file"
              multiple
              accept="image/png, image/jpg, image/jpeg"
              // className="absolute opacity-0 inset-0 m-auto hidden"
              {...form.register("imagesrc", { required: true })}
              onChange={onImageChange}
            />
          </div>
        </div>

        {isQuestionAskLoading && <ActivityIndicator />}

        <div className="mt-5">
          <Button className="px-7" type="submit">
            Post your question
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuestionAskForm;
