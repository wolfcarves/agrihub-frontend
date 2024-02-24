import useAuth from "@hooks/useAuth";
import { useRef, useState } from "react";
import DefaultAvatar from "@assets/images/avatar.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@components/ui/dialog";
import { FaRegTrashCan } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

const ProfileImage = () => {
  const user = useAuth();

  const [profileImgFile, setProfileImgFile] = useState<File>();
  const profileRef = useRef<HTMLInputElement>(null);
  const [isPopOverOpen, setIsPopOverOpen] = useState<boolean>(false);

  const existingAvatar = user.data?.avatar;
  const userAvatar = profileImgFile
    ? URL.createObjectURL(profileImgFile)
    : existingAvatar
    ? existingAvatar
    : DefaultAvatar;

  return (
    <Dialog>
      <div className="relative flex items-end justify-center min-h-[22rem]">
        <div className="absolute inset-0 cursor-pointer border border-t-0 rounded-b-lg ">
          <img
            src="https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-full w-full object-cover object-center rounded-b-lg"
          />
        </div>

        <div
          className="group w-[12rem] aspect-square border-4 border-slate-200 active:scale-90 active:ring-4 ring-slate-200 rounded-full translate-y-14 bg-white cursor-pointer overflow-hidden duration-100"
          onClick={() => {
            setIsPopOverOpen(prev => !prev);
            // profileRef.current?.click();
          }}
        >
          <img
            src={userAvatar}
            className="h-full w-full absolute inset-0 object-cover object-center group-hover:brightness-110 "
          />

          <input
            ref={profileRef}
            type="file"
            className="hidden"
            onChange={e => {
              if (e.target.files) {
                setProfileImgFile(
                  e.target.files[0] ? e.target.files[0] : profileImgFile
                );
              }
            }}
          />
        </div>

        {isPopOverOpen && (
          <>
            <div className="flex flex-col p-1 pt-3 h-28 w-full max-w-[25rem] bg-white absolute -bottom-[190px] z-10 border rounded-md ">
              <button className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md px-2">
                <LuUpload className="text-lg" />
                <span className="font-poppins-bold text-black/80">
                  Upload Photo
                </span>
              </button>

              <button className="flex gap-3 items-center h-full text-sm hover:bg-black/10 rounded-md px-2">
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

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImage;
