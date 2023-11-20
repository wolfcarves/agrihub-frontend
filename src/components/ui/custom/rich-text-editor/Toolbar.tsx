import React from "react";
import { Editor } from "@tiptap/react";
type ToolbarProps = {
  editor: Editor;
};
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

const Toolbar: React.FC<ToolbarProps> = ({ editor }) => {
  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <>
      <button
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        className={`p-2 rounded-md ${
          editor.isActive("bold") ? "bg-primary text-white" : ""
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded-md ${
          editor.isActive("italic") ? "bg-primary text-white" : ""
        }`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className="active:bg-primary active:text-white p-2 rounded-md"
        disabled={!editor.can().undo()}
      >
        <FaUndo />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className="active:bg-primary active:text-white p-2 rounded-md"
        disabled={!editor.can().redo()}
      >
        <FaRedo />
      </button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="active:bg-primary active:text-white p-2 rounded-md">
            <FaTextHeight />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Header</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 1 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 1 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading1 className="h-5" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 2 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading2 className="h-5" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 3 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 3 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading3 className="h-5" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 4 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 4 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading4 className="h-5" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 5 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 5 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading5 className="h-5" />
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 6 }).run();
              }}
              className={`rounded-md w-full ${
                editor.isActive("heading", { level: 6 }) ? " text-primary" : ""
              }`}
            >
              <LucideHeading6 className="h-5" />
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded-md ${
          editor.isActive("bulletList") ? "bg-primary text-white" : ""
        }`}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded-md ${
          editor.isActive("orderedList") ? "bg-primary text-white" : ""
        }`}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="active:bg-primary active:text-white p-2 rounded-md"
      >
        <FaMinus />
      </button>
      <button
        className="active:bg-primary active:text-white p-2 rounded-md"
        onClick={addImage}
      >
        <FaRegImage />
      </button>
    </>
  );
};

export default Toolbar;
