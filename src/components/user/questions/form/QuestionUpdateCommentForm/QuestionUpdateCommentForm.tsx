import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import React from "react";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { FormField } from "@components/ui/form";
import usePutForumsUpdateComment from "@hooks/api/put/usePutForumsUpdateComment";

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
  const { control, setError, clearErrors, handleSubmit } = useForm<{
    comment: string;
  }>({
    mode: "onChange"
  });

  const { mutateAsync: updateComment, isLoading: isUpdateCommentLoading } =
    usePutForumsUpdateComment();

  const handleSubmitForm = async (data: { comment: string }) => {
    try {
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
            defaultValue={value}
            withToolbar={false}
            onChange={({ charSize }) => {
              if (charSize! < 20) {
                setError("comment", {
                  message: "Please enter at least 20 characters"
                });
              } else clearErrors("comment");
              if (charSize! >= 5000) {
                setError("comment", {
                  message: "5000 characters is the maximum"
                });
              }

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
          disabled={isUpdateCommentLoading}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default QuestionUpdateCommentForm;
