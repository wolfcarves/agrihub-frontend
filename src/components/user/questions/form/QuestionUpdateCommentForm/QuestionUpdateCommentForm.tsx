import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { FormField } from "@components/ui/form";
import usePutForumsUpdateComment from "@hooks/api/put/usePutForumsUpdateComment";
import { toast } from "sonner";

interface QuestionUpdateCommentFormProps {
  commentId?: string;
  value?: string;
  onChange?: () => void;
  onUpdateClick?: () => void;
  onCancelClick?: () => void;
}

const QuestionUpdateCommentForm = ({
  commentId,
  value,
  onChange,
  onUpdateClick,
  onCancelClick
}: QuestionUpdateCommentFormProps) => {
  const [charLength, setCharLength] = useState<number>();

  const { control, setError, formState, clearErrors, handleSubmit } = useForm<{
    comment: string;
  }>({
    mode: "onChange"
  });

  const { mutateAsync: updateComment, isLoading: isUpdateCommentLoading } =
    usePutForumsUpdateComment();

  const handleSubmitForm = async (data: { comment: string }) => {
    try {
      if (charLength! < 1) {
        return setError("comment", {
          message: "Enter your comment"
        });
      } else clearErrors("comment");
      if (charLength! > 5000) {
        return setError("comment", {
          message: "Maximum of 5000 characters"
        });
      }

      await updateComment({
        id: commentId ?? "",
        requestBody: {
          comment: data.comment
        }
      });

      onCancelClick && onCancelClick();
    } catch (err: any) {
      console.log(err.body.message);
    }
  };

  useEffect(() => {
    if (formState.errors.comment?.message) {
      toast.error(formState.errors.comment?.message);
    }
  }, [formState.errors]);

  return (
    <form
      className="flex flex-col pb-2"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <FormField
        name="comment"
        control={control}
        render={({ field: { onChange: onFieldChange } }) => (
          <RichTextEditor
            maxLength={500}
            defaultValue={value}
            withToolbar={false}
            onChange={({ charSize }) => {
              setCharLength(charSize);
              onChange && onChange();
            }}
            onBlur={data => {
              onFieldChange(data?.html);
            }}
          />
        )}
      />

      <div className="flex gap-1 justify-end py-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={onCancelClick}
          disabled={isUpdateCommentLoading}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={onUpdateClick}
          isLoading={isUpdateCommentLoading}
          //charLength checks if input is dirty
          disabled={isUpdateCommentLoading || charLength === undefined}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default QuestionUpdateCommentForm;
