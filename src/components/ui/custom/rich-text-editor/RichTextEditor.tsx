import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";

import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
import { Extensions } from "@tiptap/react";

interface RichTextEditorProps
  extends Omit<EditorContentProps, "editor" | "onBlur"> {
  onBlur?: (data: { html?: string; files?: File[] | null }) => void;
}

const RichTextEditor = ({ onBlur, ...props }: RichTextEditorProps) => {
  const extensions: Extensions = [
    Image.configure({
      inline: true,
      HTMLAttributes: {
        class: "mb-1 object-cover block"
      }
    }),
    StarterKit.configure({
      bulletList: {
        HTMLAttributes: {
          class: "ms-5"
        }
      },
      orderedList: {
        HTMLAttributes: {
          class: "ms-5"
        }
      }
    })
  ];

  const [fileList, setFileList] = useState<File[] | null>(null);

  const exisitingUrls: string[] = [];
  const [nonSureUrls, setNonSureUrls] = useState<string[]>([]);
  const files: File[] | null = [];

  const editor = useEditor(
    {
      extensions,
      onBlur: ({ editor }) => {
        const { doc } = editor.state;

        doc.descendants(node => {
          if (node.type.name === "image") {
            const url = node.attrs.src;

            exisitingUrls.push(url);

            files.length = 0;
            fileList?.map((file, index) => {
              if (exisitingUrls.includes(nonSureUrls[index])) {
                files.push(file);
              }
            });
          }
        });

        if (editor) {
          onBlur && onBlur({ html: editor?.getHTML(), files });
        }
      }
    },
    []
  );

  if (!editor) return null;

  const handleImageUpload = (file: File | null) => {
    if (file) {
      const toDataUrl = async () => {
        try {
          if (!fileList) {
            setFileList([file]);
          } else {
            setFileList([...fileList, file]);
          }

          const imageUrl = URL.createObjectURL(file);

          editor.commands.setImage({ src: imageUrl });
          editor.commands.focus();

          setNonSureUrls(prev => [...prev, imageUrl]);
        } catch (error) {
          console.error("Error converting to data URL:", error);
        }
      };
      toDataUrl();
    }
  };

  return (
    <div className="shadow-md border border-border rounded-md w-full max-w-[60rem]">
      <div className="bg-[#DCF2D3] p-1 flex gap-1">
        <Toolbar editor={editor} onImageUpload={handleImageUpload} />
      </div>
      <EditorContent editor={editor as Editor} {...props} />
    </div>
  );
};

export default RichTextEditor;
