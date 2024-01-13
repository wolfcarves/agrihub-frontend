import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { Extensions, Editor } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";

interface RichTextEditorProps
  extends Omit<EditorContentProps, "editor" | "onBlur"> {
  onBlur?: (data: { html?: string; files?: Promise<Blob[]> }) => void;
}

//put this shit to util folder pero sa susunod na yugto ng ating buhay nalang T_T
async function filesToBlobs(files: File[]): Promise<Blob[]> {
  const blobArray: Blob[] = [];

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type });
    blobArray.push(blob);
  }

  return blobArray;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  onBlur,
  ...props
}) => {
  const extensions: Extensions = [
    CharacterCount.configure({
      limit: 500, //500 characters only
      mode: "textSize"
    }),
    Image.configure({
      inline: false
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
  const files: Blob[] = [];

  const editor = useEditor({
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
        onBlur &&
          onBlur({
            html: editor?.getHTML(),
            files: filesToBlobs(files as File[]).then((blobs: Blob[]) => {
              return blobs;
            })
          });
      }
    }
  });

  if (!editor) return null;

  const handleImageUpload = (file: File | null) => {
    if (file) {
      if (!fileList) {
        setFileList([file]);
      } else {
        setFileList([...fileList, file]);
      }

      const imageUrl = URL.createObjectURL(file);

      editor.commands.setImage({ src: imageUrl });
      editor.commands.focus();

      setNonSureUrls(prev => [...prev, imageUrl]);
    }
  };

  return (
    <div className="shadow-md border border-border rounded-md w-full max-w-[60rem]">
      <div className="bg-[#DCF2D3] p-1 flex gap-1">
        <Toolbar editor={editor as Editor} onImageUpload={handleImageUpload} />
      </div>
      <EditorContent editor={editor} {...{ props }} />
    </div>
  );
};

export default RichTextEditor;
