import Bold from "@tiptap/extension-bold";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect, useState } from "react";
import Italic from "@tiptap/extension-italic";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
interface RichTextEditorProps {
  setItem: React.Dispatch<React.SetStateAction<any>>;
}

Image.configure({
  allowBase64: true
});

const RichTextEditor: React.FC<RichTextEditorProps> = ({ setItem }) => {
  // const [data, setData] = useState<any>();

  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Image,
      Paragraph,
      Italic,
      Bold,
      ListItem,
      OrderedList,
      BulletList,
      HorizontalRule,

      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6]
      }),
      StarterKit
    ]
  });
  // editor ? console.log(editor.getHTML()) : '';
  useEffect(() => {
    if (editor) {
      setItem(editor.getHTML());
    }
    editor &&
      editor.commands.setImage({
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYscfUBUbqwGd_DHVhG-ZjCOD7MUpxp4uhNe7toUg4ug&s",
        alt: "A boring example image",
        title: "An example"
      });
  }, [editor?.getHTML()]);

  if (!editor) {
    return null;
  }

  return (
    <div className="shadow-md border border-border rounded-md mt-2 min-h-[20rem]">
      <div className="bg-[#DCF2D3] p-1 flex gap-1">
        <Toolbar editor={editor} />
      </div>
      <EditorContent className="max-w-[60rem] w-full" editor={editor} />
    </div>
  );
};

export default RichTextEditor;
