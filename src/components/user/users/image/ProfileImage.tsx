import useAuth from "@hooks/useAuth";
import { useRef, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";
import useUpdateUserProfileMutation from "./useUpdateUserProfileMutation";
import ProfileUploadPhotoDialog from "../dialog/ProfileUploadPhotoDialog";
import { toast } from "sonner";

interface ProfileImageProps {
  avatar?: string;
}

const ProfileImage = ({ avatar }: ProfileImageProps) => {
  const user = useAuth();
  const { mutateAsync: updateUserProfile, isLoading: isUpdateUserLoading } =
    useUpdateUserProfileMutation();

  const [profileImgFile, setProfileImgFile] = useState<File>();
  const imageRef = useRef<HTMLInputElement>(null);

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

  const handleRemovePhoto = async () => {
    toast.info("You can't remove your photo at the meantime.");

    // try {
    //   const res = await updateUserProfile({
    //     id: user?.data?.id ?? "",
    //     formData: {
    //       avatar: undefined
    //     }
    //   });
    //   console.log(res.message);
    // } catch (error: any) {
    //   console.log(error.body.message);
    // }
  };

  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState<boolean>(false);
  const [isPopOverOpen, setIsPopOverOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative flex items-end justify-center min-h-[15rem]">
        <div
          className="group w-[12rem] aspect-square border-4 border-slate-200 active:scale-90 active:ring-4 ring-slate-200 rounded-full translate-y-14 bg-white cursor-pointer overflow-hidden duration-100"
          onClick={() => {
            setIsPopOverOpen(prev => !prev);
          }}
        >
          <img
            src={avatar}
            className="h-full w-full absolute inset-0 object-cover object-center group-hover:brightness-110 "
          />

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
        </div>

        {isPopOverOpen && (
          <>
            <div className="flex flex-col p-1 pt-3 h-28 w-full max-w-[25rem] bg-white absolute -bottom-[190px] z-10 border rounded-md ">
              <button
                className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md px-2"
                onClick={() => {
                  setIsUploadDialogOpen(true);
                }}
              >
                <LuUpload className="text-lg" />
                <span className="font-poppins-bold text-black/80">
                  Upload Photo
                </span>
              </button>

              <button
                className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md px-2"
                onClick={() => {
                  handleRemovePhoto();
                }}
              >
                <FaRegTrashCan className="text-lg" />
                <span className="font-poppins-bold text-black/80">
                  Remove Photo
                </span>
              </button>
            </div>

            <div className="absolute w-4 h-4 bg-white border-t border-l -bottom-[86px] rotate-45 z-10" />
          </>
        )}
      </div>

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
    </>
  );
};

export default ProfileImage;
