import React from "react";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Button } from "@components/ui/button";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import usePutLearningUpdateDraft from "../../../../hooks/api/put/usePutLearningUpdateDraft";
import { UpdateLearningMaterial } from "../../../../api/openapi";
import { addLearningDetailSchema } from "./schema";
import { Form, FormField } from "../../../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Loader from "../../../../icons/Loader";
import { Input } from "@components/ui/custom/input-admin/input";
import useGetLearningView from "../../../../hooks/api/get/useGetLearningView";

const LearningDetailForm = () => {
  // details edit
  const [isEditingDeets, setIsEditingDeets] = useState(false);
  const handleEditingDeets = () => {
    setIsEditingDeets(true);
  };
  //data
  const { learningsId } = useParams();
  const { data: LearningData, isLoading: LearningDataLoading } =
    useGetLearningView(learningsId || "");

  const form = useForm<UpdateLearningMaterial>({
    resolver: zodResolver(addLearningDetailSchema),
    mode: "onBlur"
  });

  //edit
  const { mutateAsync: updateDetailMutate, isLoading: isDetailLoading } =
    usePutLearningUpdateDraft();

  const handleSubmitForm = async (data: UpdateLearningMaterial) => {
    const compiledData: UpdateLearningMaterial = {
      title: data.title,
      content: data.content,
      language: data.language,
      type: "none"
    };

    try {
      await updateDetailMutate({
        id: learningsId || "",
        requestBody: compiledData
      });
      toast.success("Learning Detail Updated Successfully!");
      setIsEditingDeets(false);
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  console.log(form.formState.errors);

  // const handleSaveDeets = () => {
  //   setIsEditingDeets(false);
  // };
  if (LearningDataLoading) {
    return <Loader isVisible={true} />;
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmitForm)}
        encType="multipart/form-data"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold tracking-tight">Details</h2>
        </div>
        {/* title and type */}
        <div className="flex flex-wrap justify-between gap-4 mb-4">
          <div className="grid w-full max-w-3xl items-center gap-1.5">
            <Label htmlFor="text">Title</Label>
            <Input
              type="text"
              placeholder="Input material title"
              {...form.register("title")}
              defaultValue={LearningData?.title}
              readOnly={!isEditingDeets}
            />
          </div>
          <div className="grid w-full max-w-[11rem] items-center gap-1.5">
            <Label htmlFor="email">Language</Label>
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value || LearningData?.language}
                >
                  <SelectTrigger disabled={!isEditingDeets}>
                    <SelectValue placeholder={`${LearningData?.language}`} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tagalog">Tagalog</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Tagalog and English">
                      Tagalog and English
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        {/* Event desc */}
        <div className="mt-4">
          <Label htmlFor="text">Content</Label>
          <FormField
            name="content"
            control={form.control}
            render={({ field: { onChange } }) => {
              return (
                <RichTextEditor
                  defaultValue={LearningData?.content}
                  disabled={!isEditingDeets}
                  onBlur={data => {
                    onChange(data.html);
                  }}
                  height={300}
                />
              );
            }}
          />
        </div>
        <div className="flex justify-end mt-4">
          {isEditingDeets ? (
            <div>
              {" "}
              <Button
                type="submit"
                variant="secondary"
                disabled={isDetailLoading}
              >
                Save
              </Button>
            </div>
          ) : (
            <Button
              type="button"
              variant="outline"
              onClick={handleEditingDeets}
            >
              Edit Details
            </Button>
          )}
        </div>
        <Loader isVisible={isDetailLoading} />
      </form>
    </Form>
  );
};

export default LearningDetailForm;
