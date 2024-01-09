import React from "react";
import QuestionAnswerFeedbackPanel from "../panel/QuestionAnswerFeedbackPanel";
import { QuestionViewSchema } from "@api/openapi";

interface QuestionAnswerListProps {
  data?: QuestionViewSchema;
}

const QuestionAnswerList = ({ data }: QuestionAnswerListProps) => {
  return (
    <div>
      <h1>Answers 32</h1>

      <div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-4">
            <div className="w-12 h-12 border rounded-xl overflow-hidden ">
              <img
                src={data?.question?.user?.avatar}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col ">
              <span className="font-poppins-medium">
                {data?.question?.user?.username}
              </span>
              <span className="font-poppins-regular text-gray-400 text-sm">
                3 months ago
              </span>
            </div>
          </div>

          <div>Accepted</div>
        </div>

        <div className="py-5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            tempore laborum eaque aperiam beatae excepturi iste rem molestiae
            voluptas in doloremque unde quasi eius suscipit, eum, earum
            exercitationem sequi sunt expedita veritatis? Neque ab quos amet
            mollitia, ex animi aliquid nam reprehenderit iure, sed eum qui,
            tempora numquam suscipit reiciendis? exercitationem sequi sunt
            expedita veritatis? Neque ab quos amet mollitia, ex animi aliquid
            nam reprehenderit iure, sed eum qui, tempora numquam suscipit
            reiciendis?
          </p>
        </div>

        <div>
          <QuestionAnswerFeedbackPanel />
        </div>
      </div>
      {/*end */}
    </div>
  );
};

export default QuestionAnswerList;
