import { useEditor, EditorContent, EditorContentProps } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import { Extensions, Editor } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";

interface RichTextEditorProps
  extends Omit<
    EditorContentProps,
    "editor" | "onBlur" | "onChange" | "height"
  > {
  onBlur?: (data: {
    html?: string;
    files?: Promise<Blob[]>;
    charSize?: number;
  }) => void;
  onChange?: (data: { charSize?: number }) => void; // temporary lang to bwisit tong text editor di ko na to gagmitin sa susunod
  withToolbar?: boolean;
  allowImagePaste?: boolean;
  height?: number;
  disabled?: boolean;
  defaultValue?: string;
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
  onChange,
  withToolbar = true,
  allowImagePaste = true,
  height,
  disabled = false,

  defaultValue,
  ...props
}) => {
  const extensions: Extensions = [
    CharacterCount.configure({
      limit: null, //1000 characters only
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
      },
      paragraph: {
        HTMLAttributes: {
          class: "min-h-[1rem]"
        }
      }
    })
  ];

  const [fileList, setFileList] = useState<File[] | null>(null);
  const exisitingUrls: string[] = [];
  const [nonSureUrls, setNonSureUrls] = useState<string[]>([]);
  const files: Blob[] = [];

  const editor = useEditor({
    editorProps: !allowImagePaste
      ? {
          transformPastedHTML(html) {
            return html.replace(/<img.*?>/g, "");
          }
        }
      : undefined,
    extensions,
    content: defaultValue,

    onUpdate: ({ editor }) => {
      onChange &&
        onChange({
          charSize: editor.storage.characterCount.characters()
        });
    },
    onBlur: ({ editor }) => {
      const { doc } = editor.state;

      editor.commands.setContent(editor?.getHTML(), false, {
        preserveWhitespace: "full"
      });

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

      const hardBreakPattern = /(<br>\s*)+/g;
      const emptyParagraphPattern = /(<p class="min-h-\[1rem\]"><\/p>)+/g;

      const preCodePatternOpenTag =
        /<pre><code class="language-typescriptreact">/g;
      const preCodePatternCloseTag = /(<\/code><\/pre>)/g;

      let html = editor
        ?.getHTML()
        .replace(hardBreakPattern, "<br>")
        .replace(emptyParagraphPattern, `<br>`)
        .replace(preCodePatternOpenTag, `<p class="min-h-[1rem]">`)
        .replace(preCodePatternCloseTag, "</p>");

      const lastTag = html.slice(html.length - 4, html.length);

      if (lastTag === "<br>") {
        html = html.slice(0, html.length - 4);
      }

      if (editor) {
        onBlur &&
          onBlur({
            html,
            files: filesToBlobs(files as File[]).then((blobs: Blob[]) => {
              return blobs;
            }),
            charSize: editor.storage.characterCount.characters()
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
    <div
      className={`shadow-md border border-border rounded-md w-full max-w-[60rem] flex flex-col ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {withToolbar && (
        <div className="bg-[#DCF2D3] p-1 flex gap-1">
          <Toolbar
            editor={editor as Editor}
            onImageUpload={handleImageUpload}
          />
        </div>
      )}
      <EditorContent
        editor={editor}
        {...{ props }}
        style={{ minHeight: height }}
      />
    </div>
  );
};

export default RichTextEditor;
