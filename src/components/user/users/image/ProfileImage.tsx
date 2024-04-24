import useAuth from "@hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuPencil, LuUpload } from "react-icons/lu";
import useUpdateUserProfileMutation from "@hooks/api/post/useUpdateUserProfileMutation";
import ProfileUploadPhotoDialog from "../dialog/ProfileUploadPhotoDialog";
import { toast } from "sonner";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button } from "@components/ui/button";
import {
  MdLocationPin,
  MdOutlineRemoveRedEye,
  MdOutlineReportGmailerrorred
} from "react-icons/md";
import { MONTHS } from "@pages/user/planting-calendar/planting-calendar";
import { Skeleton } from "@components/ui/skeleton";
import { RiCake2Fill } from "react-icons/ri";
import { IoIosPerson } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { formatRoles } from "../../../lib/utils";
import useDeleteUserProfileAvatar from "@hooks/api/delete/useDeleteUserProfileAvatar";
import LoadingSpinner from "@icons/LoadingSpinner";

interface ProfileImageProps {
  isLoading?: boolean;
  userId?: string;
  avatar?: string;
  fullname?: string;
  role?: string;
  username?: string;
  postCount?: number;
  saveCount?: number;
  bio?: string;
  district?: string;
  createdAt?: string;
  onReportButtonClick?: () => void;
}

const ProfileImage = ({
  isLoading,
  userId,
  avatar,
  fullname,
  role,
  username,
  bio,
  district,
  createdAt,
  postCount,
  saveCount,
  onReportButtonClick
}: ProfileImageProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(200);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState<boolean>(false);
  const [isPopOverOpen, setIsPopOverOpen] = useState<boolean>(false);

  const pathname = useLocation().pathname;
  const user = useAuth();
  const params = useParams();
  const isOwn = user?.data?.id === params.userId;
  const page = !params.saved ? 0 : 1;

  const { mutateAsync: updateUserProfile, isLoading: isUpdateUserLoading } =
    useUpdateUserProfileMutation();

  const [profileImgFile, setProfileImgFile] = useState<File>();
  const imageRef = useRef<HTMLInputElement>(null);

  const d = new Date(createdAt!);
  const joinedAt = MONTHS[d.getMonth()] + " " + d.getFullYear();

  useEffect(() => {
    window.scrollTo({ top: scrollPosition });
  }, [pathname]);

  const handleUploadPhoto = async (file?: Blob | null) => {
    try {
      if (file) {
        await updateUserProfile({
          id: user?.data?.id ?? "",
          formData: {
            avatar: file
          }
        });

        setIsUploadDialogOpen(prev => !prev);
        return;
      }

      toast.error("File not found.");
    } catch (error: any) {
      console.log(error.body.message);
    }
  };

  const { mutateAsync: deleteAvatar, isLoading: isDeleteAvatarLoading } =
    useDeleteUserProfileAvatar();

  const handleViewAvatar = () => {
    const splitted = avatar?.split("/");
    if (splitted?.[splitted?.length - 1] !== "null") {
      window.open(avatar ?? "");
    }
  };

  const handleRemovePhoto = async () => {
    try {
      const splitted = avatar?.split("/");

      if (splitted?.[splitted?.length - 1] === "null") {
        toast.info("You have nothing to delete");
        return;
      }

      await deleteAvatar();
      toast.info("Photo removed");
    } catch (error: any) {
      console.log(error.body.message);
      toast.error(error.body.message);
    }
  };

  return (
    <>
      <div className="flex absolute top-0 start-0 h-[27rem] w-full bg-gradient-to-r from-amber-200 via-purple-200 to-pink-200 -z-10"></div>
      <div className="h-[17.5rem] sm:h-[16rem]"></div>

      <div className="relative">
        <div className="flex flex-wrap gap-y-5 items-end justify-between">
          <div
            className="relative group w-[10rem] aspect-square bg-white border-4 border-slate-200 active:scale-90 active:ring-4 ring-slate-200 rounded-full cursor-pointer overflow-hidden duration-100"
            onClick={() => {
              setIsPopOverOpen(prev => !prev);
            }}
          >
            <Avatar className="w-full h-full flex">
              {isUpdateUserLoading || isDeleteAvatarLoading ? (
                <LoadingSpinner className="m-auto h-max text-border text-2xl" />
              ) : (
                <>
                  <AvatarImage
                    src={avatar}
                    className="w-full aspect-square absolute inset-0 object-cover object-center group-hover:brightness-110 "
                  />
                  <AvatarFallback className=" text-3xl">
                    {fullname?.charAt(0)}
                  </AvatarFallback>
                </>
              )}
            </Avatar>

            {isOwn && (
              <input
                ref={imageRef}
                type="file"
                accept="image/jpg,image/jpeg,image/png"
                className="hidden"
                onChange={e => {
                  if (e.target.files) {
                    setProfileImgFile(e.target.files[0]);
                  } else {
                    toast.error("Failed to upload photo");
                  }
                }}
              />
            )}
          </div>

          <div className="flex gap-2">
            {onReportButtonClick && !isOwn && (
              <Button
                variant="destructive"
                size="sm"
                onClick={onReportButtonClick}
              >
                <MdOutlineReportGmailerrorred size={20} className="me-2" />{" "}
                Report user
              </Button>
            )}

            {isOwn && (
              <Link to={"/forum/ask"} className="underline underline-offset-2">
                <Button size="sm">Ask question</Button>
              </Link>
            )}

            {isOwn && (
              <Link
                to={"/settings/account"}
                className="underline underline-offset-2"
              >
                <Button variant="outline" size="sm">
                  <LuPencil className="me-2" /> Edit profile
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center justify-between border-b pt-5 pb-3">
          <div className="space-y-1.5 ">
            <h4 className="font-poppins-semibold tracking-tight text-3xl">
              {!isLoading ? fullname : <Skeleton className="h-7 w-60 mb-5" />}
            </h4>
            <p className="font-poppins-regular tracking-tight">
              {!isLoading ? bio : <Skeleton className="h-4 w-40 mb-5" />}
            </p>

            <div className="flex flex-wrap gap-y-2 space-x-5 ">
              <span className="text-foreground/70 font-poppins-medium tracking-tight">
                {!isLoading ? (
                  `@${username}`
                ) : (
                  <Skeleton className="h-5 w-24" />
                )}
              </span>
              <span className="text-foreground/70">|</span>
              <span className="flex gap-1 items-center text-foreground/70 font-poppins-medium tracking-tight">
                <span className="mb-1">
                  <RiCake2Fill />
                </span>
                {!isLoading ? (
                  `Joined ${joinedAt}`
                ) : (
                  <Skeleton className="h-5 w-24" />
                )}
              </span>
              <span className="text-foreground/70">|</span>
              <span className="flex gap-1 items-center text-foreground/70 font-poppins-medium tracking-tight">
                <span className="mb-1">
                  <IoIosPerson />
                </span>
                {!isLoading ? (
                  `${formatRoles(role || "")}`
                ) : (
                  <Skeleton className="h-5 w-24" />
                )}
              </span>
              <span className="text-foreground/70">|</span>
              <span className="flex gap-1 items-center text-foreground/70 font-poppins-medium tracking-tight">
                <span className="mb-1">
                  <MdLocationPin />
                </span>
                {!isLoading ? (
                  `District ${district}`
                ) : (
                  <Skeleton className="h-5 w-24" />
                )}
              </span>
            </div>
          </div>

          <div className="flex gap-3 h-28">
            {!isLoading ? (
              <Link
                to={`/users/${userId}/${username}/`}
                replace
                onClick={() => {
                  setScrollPosition(window.scrollY);
                }}
              >
                <button
                  className={`flex flex-col justify-center items-start w-40 h-full aspect-square bg-primary/20 rounded-md px-4 ${
                    page === 0 && "border border-primary"
                  }`}
                >
                  <h2 className="tracking-tight text-primary">{postCount}</h2>
                  <span className="tracking-tight text-primary whitespace-nowrap">
                    Questions Posted
                  </span>
                </button>
              </Link>
            ) : (
              <Skeleton className="w-40 h-full aspect-square bg-primary/20 rounded-md px-4" />
            )}

            {!isLoading && isOwn ? (
              <Link
                to={`/users/${userId}/${username}/saved`}
                replace
                onClick={() => {
                  setScrollPosition(window.scrollY);
                }}
              >
                <button
                  className={`flex flex-col justify-center items-start w-40 h-full aspect-square bg-blue-200/30 rounded-md px-4 ${
                    page === 1 && "border border-blue-500"
                  }`}
                >
                  <h2 className="tracking-tight text-blue-500">{saveCount}</h2>
                  <span className="tracking-tight text-blue-500 whitespace-nowrap">
                    Questions Saved
                  </span>
                </button>
              </Link>
            ) : !isOwn ? (
              <></>
            ) : (
              <Skeleton className="w-40 h-full aspect-square bg-blue-200/30 rounded-md px-4" />
            )}
          </div>
        </div>

        {isPopOverOpen && (
          <div className="flex flex-col p-1 top-44 w-full max-w-[25rem] bg-white absolute z-10 border rounded-md">
            <>
              <button
                className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md p-2"
                onClick={handleViewAvatar}
              >
                <MdOutlineRemoveRedEye className="text-xl w-5" />
                <span className="font-poppins-bold text-black/80">
                  View Profile
                </span>
              </button>

              {isOwn && (
                <>
                  <button
                    className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md p-2"
                    onClick={() => {
                      setIsUploadDialogOpen(true);
                    }}
                  >
                    <LuUpload className="text-lg w-5" />
                    <span className="font-poppins-bold text-black/80">
                      Upload Photo
                    </span>
                  </button>

                  <button
                    className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md p-2"
                    onClick={() => {
                      handleRemovePhoto();
                      setIsPopOverOpen(prev => !prev);
                    }}
                  >
                    <FaRegTrashCan className="text-lg w-5" />
                    <span className="font-poppins-bold text-black/80">
                      Remove Photo
                    </span>
                  </button>
                </>
              )}
            </>
          </div>
        )}
      </div>

      {isOwn && (
        <ProfileUploadPhotoDialog
          open={isUploadDialogOpen}
          image={profileImgFile}
          isLoading={isUpdateUserLoading}
          onOpenChange={() => {
            setIsUploadDialogOpen(prev => !prev);
          }}
          onChangePhotoClick={() => {
            imageRef?.current?.click();
          }}
          onSaveClick={file => {
            handleUploadPhoto(file);
          }}
          onCancelClick={() => setIsUploadDialogOpen(prev => !prev)}
        />
      )}
    </>
  );
};

export default ProfileImage;
