/*
  path - /question/:username/:questionId/:questionTitle
*/

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import useGetViewQuestion from "../../../hooks/api/get/useGetViewQuestion";
import { timeAgo } from "../../../components/lib/utils";
import { UserAuth } from "../../../providers/AuthProvider";
import { PiShareFatLight } from "react-icons/pi";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { CiBookmarkPlus } from "react-icons/ci";
import { GoReport } from "react-icons/go";
const Question = () => {
  const { username } = useParams();
  const { questionId } = useParams();

  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const handleNavigateAsk = () => {
    navigate("/questions/ask");
  };
  const { data } = useGetViewQuestion(questionId || "", String(page));
  console.log(data);
  // const user = useSelector(getUserState);
  // console.log(user);

  const { data: users } = UserAuth() ?? {};

  console.log("User data:", users);

  return (
    <div className="p-3 max-h-full overflow-y-auto flex flex-col gap-4">
      <div className="text-2xl font-bold leading-tight">{data?.title}</div>
      <div className="col-span-3 flex gap-2 items-center flex-nowrap">
        <img
          src={data?.user.avatar}
          className="w-11 h-11 object-center object-cover bg-slate-500 rounded-xl"
        />
        <div>
          <h6 className=" font-semibold ">{data?.user?.username}</h6>
          <p className="text-gray-400 text-sm">
            {timeAgo(data?.createdat || "")}
          </p>
        </div>
      </div>

      <div
        className="leading-loose"
        dangerouslySetInnerHTML={{
          __html: data?.question || "<p></p>"
        }}
      />
      <div></div>
      <div className="flex gap-2 justify-start">
        {data?.tags.map((tags, i) => (
          <span
            key={i}
            className="text-primary text-sm bg-secondary border border-primary py-1 px-2 rounded-lg"
          >
            {tags.tag}
          </span>
        ))}
      </div>
      {data?.answer_count === "0" ? <div>No Comment</div> : <div>asdasdas</div>}
    </div>
  );
};

export default Question;
