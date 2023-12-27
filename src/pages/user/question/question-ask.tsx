import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AskQuestion } from "./schema";
import { QuestionSchema } from "@api/openapi";
import useQuestionAskMutation from "@hooks/api/post/useQuestionAskMutation";
import { Button } from "@components/ui/button";
import useGetTags from "../../../hooks/api/get/useGetTags";
import { Input } from "../../../components/ui/input";
import RichTextEditor from "../../../components/ui/custom/rich-text-editor/RichTextEditor";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

function QuestionAsk() {
  const [tags, setTags] = useState<{ id: string; name: string }[]>([]);
  const [imgFiles, setImgFiles] = useState<FileList | null>();
  const [tagInput, setTagInput] = useState("");
  const [question, setQuestion] = useState<any>();
  const navigate = useNavigate();

  const handleAddTag = (selectedTag: any) => {
    setTags([...tags, { id: selectedTag.id, name: selectedTag.tag_name }]);
    setTagInput("");
  };

  const handleRemoveTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgFiles(e.target.files);
  };

  const form = useForm<QuestionSchema>({
    resolver: zodResolver(AskQuestion),
    mode: "onChange"
  });

  useEffect(() => {
    form.setValue("question", question);
    form.setValue(
      "tags",
      tags.map(tag => tag.id)
    );
    const fileArray = imgFiles ? Array.from(imgFiles) : [];
    form.setValue("imagesrc", fileArray);
  }, [tags, imgFiles, form.setValue]);

  const { data } = useGetTags(tagInput);
  const { mutateAsync: questionAskMutate, isLoading } =
    useQuestionAskMutation();

  const handleOnSubmitForm = async (data: QuestionSchema) => {
    const raw = {
      title: data.title,
      question: data.question,
      tags: data.tags,
      imagesrc: data.imagesrc
    };

    try {
      const length = data.tags?.length || 0;
      if (length >= 1) {
        await questionAskMutate(raw);
        toast("Question created successfully", {
          icon: "✅",
          duration: 1500
        });
        setTimeout(() => {
          form.reset();
          setTags([]);
          navigate("/forums/list");
        }, 2500);
        return;
      }
      throw new Error("Please choose a minimum of one tag.");
    } catch (e: any) {
      toast(e.message);
    }
  };
  const { title: titleError } = form.formState.errors;

  //This is temporary, refactor later--------
  return (
    <div className="lg:col-span-8 col-span-12 overflow-y-auto lg:mx-[5rem] scroll-smooth p-3">
      <h6
        className="flex gap-2 items-center cursor-pointer mb-3 font-medium"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Go back
      </h6>
      <h2 className="text-[1.2rem] font-medium mb-2 ">Ask a Question</h2>

      <form
        className="grid gap-3"
        onSubmit={form.handleSubmit(handleOnSubmitForm)}
      >
        <div className="p-4 border-2 border-border rounded-lg">
          <h1 className="text-[1rem] mb-1 font-medium ring-0">
            Type your title here....
          </h1>
          <input
            {...form.register("title")}
            className="border-b-2 w-full border-gray-600 focus:outline-none"
            type="text"
          />
          <p className="text-[.7rem] mt-1 font-semibold text-gray-500">
            {titleError?.message ? (
              <span className="text-red-500">{titleError.message}</span>
            ) : (
              "Be specific and imagine you’re asking a question to another person."
            )}
          </p>
        </div>
        <div className="p-3 border-2 border-border rounded-lg">
          <h1 className="text-[.9rem] mb-1 font-normal ring-0">
            Writing a good question
          </h1>
          <p className="text-[.7rem] mt-1 font-normal text-gray-500">
            You’re ready to ask a Farming-related question and this form will
            help guide you through the process. Looking to ask a non
            farming-related question? See the topics here to find a relevant
            site.
          </p>
          <h1 className="text-[.9rem] mb-1 font-normal ring-0 mt-1">Steps</h1>
          <ul className="text-[.6rem] mt-1 font-normal text-gray-500 list-disc pl-5">
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>
        <div className="p-4 border-2 border-border rounded-lg">
          <h1 className="text-[.8rem] mb-1 font-medium ring-0">
            Type your question here...
          </h1>
          <RichTextEditor setItem={setQuestion} />
        </div>
        <div className="p-4 border-2 border-border rounded-lg">
          <h1 className="text-[.8rem] mb-1 font-medium ring-0">
            Add an image here...
          </h1>

          <Input
            onChange={handleImageChange}
            className="border w-full border-gray-600 focus:outline-none h-10"
            type="file"
            accept="image/*"
            multiple
          />
        </div>
        <div className="p-4 border-2 border-border rounded-lg">
          <h1 className="text-[.8rem] mb-1 font-medium">
            Add your tags here...
          </h1>
          <div className="flex gap-1 mt-1 flex-wrap mb-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#DCF2D3] p-2 rounded">
                {tag.name}
                <button
                  onClick={() => handleRemoveTag(index)}
                  className="bg-red-600 text-white rounded-md px-2 ml-2 focus:outline-none"
                >
                  x
                </button>
              </span>
            ))}
          </div>

          <div className="flex mb-2">
            <input
              className="border border-border w-full focus:outline-none"
              type="text"
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 ">
            {tagInput !== "" &&
              data?.map(tag => (
                <div
                  key={tag.id}
                  onClick={() => handleAddTag(tag)}
                  className="bg-[#DCF2D3] p-2 rounded cursor-pointer"
                >
                  <span className="font-bold">{tag.tag_name}</span>
                  <br />
                  <span className="text-sm">{tag.details}</span>
                </div>
              ))}
          </div>
        </div>
        <Button disabled={isLoading} className="my-4" type="submit">
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
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
