import React from "react";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove
} from "react-hook-form";
import { convertToEmbedLink, formatDate } from "../../lib/utils";
import { FaRegTrashCan } from "react-icons/fa6";
import parse from "html-react-parser";
import { Material, Problem } from "./form/farm-problem-schema";
import { useMutation } from "@tanstack/react-query";
import { FarmProblemsService } from "../../../api/openapi";
import { toast } from "sonner";
import LoadingSpinner from "../../../icons/LoadingSpinner";

type LearningMaterialProps = {
  items: Material;
  index: number;
  setSelection: React.Dispatch<React.SetStateAction<boolean>>;
  fields: FieldArrayWithId<Problem, "materials", "id">[];
  problemId: string | undefined;
  append?: UseFieldArrayAppend<Problem, "materials">;
  remove?: UseFieldArrayRemove;
  is_archived?: boolean;
  isEditing?: boolean;
};
export default function LearningMaterial({
  items,
  index,
  fields,
  setSelection,
  append,
  problemId,
  remove,
  is_archived,
  isEditing
}: LearningMaterialProps) {
  const { mutateAsync, isLoading: IsMutationLoading } = useMutation(
    ["REMOVE_LEARNING_MATERIAL_KEY"],
    {
      async mutationFn(id: string) {
        const response =
          await FarmProblemsService.deleteApiFarmProblemsMaterial({
            id
          });
        return response;
      },
      onSuccess: () => {}
    }
  );
  return (
    <article
      className="max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
      onClick={() => {
        // e.stopPropagation();
        const isInList = fields.some(learn => learn.title === items.title);
        if (append && !isInList) {
          append(items);
        }
        setSelection(false);
      }}
    >
      <div className="cursor-pointer">
        <div className="relative">
          <div className="h-48 rounded-t-md">
            {items.thumbnail.type === "image" ? (
              <img
                src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${items.thumbnail.resource}`}
                alt={items.thumbnail.id}
                className="w-full aspect-video object-cover object-center rounded-md h-48 rounded-t-md"
              />
            ) : items.thumbnail.type === "video" ? (
              <div className="w-full aspect-video h-48 rounded-t-md">
                <iframe
                  className="w-full h-full rounded-t-md"
                  src={convertToEmbedLink(items.thumbnail.resource || "")}
                  title={items.thumbnail.id}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
          </div>
          {remove && !is_archived && isEditing && (
            <button
              type="button"
              className="absolute top-0 right-0 text-white bg-red-600 rounded-full p-1 cursor-pointer"
              onClick={async () => {
                if (remove) {
                  if (problemId && items.fpm_id) {
                    try {
                      await mutateAsync(items.fpm_id ?? "");
                    } catch (error: any) {
                      toast.error(error.body.message);
                    }
                  }

                  remove(index);
                }
              }}
            >
              {IsMutationLoading ? (
                <LoadingSpinner className="absolute" />
              ) : (
                <FaRegTrashCan />
              )}
            </button>
          )}
        </div>

        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="">
            <span className="block text-gray-400 text-sm">
              {formatDate(items.createdat)}
            </span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3 ">
          <h3 className="text-xl text-gray-900 truncate">{items.title}</h3>
          <p className="text-gray-400 text-sm mt-1 line-clamp-3">
            {parse(items.content || "")}
          </p>

          <div className="my-4 item">
            <p className="text-gray-700 mb-2 flex flex-wrap">
              {items.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 mb-2 py-1"
                >
                  {tag.tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
