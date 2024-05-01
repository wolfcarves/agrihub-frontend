import { useCallback, useEffect, useState } from "react";

import LoadingSpinner from "@icons/LoadingSpinner";
import { AiOutlineCloseCircle } from "react-icons/ai";

import TagsInput, { RenderLayout } from "react-tagsinput";

import { TagsSchema } from "@api/openapi";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";

type TagOptionProps = {
  details?: string;
} & TagsSchema[number];

interface UserTagInputDropdownProps {
  keyword: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultIdTagValue?: string[] | (string | undefined)[] | undefined;
  defaultTagValue?: string[] | (string | undefined)[] | undefined;
  onTagsValueChange?: (e: string[]) => void;
  isError?: boolean;
  disabled?: boolean;
}

const UserTagInputDropdown = ({
  keyword,
  onChange,
  defaultTagValue,
  defaultIdTagValue,
  onTagsValueChange,
  isError,
  disabled
}: UserTagInputDropdownProps) => {
  //All tags
  const [tags, setTags] = useState<Array<string>>(
    (defaultTagValue as string[]) ?? []
  );
  const [idTags, setIdTags] = useState<Array<string>>(
    (defaultIdTagValue as string[]) ?? []
  );

  const [isInputTagFocused, setIsInputTagFocused] = useState<boolean>(false);
  const { data: option } = useGetTagByKeyWord(keyword);

  const handleToggleTag = useCallback(
    (val: string) => {
      if (tags.indexOf(val) === -1) {
        setTags([...tags, val]);
      } else {
        setTags(tags.filter(t => t !== val));
      }
    },
    [tags]
  );

  useEffect(() => {
    if (onTagsValueChange) onTagsValueChange(idTags);
  }, [idTags, tags]);

  const renderTag = useCallback(
    ({
      tag,
      getTagDisplayValue
    }: {
      tag: string;
      getTagDisplayValue: (tag: string) => string;
    }) => {
      return (
        <button
          key={tag}
          className={`${
            isError && "border border-red-500"
          } && max-h-7 border m-0.5 border-primary-3/80 bg-primary-1/40 rounded-sm w-[150px] px-2 py-1`}
          onClick={() => {
            const tagIndex = tags.indexOf(tag);

            if (tagIndex !== -1) {
              setIdTags(
                idTags.slice(0, tagIndex).concat(idTags.slice(tagIndex + 1))
              );
              setTags(tags.filter(val => val !== tag));
            }
          }}
        >
          <div className="flex gap-1 items-center">
            <span className="w-full truncate">{getTagDisplayValue(tag)}</span>

            <div className="text-primary-2">
              <AiOutlineCloseCircle />
            </div>
          </div>
        </button>
      );
    },
    [tags, idTags]
  );

  function renderTagCards<T extends TagOptionProps>(
    { id, tag_name, details }: T,
    index: number
  ) {
    if (id && tag_name) {
      return (
        <button
          key={`${id}${index}`}
          type="button"
          className={`${
            tags.indexOf(tag_name) !== -1 ? "bg-green-200" : ""
          } border flex flex-col gap-3 text-start col-span-1 h-full hover:bg-green-100 hover:cursor-pointer duration-100 p-2 rounded-md`}
          onClick={() => {
            if (!idTags.includes(id)) {
              setIdTags([...idTags, id]);
            } else {
              setIdTags(t => t.filter(t => t !== id));
            }

            handleToggleTag(tag_name);
          }}
        >
          <h6 className="text-primary w-full truncate">{tag_name}</h6>
          <div className="line-clamp-5">
            <span>{details}</span>
          </div>
        </button>
      );
    } else {
      <div className="col-span-3 flex items-center justify-center">
        <LoadingSpinner />
      </div>;
    }
  }

  const renderLayout: RenderLayout = renderedTag => {
    return (
      <div
        className="flex flex-wrap min-h-11 rounded-lg w-full
        border border-input bg-background text-sm ring-offset-background
        file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50 items-center"
      >
        {renderedTag}

        <input
          onChange={onChange}
          onFocus={() => setIsInputTagFocused(true)}
          className="outline-0 flex-1 h-full px-3 py-3 rounded-lg"
          disabled={disabled}
        />

        <div
          className={`${
            option && isInputTagFocused ? "grid" : "hidden"
          } grid-cols-2 sm:grid-cols-3 gap-x-1 gap-y-5 justify-evenly absolute top-[100%] left-0 z-50 w-full overflow-y-scroll
          rounded-lg bg-gray-50 border p-1 min-h-[50px] max-h-[400px]`}
        >
          {option && option.map(renderTagCards)}

          {!option && (
            <div className="col-span-3 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
        </div>

        {isInputTagFocused && (
          <button
            className="me-2 font-poppins-medium text-center mx-auto my-auto text-primary bg-primary/10 p-2 rounded-md"
            onClick={() => {
              setIsInputTagFocused(false);
            }}
          >
            Done
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="relative">
      <TagsInput
        onChange={() => {}}
        value={tags}
        onlyUnique
        preventSubmit
        renderTag={renderTag}
        renderLayout={renderLayout}
      />
    </div>
  );
};

export default UserTagInputDropdown;
