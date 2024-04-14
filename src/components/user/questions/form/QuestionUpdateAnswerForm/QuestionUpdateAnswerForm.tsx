import React, { useEffect, useState } from "react";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { FormField } from "@components/ui/form";
import usePutForumsUpdateAnswer from "@hooks/api/put/usePutForumsUpdateAnswer";
import { toast } from "sonner";

interface QuestionUpdateAnswerFormProps {
  answerId?: string;
  value?: string;
  onChange?: () => void;
  onUpdateClick?: () => void;
  onCancelClick?: () => void;
}

const QuestionUpdateAnswerForm = ({
  answerId,
  value,
  onChange,
  onUpdateClick,
  onCancelClick
}: QuestionUpdateAnswerFormProps) => {
  const [charLength, setCharLength] = useState<number>();

  const { control, setError, formState, clearErrors, handleSubmit } = useForm<{
    answer: string;
  }>({
    mode: "onChange"
  });

  const { mutateAsync: updateAnswer, isLoading: isUpdateAnswerLoading } =
    usePutForumsUpdateAnswer();

  const handleSubmitForm = async (data: { answer: string }) => {
    try {
      if (charLength! < 1) {
        return setError("answer", {
          message: "Enter your answer"
        });
      } else clearErrors("answer");
      if (charLength! > 5000) {
        return setError("answer", {
          message: "Maximum of 5000 characters"
        });
      }

      await updateAnswer({
        id: answerId ?? "",
        requestBody: {
          answer: data.answer
        }
      });

      onCancelClick && onCancelClick();
    } catch (err: any) {
      console.log(err.body.message);
    }
  };

  useEffect(() => {
    if (formState.errors.answer?.message) {
      toast.error(formState.errors.answer?.message);
    }
  }, [formState.errors]);

  return (
    <form
      className="flex flex-col pb-2"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <FormField
        name="answer"
        control={control}
        render={({ field: { onChange: onFieldChange } }) => (
          <RichTextEditor
            maxLength={500}
            allowUploadImage={false}
            allowImagePaste={false}
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
          disabled={isUpdateAnswerLoading}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={onUpdateClick}
          isLoading={isUpdateAnswerLoading}
          //charLength checks if input is dirty
          disabled={isUpdateAnswerLoading || charLength === undefined}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default QuestionUpdateAnswerForm;
