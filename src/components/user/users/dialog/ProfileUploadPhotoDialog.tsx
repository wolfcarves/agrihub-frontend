import React, { useRef } from "react";
import { Dialog, DialogContent, DialogTitle } from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { MdOutlineFileUpload } from "react-icons/md";
import useGetWindowSize from "@hooks/utils/useGetWindowSize";
import AvatarEditor from "react-avatar-editor";

interface ProfileUploadPhotoDialogProps {
  open?: boolean;
  image?: any;
  onOpenChange?: (open: boolean) => void;
  onChangePhotoClick?: () => void;
  onSaveClick?: (file: Blob | null) => void;
  onCancelClick?: () => void;
  isLoading?: boolean;
}

const ProfileUploadPhotoDialog = ({
  open,
  image,
  onOpenChange,
  onChangePhotoClick,
  onSaveClick,
  onCancelClick,
  isLoading
}: ProfileUploadPhotoDialogProps) => {
  const editor = useRef<AvatarEditor>(null);
  const { width: screenWidth } = useGetWindowSize();

  const editorSize =
    screenWidth > 480
      ? 480
      : screenWidth < 480
      ? screenWidth - 40
      : screenWidth;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-max rounded-md">
          <DialogTitle>Profile Photo</DialogTitle>

          <div className="relative h-max aspect-square border rounded-md overflow-hidden">
            <AvatarEditor
              ref={editor}
              image={image}
              width={editorSize}
              height={editorSize}
              color={[255, 255, 255, 0.6]}
              scale={1}
              rotate={0}
              border={0}
            />
          </div>

          <Button
            className="w-full"
            variant="secondary"
            onClick={onChangePhotoClick}
          >
            <MdOutlineFileUpload size={20} className="me-2 opacity-60" />
            Upload Photo
          </Button>

          <div className="mt-3 space-y-2">
            <Button
              className="w-full"
              isLoading={isLoading}
              onClick={() => {
                const canvas = editor?.current?.getImage();

                canvas?.toBlob(blob => {
                  onSaveClick && onSaveClick(blob);
                });
              }}
            >
              Save
            </Button>

            <Button
              className="w-full"
              variant="outline"
              disabled={isLoading}
              onClick={onCancelClick}
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileUploadPhotoDialog;
