import { Answer } from "@api/openapi";
import QuestionAnswerFeedbackPanel from "../panel/QuestionAnswerFeedbackPanel";
import { timeAgo } from "@components/lib/utils";
import QuestionFeedbackPanel from "../panel/QuestionFeedbackPanel";
import QuestionUserProfileButton from "../button/QuestionUserProfileButton";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { useEffect, useRef, useState } from "react";
import DOMPurify from "dompurify";

interface QuestionAnswerListProps {
  data?: Answer;
}

const QuestionAnswerCard = ({ data }: QuestionAnswerListProps) => {
  const ans =
    "Lorem ipsum dolor sit,awdawd isicing elit natus,psum dolor sit, amet consectetur adipisicing elit natus,psum dolor sit, amet consectetur adipisicing elit natus, adipisicing elit natus, praesentium minima repudiandae temporibus necessitatibus eveniet labore sit deleniti!";

  const parent = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [distance, setDistance] = useState<number | undefined>(0);

  useEffect(() => {
    setDistance(prev => (prev ?? 0) + (parent?.current?.offsetTop ?? 0));
  }, [parent]);

  const onPageEvent = () => {
    setHeight(distance ? distance / 2.2 : 0);
  };

  useEffect(() => {
    setHeight(distance ? distance / 2.2 : 0);
    window.addEventListener("resize", onPageEvent);

    return () => window.removeEventListener("resize", onPageEvent);
  }, [distance]);

  const purifyAnswer = DOMPurify.sanitize(data?.answer ?? "");

  return (
    <div className="relative">
      <div className="flex gap-2 py-4">
        <div className="relative flex h-max rounded-full">
          <Link to="/" className="font-poppins-medium hover:opacity-80">
            <Avatar className="border">
              <AvatarImage
                src={data?.user?.avatar ?? ""}
                className="object-cover pointer-events-none select-none "
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Link>

          <div
            className={`-z-50 absolute w-0.5 top-10 start-0 end-0 mx-auto bg-gray-200/90`}
            style={{
              height
            }}
          />
        </div>

        <div className="">
          <div className="w-full bg-accent border p-3 rounded-lg">
            <Link to="/" className="font-poppins-medium hover:underline ">
              {data?.user?.username}
            </Link>

            <p
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: purifyAnswer
              }}
            />
          </div>

          <QuestionFeedbackPanel
            onUpVoteBtnClick={() => {}}
            onDownVoteBtnClick={() => {}}
            voteCount={data?.total_vote_count ?? ""}
            onCommentBtnClick={() => {}}
          />
        </div>
      </div>

      {data?.comments?.slice(0, 3).map((c, index) => {
        return (
          <div
            className="flex ps-10 ms-auto gap-2 py-2"
            ref={parent}
            key={`${c} + ${index}`}
          >
            <div className="flex relative h-max border rounded-full ">
              <Link to="/" className="font-poppins-medium hover:opacity-80">
                <Avatar className="border">
                  <AvatarImage
                    src={data?.user?.avatar ?? ""}
                    className="object-cover pointer-events-none select-none "
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </Link>

              <div
                className={`-z-50 absolute w-8 h-7 -start-[1.35rem] bottom-4 rounded-b-md border-l-[2.5px] border-b-[2.5px] border-gray-200/90`}
              />
            </div>

            <div className="">
              <div className="w-full bg-accent border p-3 rounded-lg">
                <Link to="/" className="font-poppins-medium hover:underline ">
                  {c.user?.username}
                </Link>

                <p className="mt-2">{c.comment}</p>
              </div>

              <QuestionFeedbackPanel
                onUpVoteBtnClick={() => {}}
                onDownVoteBtnClick={() => {}}
                voteCount={data?.total_vote_count ?? ""}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionAnswerCard;

/*
 

<div className="py-5">
          <p>{data?.answer}</p>
        </div>

        <div>
          <QuestionFeedbackPanel
            onUpVoteBtnClick={() => {}}
            onDownVoteBtnClick={() => {}}
            voteCount={data?.total_vote_count ?? ""}
            onCommentBtnClick={() => {}}
          />
        </div> 

 {data?.isaccepted && (
            <span className="flex text-sm gap-3 items-center font-poppins-medium h-max text-primary">
              Accepted Answer
              <span className="text-lg -mt-3">
                <FaCheck />
              </span>
            </span>
          )}

    {data?.comments?.slice(0, 1).map(item => {
        return (
          <div
            key={`${item} + ${Math.random()}`}
            className="w-[95%] ms-auto border-b pt-10 pb-5"
          >
            <QuestionUserProfileButton
              avatarSrc={data?.user?.avatar}
              username={data?.user?.username}
              createdAt={data?.createdat}
            />

            <div className="py-5">
              <p>{item?.comment}</p>
            </div>

            <div>
              <QuestionFeedbackPanel
                onUpVoteBtnClick={() => {}}
                onDownVoteBtnClick={() => {}}
                voteCount={data?.total_vote_count ?? ""}
              />
            </div>
          </div>
        );
      })}
*/
