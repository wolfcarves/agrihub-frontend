import React from "react";
import { Editor } from "@tiptap/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../dropdown-menu";
import {
  LucideHeading1,
  LucideHeading2,
  LucideHeading3,
  LucideHeading4,
  LucideHeading5,
  LucideHeading6
} from "lucide-react";
import {
  FaBold,
  FaListOl,
  FaListUl,
  FaMinus,
  FaRedo,
  FaRegImage,
  FaTextHeight,
  FaUndo,
  FaItalic
} from "react-icons/fa";
import { FaHeading } from "react-icons/fa6";
import imageCompression, { Options } from "browser-image-compression";
import { toast } from "sonner";

type ToolbarProps = {
  editor: Editor;
  onImageUpload?: (file: File | null) => void;
};

const Toolbar: React.FC<ToolbarProps> = ({ editor, onImageUpload }) => {
  const addImage = async (data: React.ChangeEvent<HTMLInputElement>) => {
    const file = data.target?.files?.[0];

    if (file) {
      // if (file?.size > 2000000) {
      //   return toast.error("File is too large, 2mb is the maximum", {});
      // }

      const options: Options = {
        maxSizeMB: 1,
        fileType: "image/*",
        preserveExif: true,
        maxWidthOrHeight: 480
      };

      const compressFile = await imageCompression(file, options);
      const convertedToFile = new File([compressFile], compressFile.name, {
        type: compressFile.type
      });

      onImageUpload && onImageUpload(convertedToFile);
    }
  };

  return (
    <>
      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("bold") ? "bg-primary text-white" : ""
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("italic") ? "bg-primary text-white" : ""
        }`}
      >
        <FaItalic />
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().undo().run();
        }}
        className="active:bg-primary active:text-white p-2 rounded-md"
        disabled={!editor.can().undo()}
      >
        <FaUndo />
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().redo().run();
        }}
        className="active:bg-primary active:text-white p-2 rounded-md"
        disabled={!editor.can().redo()}
      >
        <FaRedo />
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 5 }).run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("heading", { level: 5 })
            ? " bg-primary text-white"
            : ""
        }`}
      >
        <FaHeading className="h-5" />
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("bulletList") ? "bg-primary text-white" : ""
        }`}
      >
        <FaListUl />
      </button>
      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("orderedList") ? "bg-primary text-white" : ""
        }`}
      >
        <FaListOl />
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          editor.chain().focus().setHorizontalRule().run();
        }}
        className="active:bg-primary active:text-white p-2 rounded-md"
      >
        <FaMinus />
      </button>

      <button className="relative flex items-center gap-3 active:text-white p-2 rounded-md hover:bg-primary ">
        <FaRegImage />
        <span className="text-sm">Upload image</span>
        <input
          type="file"
          value={[]}
          accept="image/png, image/jpg, image/jpeg"
          className="absolute opacity-0 inset-0 m-auto"
          onChange={data => {
            addImage(data);
          }}
        />
      </button>
    </>
  );
};

export default Toolbar;
