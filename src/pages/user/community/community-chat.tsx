import React, { useEffect, useRef, useState } from "react";
// import { chatData } from "@constants/data";
import { timeAgo } from "@components/lib/utils";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Input from "@components/ui/custom/input/input";
import { Button } from "@components/ui/button";
import { SearchParams } from "@hooks/api/get/useGetQuestionsQuery";
import { ForumsService, QuestionSchema } from "@api/openapi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { socket } from "../../../socket/socket";
import { toast } from "sonner";
import { FiImage } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import LoadingSpinner from "@icons/LoadingSpinner";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import { Badge } from "@components/ui/badge";
import useParseUserRole from "@hooks/utils/useParseUserRole";

const CommunityChat = () => {
  const { uid } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [fullScreenImg, setFullScreenImg] = useState<string>("");
  const [imgFile, setImgFile] = useState<File | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function useQuestionAskMutation() {
    return useMutation({
      mutationKey: ["PRIVATE_CHAT_MUTATION"],
      mutationFn: async (formData: QuestionSchema) => {
        const response = await ForumsService.postApiForums({
          formData
        });

        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["PRIVATE_CHAT"]
        });
      },
      onError: e => {
        console.log("onError: ", e);
      }
    });
  }

  function useGetQuestionsQuery(data: SearchParams) {
    return useQuery({
      queryKey: ["PRIVATE_CHAT", ...[data]],
      queryFn: async () => {
        const response = await ForumsService.getApiForums(data);

        return response;
      },
      refetchInterval: 2000,
      refetchIntervalInBackground: true,
      enabled: true,
      refetchOnWindowFocus: true
    });
  }

  const { data: chatData } = useGetQuestionsQuery({
    privateForum: true,
    perpage: "100",
    filter: "active"
  });

  const { mutateAsync: chatMutation, isLoading: isChatLoading } =
    useQuestionAskMutation();

  const scrollToBottom = () => {
    const container = chatRef.current;
    if (container) {
      container.scrollTop =
        container.scrollHeight - container.clientHeight + 20; // di ko sure to
    }
  };

  // TODO: OPTION MAGADD NG image
  async function sendMessage() {
    try {
      if (!message.length && !imgFile) {
        return;
      }
      if (imgFile) {
        await chatMutation({
          question: message,
          title: "private",
          privateForum: true,
          imagesrc: [imgFile] as any
        });
      } else {
        await chatMutation({
          question: message,
          title: "private",
          privateForum: true
        });
      }

      setMessage("");
      setImgFile(null);
    } catch (error) {
      toast.error("Please add a message");
    }
  }

  const submitBtnRef = useRef<HTMLButtonElement>(null);

  const handleOnKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    if (event.key === "Enter") {
      submitBtnRef.current?.click();
    }
  };

  useEffect(() => {
    socket.on("farm_head", (payload: string) => {
      queryClient.invalidateQueries({ queryKey: ["PRIVATE_CHAT"] });
      console.log(payload, "EVENT TRIGGERED");
    });

    scrollToBottom();

    return () => {
      socket.off("farm_head", () => console.log("unlisten"));
    };
  }, [chatData]);

  return (
    <>
      {fullScreenImg && (
        <div
          className="fixed inset-0 h-full w-full flex justify-center items-center z-50 bg-black/70"
          onClick={() => setFullScreenImg("")}
        >
          <div
            className={`relative w-[90%] aspect-video xl:w-1/2 xl:h-1/2 object-contain animate-appear bg-black`}
          >
            <div className="absolute inset-0 m-auto h-max w-max -z-10">
              <LoadingSpinner className="text-primary" />
            </div>

            <img
              src={fullScreenImg}
              className={`w-full h-full object-contain aspect-auto`}
            />
          </div>
        </div>
      )}

      <div
        className="h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-5rem)] w-full overflow-y-auto"
        ref={chatRef}
      >
        <div className="h-max w-full p-5">
          <div className="space-y-5">
            {chatData?.questions?.map((chat, index) => (
              <div key={index}>
                {/* user chat */}
                {chat.user?.id === uid ? (
                  <li className="flex flex-col ms-auto gap-x-2 sm:gap-x-4 my-2 space-y-2">
                    <div className="flex gap-3">
                      <div className="grow text-end space-y-3">
                        <div className="inline-block bg-green-600 rounded-2xl p-4 shadow-sm">
                          <span className="flex flex-col-reverse gap-2 font-poppins-medium text-background">
                            {chat?.user?.username}
                            <Badge variant="secondary" className="ms-1.5">
                              <span className="font-poppins-regular">
                                {chat?.user?.farm_name}
                              </span>
                            </Badge>
                          </span>

                          <p className="text-base text-white mt-3">
                            {parse(chat?.question ?? "")}
                          </p>
                          <span className="text-xs italic text-white">
                            {timeAgo(chat?.createdat ?? "")}
                          </span>
                        </div>
                      </div>

                      <Avatar>
                        <AvatarImage src={chat?.user?.avatar} alt="avatar" />
                        <AvatarFallback>
                          {chat?.user?.avatar?.[0]}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {chat?.imagesrc?.[0] && (
                      <div className="flex gap-3">
                        <div className="grow text-end">
                          <div className="inline-block bg-green-600 rounded-2xl shadow-sm">
                            <img
                              src={chat?.imagesrc?.[0]}
                              className="max-w-52 w-40 rounded-xl cursor-pointer"
                              onClick={() =>
                                setFullScreenImg(chat?.imagesrc?.[0] as string)
                              }
                            />
                          </div>
                        </div>

                        <div className="w-10"></div>
                      </div>
                    )}
                  </li>
                ) : (
                  <div className="my-2">
                    <li className="list-none space-y-2">
                      <div className="max-w-lg flex gap-x-2 sm:gap-x-4">
                        <img
                          className="inline-block size-9 rounded-full"
                          src={chat?.user?.avatar}
                          alt="avatar"
                        />

                        <div className="border border-border rounded-2xl p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                          <div className="space-y-1.5">
                            <span className="flex flex-col-reverse gap-2 font-poppins-medium">
                              {chat?.user?.username}

                              <Badge variant="outline">
                                <span className="font-poppins-regular">
                                  {chat?.user?.farm_name}
                                </span>
                              </Badge>
                            </span>
                            <p className="mb-1.5 text-gray-800 dark:text-white text-wrap">
                              {parse(chat?.question ?? "")}
                            </p>

                            <span className="text-xs italic">
                              {timeAgo(chat?.createdat ?? "")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="max-w-lg flex gap-x-2 sm:gap-x-4 ">
                        <div className="w-9"></div>

                        {chat?.imagesrc?.[0] && (
                          <div className="flex gap-3">
                            <div className="grow text-end">
                              <div className="inline-block bg-green-600 rounded-2xl shadow-sm">
                                <img
                                  src={chat?.imagesrc?.[0]}
                                  className="max-w-52 w-40 rounded-xl cursor-pointer"
                                  onClick={() =>
                                    setFullScreenImg(
                                      chat?.imagesrc?.[0] as string
                                    )
                                  }
                                />
                              </div>
                            </div>

                            <div className="w-10"></div>
                          </div>
                        )}
                      </div>
                    </li>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* chatbox */}
        <div className="flex flex-col items-center w-full sticky bottom-0 bg-background">
          {/* attachment */}
          {imgFile && (
            <div
              className="flex items-center justify-between w-full gap-4 border-t border-border px-10 py-3 hover:bg-foreground/5 cursor-pointer"
              onClick={() => setImgFile(null)}
            >
              <h6>{imgFile.name}</h6>
              <IoMdClose />
            </div>
          )}

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => {
              if (e.target?.files) setImgFile(e.target?.files[0]);
            }}
          />

          <div className="flex w-full gap-4 border-t border-border p-2">
            <div className="flex items-center relative w-20">
              <Button
                variant="outline"
                type="button"
                className="px-7 cursor-pointer"
                onClick={() => inputRef?.current?.click()}
              >
                <FiImage className="text-lg" />
              </Button>
            </div>
            <div className="w-full">
              <Input
                autoComplete="off"
                type="text"
                placeholder="Aa"
                value={message}
                onKeyDown={handleOnKeyDown}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <Button
              ref={submitBtnRef}
              type="button"
              onClick={sendMessage}
              isLoading={isChatLoading}
              className="px-7"
              disabled={!message.length && !imgFile}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthGuard(CommunityChat, [
  "admin",
  "asst_admin",
  "farm_head"
]);
