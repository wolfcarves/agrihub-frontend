import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useState } from "react";

import Image from "@tiptap/extension-image";
import Toolbar from "./Toolbar";
import { Extensions } from "@tiptap/react";

interface RichTextEditorProps {
  onChange?: (data: { html?: string; images?: any; fileList?: File[] }) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ onChange }) => {
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
  const [fileList, setFileList] = useState<File[]>();

  const dataUrlConverter = async (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onerror = () => {
        reader.abort();
        reject(new DOMException("Error reading file"));
      };

      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.readAsDataURL(file);
    });
  };

  const editor = useEditor({
    extensions,
    onUpdate: ({ editor }) => {
      const { doc } = editor.state;
      const images: string[] = [];

      doc.descendants(node => {
        if (node.type.name === "image") {
          images.push(node.attrs.src);
        }

        return true;
      });

      //filter fileList
      if (fileList) {
        const someFunc = async () => {
          const url = await dataUrlConverter(fileList[0]);
          console.log(url);
        };

        someFunc();
      }

      if (editor) {
        onChange && onChange({ html: editor?.getHTML(), images, fileList });
      }
    }
  });

  if (!editor) return null;

  return (
    <div className="shadow-md border border-border rounded-md w-full max-w-[60rem]">
      <div className="bg-[#DCF2D3] p-1 flex gap-1">
        <Toolbar
          editor={editor}
          onImageUpload={file => {
            if (file && file.length) {
              const fileReader = new FileReader();

              fileReader.onload = e => {
                const dataUrl = e.target?.result;

                editor.commands.setImage({ src: dataUrl as string });
              };

              fileReader.readAsDataURL(file[0] as Blob);

              if (!fileList) {
                setFileList(Array.from(file));
              } else {
                setFileList(prev => prev?.concat(Array.from(file)));
              }
            }

            // const reader = new FileReader();

            // if (data) {
            //   reader.onload = e => {
            //     const src = e.target?.result as string;
            //     editor.commands.setImage({ src });
            //   };

            //   reader.readAsDataURL(data?.[0] as Blob);
            // }

            // console.log("uploads", data);
          }}
        />
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
