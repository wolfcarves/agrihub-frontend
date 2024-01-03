import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AskQuestion } from "./schema";
import { QuestionSchema } from "@api/openapi";
import useQuestionAskMutation from "@hooks/api/post/useQuestionAskMutation";
import { Button } from "@components/ui/button";
import useGetTags from "../../../hooks/api/get/useGetPopularTagsQuery";
import { Input } from "../../../components/ui/input";
import RichTextEditor from "../../../components/ui/custom/rich-text-editor/RichTextEditor";
import withAuthGuard from "../../../higher-order/account/withAuthGuard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import UserTagInputDropdown from "@components/user/account/input/UserTagInput";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";

function QuestionAsk() {
  // const [tags, setTags] = useState<{ id: string; name: string }[]>([]);
  const [imgFiles, setImgFiles] = useState<FileList | null>();
  // const [tagInput, setTagInput] = useState("");
  const [question, setQuestion] = useState<any>();
  // const navigate = useNavigate();

  // const handleAddTag = (selectedTag: any) => {
  //   setTags([...tags, { id: selectedTag.id, name: selectedTag.tag_name }]);
  //   setTagInput("");
  // };

  // const handleRemoveTag = (index: number) => {
  //   const newTags = [...tags];
  //   newTags.splice(index, 1);
  //   setTags(newTags);
  // };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgFiles(e.target.files);
  };

  // const form = useForm<QuestionSchema>({
  //   resolver: zodResolver(AskQuestion),
  //   mode: "onChange"
  // });

  // useEffect(() => {
  //   form.setValue("question", question);
  //   form.setValue(
  //     "tags",
  //     tags.map(tag => tag.id)
  //   );
  //   const fileArray = imgFiles ? Array.from(imgFiles) : [];
  //   form.setValue("imagesrc", fileArray);
  // }, [tags, imgFiles, form.setValue]);

  // const { data } = useGetTags(tagInput);
  // const { mutateAsync: questionAskMutate, isLoading } =
  //   useQuestionAskMutation();

  // const handleOnSubmitForm = async (data: QuestionSchema) => {
  //   const raw = {
  //     title: data.title,
  //     question: data.question,
  //     tags: data.tags,
  //     imagesrc: data.imagesrc
  //   };

  //   try {
  //     const length = data.tags?.length || 0;
  //     if (length >= 1) {
  //       await questionAskMutate(raw);
  //       toast("Question created successfully", {
  //         icon: "✅",
  //         duration: 1500
  //       });
  //       setTimeout(() => {
  //         form.reset();
  //         setTags([]);
  //         navigate("/forum/list");
  //       }, 2500);
  //       return;
  //     }
  //     throw new Error("Please choose a minimum of one tag.");
  //   } catch (e: any) {
  //     toast(e.message);
  //   }
  // };

  // const { title: titleError } = form.formState.errors;

  const [tags, setTags] = useState<string[]>();
  const [searchInputTagValue, setSearchInputTagValue] = useState<string>("");
  const { data: tagResult } = useGetTagByKeyWord(searchInputTagValue);

  return (
    <div className="flex flex-col pb-20">
      <div className="w-full">
        <div className="py-10">
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
              You’re ready to ask a Farming-related question and this form will
              help guide you through the process. Looking to ask a non
              farming-related question? See the topics here to find a relevant
              site.
            </p>

            <div className="text-md font-poppins-bold mt-10">Steps</div>

            <div className="text-sm list-disc">
              <ul className="list-disc ps-4">
                <li className="my-3 ">
                  Now this is a story all about how, my life got flipped-turned
                  upside down
                </li>
                <li className="my-3 ">Describe your problem in more detail.</li>
                <li className="my-3 ">
                  Add “tags” which help surface your question to members of the
                  community.
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
        <Input />
      </div>

      <div className="mt-20">
        <h3 className="text-foreground text-md font-poppins-bold">
          What are the details of your problem?
        </h3>

        <p className="text-foreground my-2 text-sm">
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </p>

        <RichTextEditor setItem={setQuestion} />
      </div>

      <div className="mt-20">
        <h3 className="text-foreground text-md font-poppins-bold">Add Image</h3>

        <p className="text-foreground my-2 text-sm">
          You can also provide images relating to your question
        </p>

        <div className="relative border w-44 aspect-square rounded-lg">
          <div className="absolute inset-0 h-max w-max m-auto text-8xl text-gray-300">
            <GoPlus />
          </div>

          <Input
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 z-50 h-full cursor-pointer"
            type="file"
            accept="image/*"
            multiple
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-foreground text-md font-poppins-bold">Add Tags</h3>

        <p className="text-foreground my-2 text-sm">
          Add up to 5 tags to describe what your question is about. Start typing
          to see suggestions.
        </p>

        <div className="">
          <UserTagInputDropdown
            option={tagResult}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchInputTagValue(e.target.value);
            }}
            onTagsValueChange={e => setTags(e)}
          />
        </div>
      </div>

      <div className="mt-10">
        <Button className="px-7">Post you question</Button>
      </div>

      {/* {false && (
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
                You’re ready to ask a Farming-related question and this form
                will help guide you through the process. Looking to ask a non
                farming-related question? See the topics here to find a relevant
                site.
              </p>
              <h1 className="text-[.9rem] mb-1 font-normal ring-0 mt-1">
                Steps
              </h1>
              <ul className="text-[.6rem] mt-1 font-normal text-gray-500 list-disc pl-5">
                <li>Summarize your problem in a one-line title.</li>
                <li>Describe your problem in more detail.</li>
                <li>
                  Describe what you tried and what you expected to happen.
                </li>
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
      )} */}
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

/*
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
*/
