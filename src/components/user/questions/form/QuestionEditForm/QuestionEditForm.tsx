import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { askQuestionSchema } from "../QuestionAskForm/schema";
import { QuestionSchema } from "@api/openapi";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { toast } from "sonner";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import { Form, FormField } from "@components/ui/form";
import { useNavigate, useParams } from "react-router-dom";
import useGetViewQuestion from "@hooks/api/get/useGetViewQuestion";
import LoadingSpinner from "@icons/LoadingSpinner";
import useFilesToBlobs from "@hooks/utils/useFilesToBlobs";
import axios from "axios";

const QuestionEditFormRules = () => (
  <div className="pb-14">
    <h2 className="font-poppins-bold text-foreground">Edit question</h2>
  </div>
);

const QuestionEditForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onBlur"
  });

  const {
    data: previousQuestionData,
    isLoading: isPreviousQuestionDataLoading
  } = useGetViewQuestion(params.questionId ?? "");

  const [isUpdateQuestionLoading, setIsUpdateQuestionLoading] =
    useState<boolean>(false);

  const prevData = useMemo(() => {
    return {
      title: previousQuestionData?.question?.title,
      question: previousQuestionData?.question?.question,
      imagesrc: previousQuestionData?.question?.imagesrc,
      tags: previousQuestionData?.question?.tags
    };
  }, [previousQuestionData]);

  const [files, setFiles] = useState<File[] | string[] | null>(
    prevData.imagesrc ?? null
  );

  const handleSubmitForm = async (data: QuestionSchema) => {
    try {
      setIsUpdateQuestionLoading(true);
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
        method: "PUT",
        data: formData,
        withCredentials: true
      }).then(() => {
        setIsUpdateQuestionLoading(false);
        navigate(-1);
      });

      toast.success("Question successfully updated");
      navigate(-1);
    } catch (err: any) {
      console.log(err.body.message);
      toast.error(err.body.message);
    }
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).map(file => {
        setFiles(prev => prev.concat(file));
      });
    }
  };

  const renderImages = (dataFile: File[] | string[] | null) => {
    console.log(dataFile);

    const pattern = /awsamazon/i;

    const match = pattern.test("www.awsamazon");

    // if (!dataFile) return <></>;
    // return dataFile.map((f, idx) => {
    //   return (
    //     <div className="relative w-max h-max" key={f.name}>
    //       <img
    //         width={426}
    //         height={240}
    //         src={URL.createObjectURL(f)}
    //         className=""
    //       />
    //       <button
    //         type="button"
    //         className="absolute -top-3 -end-3 bg-destructive rounded-full p-1 text-background"
    //         onClick={() => {
    //           setFiles(files.filter((_, index) => index !== idx));
    //         }}
    //       >
    //         <div className="-ms-[1px]">
    //           <LiaTrashAlt size={24} />
    //         </div>
    //       </button>
    //     </div>
    //   );
    // });
  };

  if (isPreviousQuestionDataLoading) {
    return <LoadingSpinner className="text-primary mx-auto" />;
  }

  return (
    <div className="flex flex-col pb-20 px-0 lg:px-10">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
        >
          <QuestionEditFormRules />

          <div className="max-w-[60rem]">
            <h3 className="text-foreground text-md font-poppins-bold">
              Edit title
            </h3>

            {prevData?.title && (
              <FormField
                name="title"
                control={form.control}
                defaultValue={previousQuestionData?.question?.title}
                render={({ field, fieldState }) => {
                  return (
                    <Input
                      $errorMessage={fieldState.error?.message}
                      {...field}
                    />
                  );
                }}
              />
            )}
          </div>

          <div className="mt-10">
            <div className="py-2">
              <h3 className="text-foreground text-md font-poppins-bold">
                What are the details of your problem?
              </h3>
            </div>

            <div className="max-w-[60rem]">
              {prevData?.question && (
                <FormField
                  name="question"
                  control={form.control}
                  defaultValue={prevData?.question}
                  render={({ field: { onChange }, fieldState }) => {
                    return (
                      <>
                        <div className="flex">
                          <RichTextEditor
                            defaultValue={prevData?.question}
                            allowImagePaste={false}
                            allowUploadImage={false}
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
                              data?.files?.then(blobs => {
                                form.setValue("imagesrc", blobs);
                              });
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
              )}
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-foreground text-md font-poppins-bold">
              Add Tags
            </h3>

            <p className="text-foreground my-2 text-sm">
              Add up to 5 tags to describe what your question is about. Start
              typing to see suggestions.
            </p>

            <div className="max-w-[60rem]">
              {prevData.tags && (
                <FormField
                  name="tags"
                  control={form.control}
                  render={({ field: { onChange } }) => {
                    //putangina ganito muna tinatamad ako i-refactor tong dropdown bwisit sayang isang oras ko dito, sabi na mahirap i-maintain to eh bobo ng gumawa
                    const defaultIdTagValue = prevData.tags?.map(t => t.id);
                    const defaultTagsValue = prevData.tags?.map(t => t.tag);

                    return (
                      <UserTagInputDropdown
                        keyword={searchInputTagValue}
                        defaultIdTagValue={defaultIdTagValue}
                        defaultTagValue={defaultTagsValue}
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
              )}
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
              {/* <div className="space-y-4">{renderImages(files)}</div> */}

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

          <div className="flex gap-2 mt-5">
            <Button type="submit" isLoading={isUpdateQuestionLoading}>
              Update
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default QuestionEditForm;
