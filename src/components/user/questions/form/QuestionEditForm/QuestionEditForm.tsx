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
import parse, { Element, domToReact } from "html-react-parser";
import { renderToString } from "react-dom/server";
import LoadingSpinner from "@icons/LoadingSpinner";
import usePutForumsUpdateQuestion from "@hooks/api/put/usePutForumsUpdateQuestion";

const QuestionEditFormRules = () => (
  <div className="pb-14">
    <h2 className="font-poppins-bold text-foreground">Edit question</h2>
  </div>
);

const QuestionEditForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");

  //just invoke this and the magic happens but actually have no idea how it works
  let index = 0;
  const pattern = /\bblob\b/;

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onBlur"
  });

  const {
    data: previousQuestionData,
    isLoading: isPreviousQuestionDataLoading
  } = useGetViewQuestion(params.questionId ?? "");

  const { mutateAsync: updateQuestion, isLoading: isUpdateQuestionLoading } =
    usePutForumsUpdateQuestion();

  const prevData = useMemo(() => {
    return {
      title: previousQuestionData?.question?.title,
      question: previousQuestionData?.question?.question,
      imagesrc: previousQuestionData?.question?.imagesrc,
      tags: previousQuestionData?.question?.tags
    };
  }, [previousQuestionData]);

  const handleSubmitForm = async (data: QuestionSchema) => {
    try {
      await updateQuestion({
        id: previousQuestionData?.question?.id ?? "1",
        formData: data
      });

      toast.success("Question successfully updated");
      navigate(-1);
    } catch (err: any) {
      console.log(err.body.message);
      toast.error(err.body.message);
    }
  };

  const _question = renderToString(
    parse(prevData?.question ?? "", {
      replace: domNode => {
        if (domNode instanceof Element) {
          if (domNode.tagName === "img") {
            const replacedImg = (
              <img
                //checks if image has the word blob
                src={
                  pattern.test(domNode.attribs.src)
                    ? prevData?.imagesrc?.[index]
                    : domNode.attribs.src
                }
                className="w-full max-w-[450px] my-2"
              />
            );

            return replacedImg;
          }

          if (domNode.tagName === "pre") {
            return <p>{domToReact(domNode.children)}</p>;
          }
        }
      }
    }) as React.ReactElement<any, string | React.JSXElementConstructor<any>>
  );

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
          <div className="flex justify-end gap-2">
            <Button type="submit" isLoading={isUpdateQuestionLoading} size="lg">
              Update
            </Button>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
          </div>

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
                  defaultValue={_question}
                  render={({ field: { onChange }, fieldState }) => {
                    return (
                      <>
                        <div className="flex">
                          <RichTextEditor
                            defaultValue={_question}
                            allowImagePaste
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
                          console.log(e);
                        }}
                      />
                    );
                  }}
                />
              )}
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default QuestionEditForm;
