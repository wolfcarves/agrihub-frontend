import React, { useMemo, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import { PiBell, PiBellFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useGetUserNotifications from "@hooks/api/get/useGetUserNotifications";
import usePutUserNotificationRead from "@hooks/api/put/usePutUserNotificationRead";
import { timeAgo } from "@components/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import { useDispatch } from "react-redux";
import { hideNotificationBadge } from "@redux/slices/notificationSlice";
import { useSelector } from "@redux/store";
import { Button } from "@components/ui/button";
import usePostUserNotificationReadAll from "../../../../hooks/api/post/usePostUserNotificationReadAll";

const HeaderNotification = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [notificationDropdownOpen, setNotificationDropdownOpen] =
  //   useState<boolean>();
  const dispatch = useDispatch();
  const { isRead: notificationDropdownOpen } = useSelector(
    state => state.notification
  );

  const navigate = useNavigate();
  const { data: userNotifications, isLoading } = useGetUserNotifications({
    search: undefined,
    page: undefined,
    perpage: undefined,
    filter: undefined
  });

  const { mutateAsync: readNotificationMutate } = usePutUserNotificationRead();
  const { mutateAsync: readAllNotificationMutate, isLoading: isReadLoading } =
    usePostUserNotificationReadAll();
  const handleReadAllNotification = async (id: string | undefined) => {
    try {
      readAllNotificationMutate(id ?? "");
      toast.success(
        "All notifications have been marked as read. There are no unread notifications now."
      );
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  const handleReadNotification = async (
    redirect: string | undefined,
    id: string | undefined
  ) => {
    try {
      readNotificationMutate(id ?? "");
      if (redirect !== "") {
        navigate(redirect ?? "");
      }
    } catch (error: any) {
      toast.error(error.body.message);
    }
  };

  const unreadNotifications = useMemo(
    () => userNotifications?.notifications?.filter(item => !item.viewed).length,
    [userNotifications]
  );

  const unreadNotificationIds = useMemo(
    () =>
      userNotifications?.notifications
        ? userNotifications.notifications
            .filter(item => !item.viewed)
            .map(item => item.id)
        : [],
    [userNotifications]
  );

  const handleNotificationClick = () => {
    setIsOpen(prev => !prev);
    dispatch(hideNotificationBadge());
    localStorage.setItem("notification", "read");
  };

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={() => setIsOpen(prev => !prev)}>
        <div
          className={`${
            isOpen && "bg-gray-200/80 text-blue-500 "
          } bg-gray-200/40 transform active:scale-75 transition-transform focus:outline-0 text-xl cursor-pointer p-2 rounded-full my-auto flex`}
          onClick={handleNotificationClick}
        >
          <DropdownMenuTrigger></DropdownMenuTrigger>
          {isOpen ? (
            <PiBellFill />
          ) : (
            <>
              <div className="relative">
                {(unreadNotifications || 0) > 0 &&
                  !notificationDropdownOpen && (
                    <div className="absolute left-4 bottom-4 w-[20px] text-center text-white bg-red-600 text-[9px] rounded-full p-1 font-extrabold">
                      {unreadNotifications}
                    </div>
                  )}
                <PiBell />
              </div>
            </>
          )}
        </div>

        <DropdownMenuContent
          className="w-[22rem] sm:w-[25rem] ms-5 mt-3 "
          align="end"
        >
          <DropdownMenuLabel>
            <span className="line-clamp-1 capitalize text-lg font-poppins-semibold">
              Notifications
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <Tabs defaultValue="showall">
            <TabsList className="w-full">
              <TabsTrigger value="showall" className="w-full">
                Show All
              </TabsTrigger>
              <TabsTrigger value="unread" className="w-full">
                Unread
              </TabsTrigger>
            </TabsList>
            <TabsContent value="showall">
              <div className="overflow-y-auto max-h-96 no-scrollbar">
                {isLoading ? (
                  <>Loading</>
                ) : (
                  <>
                    {userNotifications &&
                    userNotifications.notifications &&
                    userNotifications.notifications.length > 0 ? (
                      userNotifications.notifications.map((item, index) => (
                        <React.Fragment key={index}>
                          <DropdownMenuItem
                            className={`flex flex-col justify-start items-start cursor-pointer min-h-20 ${
                              item.viewed ? "" : "bg-gray-200 font-bold"
                            }`}
                            onClick={() =>
                              handleReadNotification(item.redirect_to, item.id)
                            }
                          >
                            <span className="font-poppins-medium text-sm mt-2 opacity-70">
                              {item.body}
                            </span>
                            <span>
                              {timeAgo(item.createdat as unknown as string)}
                            </span>
                          </DropdownMenuItem>
                          <hr className="my-1" />
                        </React.Fragment>
                      ))
                    ) : (
                      <div className="flex flex-col justify-center items-center cursor-pointer min-h-20">
                        notification received yet
                      </div>
                    )}
                  </>
                )}
              </div>
            </TabsContent>
            <TabsContent value="unread">
              <div className="overflow-y-auto max-h-96 no-scrollbar">
                {isLoading ? (
                  <>Loading</>
                ) : (
                  <>
                    {userNotifications &&
                    userNotifications.notifications &&
                    userNotifications.notifications.length > 0 ? (
                      userNotifications.notifications
                        .filter(item => !item.viewed)
                        .map((item, index) => (
                          <React.Fragment key={index}>
                            <DropdownMenuItem
                              className={`flex flex-col justify-start items-start cursor-pointer min-h-20 ${
                                item.viewed ? "" : "bg-gray-200 font-bold"
                              }`}
                              onClick={() =>
                                handleReadNotification(
                                  item.redirect_to,
                                  item.id
                                )
                              }
                            >
                              <span className="font-poppins-medium text-sm mt-2 opacity-70">
                                {item.body}
                              </span>
                              <span>
                                {timeAgo(item.createdat as unknown as string)}
                              </span>
                            </DropdownMenuItem>
                            <hr className="my-1" />
                          </React.Fragment>
                        ))
                    ) : (
                      <div className="flex flex-col justify-center items-center cursor-pointer min-h-20">
                        You have no unread notification.
                      </div>
                    )}
                  </>
                )}
              </div>
            </TabsContent>

            <div className="pt-1">
              <Button
                onClick={() =>
                  unreadNotificationIds.forEach(id =>
                    handleReadAllNotification(id)
                  )
                }
                className={`w-full bg-gray-200 ${
                  isReadLoading
                    ? "cursor-not-allowed"
                    : "hover:bg-black hover:text-gray-200 text-black"
                }`}
                disabled={isReadLoading}
              >
                {isReadLoading ? "Marking all as read..." : "Mark all as read"}
              </Button>
            </div>
          </Tabs>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderNotification;
