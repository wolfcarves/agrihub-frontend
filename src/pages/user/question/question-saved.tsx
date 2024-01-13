import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useGetViewQuestion from "../../../hooks/api/get/useGetViewQuestion";
import { UserAuth } from "../../../providers/AuthProvider";
import { PiShareFatLight } from "react-icons/pi";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { CiBookmarkPlus } from "react-icons/ci";
import { GoReport } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import AnswerCard from "@components/user/questions/question-view/AnswerCard";
import { timeAgo } from "@components/lib/utils";
import AnswerForm from "@components/user/questions/question-view/AnswerForm";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionViewFilter,
  getQuestionViewPage,
  setFilter,
  setId,
  setPage
} from "@redux/slices/questionViewSlice";
import QuestionSkeleton from "@components/user/questions/skeleton/QuestionSkeleton";
import { UsePagination } from "@providers/PaginationProvider";
import useQuestionVoteMutation from "@hooks/api/post/useQuestionVoteMutation";
import { toast } from "sonner";
import useQuestionDeleteVoteMutation from "@hooks/api/post/useQuestionDeleteVoteMutation";
import Modal from "../../../components/ui/custom/modal/Modal";

type FilterType = "newest" | "top";

const Question = () => {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const navigate = useNavigate();
  const pagination = UsePagination();

  useEffect(() => {
    dispatch(setId(questionId || ""));
    pagination?.scrollToTop();
  }, []);

  const filter = useSelector(getQuestionViewFilter);
  const page = useSelector(getQuestionViewPage);

  const { data, isLoading } = useGetViewQuestion(
    questionId || "",
    String(page),
    filter
  );

  const { mutateAsync: asyncVoteMutate } = useQuestionVoteMutation();
  const { mutateAsync: asyncDeleteVoteMutate } =
    useQuestionDeleteVoteMutation();

  const { data: currentUser } = UserAuth() ?? {};

  const handleVoteAnswer = async (
    type: "upvote" | "downvote",
    isVoted: boolean,
    voteid: string
  ) => {
    try {
      const voteAnswerData = {
        requestBody: {
          type
        },
        id: questionId || ""
      };

      if (!isVoted) {
        const data = await asyncVoteMutate(voteAnswerData);
        toast(data.message || "");
      } else {
        const response = await asyncDeleteVoteMutate(voteid);
        toast(response.message);
      }
    } catch (e: any) {
      toast(e.body.message || "");
    }
  };

  const onFilterChange = (filterKey: FilterType) => {
    dispatch(setFilter(filterKey));
    dispatch(setPage("1"));
  };

  const onPageChange = (page: number) => {
    dispatch(setPage(String(page)));
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (isLoading) return <QuestionSkeleton quantity={40} />;
  return (
    <div className="px-3 max-h-full overflow-y-auto flex flex-col gap-6">
      <h6
        className="flex gap-2 items-center cursor-pointer mb-3 font-medium"
        onClick={() => navigate(-1)}
      >
        <IoMdArrowBack />
        Go back
      </h6>
      <div className="text-2xl font-bold leading-tight">
        {data?.question?.title}
      </div>
      <div className="col-span-3 flex gap-2 items-center flex-nowrap">
        <img
          src={data?.question?.user?.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
        />
        <div>
          <h6 className=" font-semibold ">{data?.question?.user?.username}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(data?.question?.createdat || "")}
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <div
            className="leading-loose"
            dangerouslySetInnerHTML={{
              __html: data?.question?.question || "<p></p>"
            }}
          />
          <div className="flex flex-wrap gap-2">
            {data?.question?.imagesrc?.map((image, i) => (
              <img
                key={i}
                className=" rounded-lg md:h-[8rem] h-[4rem]"
                src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${image}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center md:px-[2rem] px-[.8rem]">
          <span
            role="button"
            className={
              data?.question?.vote?.type === "upvote"
                ? "bg-[#F3F3F3] rounded-full p-3 text-secondary bg-primary"
                : "bg-[#F3F3F3] rounded-full p-3"
            }
            onClick={() =>
              handleVoteAnswer(
                "upvote",
                data?.question?.vote?.type === "upvote",
                data?.question?.vote?.id || ""
              )
            }
          >
            <BiSolidUpArrow />
          </span>
          <span className=" font-semibold">{data?.question?.vote_count}</span>
          <span
            role="button"
            className={
              data?.question?.vote?.type === "downvote"
                ? "bg-[#F3F3F3] rounded-full p-3 text-secondary bg-primary"
                : "bg-[#F3F3F3] rounded-full p-3"
            }
            onClick={() =>
              handleVoteAnswer(
                "downvote",
                data?.question?.vote?.type === "downvote",
                data?.question?.vote?.id || ""
              )
            }
          >
            <BiSolidDownArrow />
          </span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <CiBookmarkPlus size={20} />
          </span>
          <span className=" ">Save</span>
        </div>
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <GoReport size={20} />
          </span>
          <span className=" ">Report</span>
        </div>
        <div className="flex items-center gap-3 hover:underline" role="button">
          <span className="bg-[#F3F3F3] p-2 rounded-lg">
            <PiShareFatLight size={20} />
          </span>
          <span className=" ">Share</span>
        </div>
      </div>
      <div className="flex gap-2 justify-start">
        {data?.question?.tags?.map((tags, i) => (
          <span
            key={i}
            className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg"
          >
            {tags.tag}
          </span>
        ))}
      </div>
      <hr className="" />

      {currentUser && <AnswerForm questionId={data?.question?.id} />}
      <div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center text-gray-400">
            <FiMessageSquare size={20} /> {data?.question?.answer_count}{" "}
            {parseInt(data?.question?.answer_count ?? "0") > 1
              ? "Answers"
              : "Answer"}
          </div>

          <Select onValueChange={onFilterChange}>
            <SelectTrigger className="w-[150px] font-medium capitalize">
              <div>Sort:</div>
              <SelectValue placeholder={filter} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">New</SelectItem>
              <SelectItem value="top">Top</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div ref={pagination?.topRef}>
        {data?.question?.answers?.map((answer, i) => (
          <AnswerCard key={i} answer={answer} />
        ))}
      </div>

      {selectedImage && (
        <Modal setModal={closeModal}>
          <img
            src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${selectedImage}`}
            alt="Full View"
            className="max-w-full h-[20rem] max-h-full"
          />
        </Modal>
      )}
    </div>
  );
};

export default Question;
