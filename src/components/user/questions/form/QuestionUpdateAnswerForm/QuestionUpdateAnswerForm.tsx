import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import React from "react";
import { Button } from "@components/ui/button";
import { useForm } from "react-hook-form";
import { FormField } from "@components/ui/form";
import usePutForumsUpdateAnswer from "@hooks/api/put/usePutForumsUpdateAnswer";

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
  const { control, setError, clearErrors, handleSubmit } = useForm<{
    answer: string;
  }>({
    mode: "onChange"
  });

  const { mutateAsync: updateAnswer, isLoading: isUpdateAnswerLoading } =
    usePutForumsUpdateAnswer();

  const handleSubmitForm = async (data: { answer: string }) => {
    try {
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

  return (
    <form
      className="pb-2 w-full min-h-[9.5rem]"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <div>
        <FormField
          name="answer"
          control={control}
          render={({ field: { onChange: onFieldChange } }) => (
            <RichTextEditor
              defaultValue={value}
              withToolbar={false}
              onChange={({ charSize }) => {
                if (charSize! < 20) {
                  setError("answer", {
                    message: "Please enter at least 20 characters"
                  });
                } else clearErrors("answer");
                if (charSize! >= 5000) {
                  setError("answer", {
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
      </div>

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
          disabled={isUpdateAnswerLoading}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export default QuestionUpdateAnswerForm;
