import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { askQuestionSchema } from "./schema";
import { QuestionSchema } from "@api/openapi";
import useQuestionAskMutation from "@hooks/api/post/useQuestionAskMutation";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/custom";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import { Form, FormField } from "@components/ui/form";
import QuestionBackButton from "@components/user/questions/button/QuestionBackButton";

function QuestionAsk() {
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onBlur",
    defaultValues: {
      tags: ["925677858106900481", "925677858106867713"]
    }
  });

  useEffect(() => {
    if (form.formState.errors.title) {
      toast.error(form.formState.errors.title.message);
    }

    if (form.formState.errors.tags) {
      toast.error(form.formState.errors.tags.message);
    }

    if (form.formState.errors.question) {
      toast.error(form.formState.errors.question.message);
    }
  }, [form.formState.errors]);

  const { mutateAsync: questionAskMutate } = useQuestionAskMutation();

  const handleSubmitForm = async (data: QuestionSchema) => {
    const compiledData: QuestionSchema = {
      title: data.title,
      imagesrc: data.imagesrc,
      question: data.question
    };

    try {
      await questionAskMutate(compiledData);
    } catch (e: any) {
      //
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="flex flex-col pb-20 px-0 lg:px-10"
        encType="multipart/form-data"
      >
        <div className="py-10">
          <QuestionBackButton />
          <div>
            <h2 className="font-poppins-bold text-foreground">
              Ask a public question
            </h2>

            <div className="my-20 w-full max-w-[60rem] p-7 rounded-md border border-primary bg-secondary">
              <div className="text-lg">Writing a good question</div>
              <p className="mt-3">
                You’re ready to ask a Farming-related question and this form
                will help guide you through the process. Looking to ask a non
                farming-related question? See the topics here to find a relevant
                site.
              </p>

              <div className="text-md font-poppins-bold mt-10">Steps</div>

              <div className="text-sm">
                <ul className="list-disc ps-4">
                  <li className="my-3 ">
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                  <li className="my-3 ">
                    Describe your problem in more detail.
                  </li>
                  <li className="my-3 ">
                    Add “tags” which help surface your question to members of
                    the community.
                  </li>
                  <li className="my-3 ">
                    Review your question and post it to the site.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-foreground text-md font-poppins-bold">Title</h3>

          <p className="text-foreground my-2 text-sm">
            Be specific and imagine you’re asking a question to another person.
          </p>
          <FormField
            name="title"
            control={form.control}
            defaultValue=""
            render={({ field, fieldState: { invalid } }) => {
              return <Input {...field} $isError={invalid} />;
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

          <FormField
            name="question"
            control={form.control}
            render={({ field: { onChange } }) => {
              return (
                <RichTextEditor
                  onBlur={data => {
                    onChange(data.html);
                    data?.files?.then(blobs => {
                      form.setValue("imagesrc", blobs);
                    });
                  }}
                />
              );
            }}
          />
        </div>

        <div className="mt-20">
          <h3 className="text-foreground text-md font-poppins-bold">
            Add Tags
          </h3>

          <p className="text-foreground my-2 text-sm">
            Add up to 5 tags to describe what your question is about. Start
            typing to see suggestions.
          </p>

          <div className="">
            <FormField
              name="tags"
              control={form.control}
              render={({ field: { onChange } }) => {
                return (
                  <UserTagInputDropdown
                    option={tagResult}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setSearchInputTagValue(e.target.value);
                      onChange(e.target.value);
                    }}
                  />
                );
              }}
            />
          </div>
        </div>

        <div className="mt-10">
          <Button className="px-7" type="submit">
            Post your question
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default withAuthGuard(QuestionAsk, [
  "member",
  "admin",
  "farmer",
  "farm_head",
  "asst_admin",
  "subfarm_head"
]);
