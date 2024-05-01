import React from "react";
import { chatData } from "@constants/data";
import { timeAgo } from "@components/lib/utils";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import Input from "@components/ui/custom/input/input";
import { Button } from "@components/ui/button";
import { Divider } from "@components/ui/custom";

const CommunityChat = () => {
  const { uid } = useParams();

  return (
    <div className="w-full mx-4">
      <div className=" max-h-screen min-h-screen  overflow-y-auto w-full no-scrollbar">
        <div className="space-y-5">
          {chatData?.map((chat, index) => (
            <React.Fragment key={index}>
              {/* other chat */}
              {!uid || chat.id !== uid ? (
                <div className="me-11 my-2">
                  <div className="text-sm">{chat?.user?.username}</div>
                  <li className="max-w-lg flex gap-x-2 sm:gap-x-4 ">
                    <img
                      className="inline-block size-9 rounded-full"
                      src={chat?.user?.avatar}
                      alt="Image Description"
                    />

                    <div className="bg-secondary border border-gray-200 rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                      <div className="space-y-1.5">
                        <p className="mb-1.5 text-sm text-gray-800 dark:text-white text-wrap">
                          {parse(chat?.question)}
                          <span className="text-xs italic">
                            {timeAgo(chat?.createdat)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                </div>
              ) : null}

              {/* user chat */}
              {chat.id === uid ? (
                <li className="flex ms-auto gap-x-2 sm:gap-x-4 my-2">
                  <div className="grow text-end space-y-3">
                    <div className="inline-block bg-green-600 rounded-2xl p-4 shadow-sm">
                      <p className="text-sm text-white ">
                        {parse(chat?.question)}
                      </p>
                      <span className="text-xs italic text-white">
                        {timeAgo(chat?.createdat)}
                      </span>
                    </div>
                  </div>

                  <img
                    className="inline-block size-9 rounded-full"
                    src={chat?.user?.avatar}
                    alt="Image Description"
                  />
                </li>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* chatbox */}
      <Divider className="pt-2" />
      <div className="flex items-center gap-4 w-full p-2">
        <div className="w-full">
          <Input type="text" placeholder="Aa" />
        </div>
        <Button>Send</Button>
      </div>
    </div>
  );
};

export default CommunityChat;
