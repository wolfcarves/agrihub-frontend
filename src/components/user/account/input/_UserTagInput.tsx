import { Input } from "@components/ui/custom";
import useGetTagById from "@hooks/api/get/useGetTagById";
import useGetTagByKeyWord from "@hooks/api/get/useGetTagByKeyword";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const UserTagInputDropdown = ({
  keyword,
  tagsId,
  setTagsId
}: {
  keyword?: string;
  tagsId?: string[];
  setTagsId: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const { data: tagsOptions } = useGetTagByKeyWord(keyword ?? "");

  const handleClick = (tagId?: string) => {
    const exist = tagsId && tagsId.includes(tagId ?? "");

    //checks if tagId is already in array
    if (tagId && !exist) {
      setTagsId(prev => [...prev, tagId]);
    }

    //remove tag id that exists in array
    if (exist && tagsId) {
      setTagsId(tagsId.filter(t => !t.includes(tagId ?? "")));
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-2 justify-evenly absolute top-[100%] left-0 z-20 w-full overflow-y-scroll rounded-lg bg-gray-50 border p-1 min-h-[50px] max-h-[400px]">
      {tagsOptions?.map(({ id, tag_name, details }) => (
        <button
          key={id}
          type="button"
          className={`${
            tagsId?.includes(id ?? "") && "bg-green-200"
          } border flex flex-col gap-3 text-start col-span-1 h-full hover:bg-green-100 hover:cursor-pointer duration-100 p-2 rounded-md`}
          onClick={() => handleClick(id)}
        >
          <h6 className="text-primary w-full truncate">{tag_name}</h6>
          <div className="line-clamp-5">
            <span className="text-sm">{details}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

const UserTagChip = ({ title }: { title?: string }) => {
  const { data: tagData } = useGetTagById(title ?? "");

  return (
    <button type="button">
      <div className="flex gap-2 items-center border border-primary bg-primary/10 w-max p-1 rounded-lg text-sm">
        <span className="text-primary">{tagData?.tag_name}</span>

        <AiOutlineClose className="text-primary" />
      </div>
    </button>
  );
};

interface _UserTagInputProps {
  value: string[]; // id tags
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

const _UserTagInput = ({ value, setValue }: _UserTagInputProps) => {
  const [keyword, setKeyword] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    // console.log(value);
  }, [value]);

  return (
    <>
      <div className="flex flex-wrap gap-1.5 py-5">
        {value?.map(title => {
          console.log(title);
          return <UserTagChip title={title} />;
        })}
      </div>

      <div className="relative">
        <Input onChange={handleInputChange} />
        <UserTagInputDropdown
          keyword={keyword}
          tagsId={value}
          setTagsId={setValue}
        />
      </div>
    </>
  );
};

export default _UserTagInput;
