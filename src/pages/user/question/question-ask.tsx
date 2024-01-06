import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { askQuestionSchema } from "./schema";
import { QuestionSchema } from "@api/openapi";
import useQuestionAskMutation from "@hooks/api/post/useQuestionAskMutation";
import { Button } from "@components/ui/button";
import { Input } from "../../../components/ui/input";
import RichTextEditor from "../../../components/ui/custom/rich-text-editor/RichTextEditor";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@components/ui/form";

async function filesToBlobs(files: File[]): Promise<Blob[]> {
  const blobArray: Blob[] = [];

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type });
    blobArray.push(blob);
  }

  return blobArray;
}

function QuestionAsk() {
  const [question, setQuestion] = useState<any>();

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(askQuestionSchema),
    mode: "onChange",
    defaultValues: {
      title: "very very long dick title here..... okkaayyy??",
      tags: ["925349537503870977", "925349537503903745"]
    }
  });

  const { mutateAsync: questionAskMutate, isLoading } =
    useQuestionAskMutation();

  const handleSubmitForm = async (data: QuestionSchema) => {
    const compiledData: QuestionSchema = {
      title: data.title,
      imagesrc: data.imagesrc,
      question: data.question,
      tags: data.tags
    };

    try {
      await questionAskMutate(compiledData);
    } catch (e: any) {
      toast(e.message);
      toast(e.body.message);
    }
  };

  const [tags, setTags] = useState<string[]>();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        className="flex flex-col pb-20 px-0 lg:px-10"
        encType="multipart/form-data"
      >
        <div className="w-full">
          <div className="py-10 w-max">
            <Link to={".."}>
              <button className="flex items-center gap-x-2 text-foreground font-poppins-semibold hover:bg-gray-100 py-2.5 px-5 rounded-lg duration-200">
                <FaArrowLeftLong /> Back
              </button>
            </Link>
          </div>

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
          <Input {...form.register("title")} />
        </div>

        <div className="mt-20">
          <h3 className="text-foreground text-md font-poppins-bold">
            What are the details of your problem?
          </h3>

          <p className="text-foreground my-2 text-sm">
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </p>

          {/* AWD */}
          <FormField
            name="question"
            control={form.control}
            render={({ field: { onBlur, onChange } }) => (
              <RichTextEditor
                onBlur={data => {
                  onBlur();
                  onChange(data.html);
                  filesToBlobs(data.files as File[]).then((blobs: Blob[]) => {
                    form.setValue("imagesrc", blobs);
                  });
                }}
              />
            )}
          />
        </div>

        <div className="mt-10 px-5">
          <div
            dangerouslySetInnerHTML={{
              __html: question
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
              render={({ field: { onChange } }) => (
                <UserTagInputDropdown
                  option={tagResult}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchInputTagValue(e.target.value);
                    onChange(e.target.value);
                  }}
                  onTagsValueChange={e => setTags(e)}
                />
              )}
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
