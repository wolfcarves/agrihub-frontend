import { useEffect, useRef, useState } from "react";
import { Button, Input, Typography } from "@components-ui";
import LoadingSpinner from "@icons/LoadingSpinner";
import { Form } from "react-router-dom";
import TagsInput from "react-tagsinput";
import axios from "axios";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { UserFinalSetup, userFinalSetup } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useUserFinalSetup from "@hooks/api/post/useUserFinalSetup";

const UserFinalSetupForm = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [imgFile, setImgFile] = useState<File | undefined>();
  const [tags, setTags] = useState<Array<string>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [fetchedTags, setFetchedTags] = useState<any>([]);

  useEffect(() => {
    const fetchTags = async (searchParam: string) => {
      try {
        const res = await axios({
          method: "get",
          url: `https://dummyjson.com/posts/search?q=${searchParam}`
        });

        setFetchedTags(res.data.posts);
      } catch (error) {
        //
      }
    };

    fetchTags(inputValue);
  }, [inputValue, tags]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFinalSetup>({
    resolver: zodResolver(userFinalSetup),
    mode: "onChange"
  });

  const { ref, onChange } = { ...register("avatar") };

  const handleAddAndRemoveTag = (val: string) => {
    if (tags.indexOf(val) === -1) {
      setTags([...tags, val]);
    } else {
      setTags(tags.filter(t => t !== val));
    }
  };

  const handleFileUpload = () => {
    inputFileRef?.current?.click();
  };

  const {
    mutateAsync: userFinalSetupMutate,
    isLoading: isUserFinalSetupLoading
  } = useUserFinalSetup();

  const handleOnSubmitForm = async (rawData: UserFinalSetup) => {
    const data = {
      avatar: rawData.avatar[0],
      username: rawData.username,
      tags
    };

    try {
      await userFinalSetupMutate(data);
    } catch (e: any) {
      console.log(e.body);
    }

    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(handleOnSubmitForm)}
      encType="multipart/form-data"
    >
      <div>
        <Input
          $label="Username"
          {...register("username")}
          $errorMessage={errors.username?.message}
        />
      </div>

      <div className="flex gap-3 mt-3">
        <div className="overflow-hidden w-[180px] border rounded-md aspect-square bg-gradient-to-r from-cyan-500 to-blue-500">
          {imgFile && (
            <img src={URL.createObjectURL(imgFile)} className="w-full h-full" />
          )}
        </div>

        <div className="flex flex-col py-1">
          <Typography.H6 $title="Profile Picture" $weight="medium" />

          <Typography.Span
            $title="Adding a photo can make it easier for others to
            recognize you."
            $color="gray-1"
          />

          <input
            {...register("avatar")}
            type="file"
            name="avatar"
            ref={e => {
              ref(e);
              inputFileRef.current = e;
            }}
            onChange={e => {
              onChange(e);
              setImgFile(
                e.target.files?.[0] !== undefined
                  ? e.target.files?.[0]
                  : imgFile
              );
            }}
            className="hidden"
          />

          <Typography.Span
            $title={errors.avatar?.message as string}
            $color="danger-1"
          />

          <div className="w-max mt-auto">
            <Button
              type="button"
              $title="Pick a photo"
              $variant="outlined"
              onClick={handleFileUpload}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 py-5">
        <Typography.H5 $title="Agricultural tags that interest you" />

        <div className="relative">
          <div className="rounded-xl border border-gray-1 w-full mt-2 min-h-[55px] py-1 px-4 focus:outline-primary-3 focus:shadow-md">
            <TagsInput
              {...register("tags")}
              value={tags}
              preventSubmit={true}
              onlyUnique
              onChange={() => {}}
              inputValue={inputValue}
              onChangeInput={(value: string) => {
                setInputValue(value);
              }}
              renderInput={({ addTag, ...props }) => (
                <input
                  key={"input"}
                  type="text"
                  style={{ outline: 0, height: 40, fontSize: 14 }}
                  placeholder=""
                  {...props}
                />
              )}
              renderTag={({ tag, getTagDisplayValue }) => (
                <button
                  key={tag + Math.random()}
                  className="border m-0.5 border-primary-3/80 bg-primary-1/40 rounded-sm w-max px-1 py-1"
                  onClick={() => {
                    setTags([...tags.filter(val => val !== tag)]);
                  }}
                >
                  <div className="flex gap-1 items-center">
                    <Typography.Span
                      $title={getTagDisplayValue(tag)}
                      $color="primary-2"
                    />

                    <div className="text-primary-2">
                      <AiOutlineCloseCircle />
                    </div>
                  </div>
                </button>
              )}
            />

            <div
              className={`${
                fetchedTags.length > 0 && inputValue ? "grid" : "hidden"
              } grid-cols-3 gap-y-5 justify-evenly absolute left-0 z-20 w-full min-h-[50px] max-h-[400px] overflow-y-scroll rounded-lg bg-gray-50 border p-1`}
            >
              {fetchedTags.length > 0 &&
                fetchedTags.map((item: any, index: any) => (
                  <button
                    key={`${item}${index}`}
                    className={`${
                      tags.indexOf(item.title) !== -1 ? "bg-primary-2/20" : ""
                    } flex flex-col gap-3 text-start col-span-1 h-full hover:bg-gray-2/30 hover:cursor-pointer p-2 rounded-md`}
                    onClick={() => {
                      setTags([...tags, item.title]);
                      handleAddAndRemoveTag(item.title);
                    }}
                    type="button"
                  >
                    <Typography.H6 $title={item.title} $color="primary-2" />
                    <div className="line-clamp-5">
                      <Typography.Span $title={item.body} />
                    </div>
                  </button>
                ))}

              {!fetchedTags && (
                <div className="col-span-3 flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              )}
            </div>
          </div>
        </div>

        <Button
          $title="Continue"
          $size="lg"
          $fullWidth
          $isLoading={isUserFinalSetupLoading}
          $disabled={isUserFinalSetupLoading}
          className="mt-10"
        />
      </div>
    </Form>
  );
};

export default UserFinalSetupForm;
