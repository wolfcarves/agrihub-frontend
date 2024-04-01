import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { FormField } from "@components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import ActivityIndicator from "@icons/ActivityIndicator";
import LoadingSpinner from "@icons/LoadingSpinner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as zod from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import useQuestionAddCommentMutation from "@hooks/api/post/useQuestionAddCommentMutation";
import useAuth from "@hooks/useAuth";
import { Button } from "@components/ui/button";

interface QuestionCommentFormProps {
  answerId?: string;
}

const questionAnswerSchema = zod.object({
  comment: zod
    .string({
      required_error: "Comment is empty"
    })
    .min(1, "Comment is to short")
    .max(500, "Comment is too long")
});

type QuestionComment = zod.infer<typeof questionAnswerSchema>;

const QuestionCommentForm = ({ answerId }: QuestionCommentFormProps) => {
  const user = useAuth();
  const [answerLength, setAnswerLength] = useState<number>(0);

  const { handleSubmit, control } = useForm<QuestionComment>({
    resolver: zodResolver(questionAnswerSchema),
    reValidateMode: "onSubmit",
    mode: "onSubmit",
    resetOptions: {
      keepValues: false
    }
  });

  const { mutateAsync: postComment, isLoading: isPostCommentLoading } =
    useQuestionAddCommentMutation();

  const onSubmitAnswerForm = async (data: QuestionComment) => {
    try {
      await postComment({
        answerId: answerId ?? "0",
        userComment: {
          comment: data.comment
        }
      });
    } catch (err: any) {
      toast.error(err.body.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitAnswerForm)} className="w-full">
      <FormField
        name="comment"
        control={control}
        render={({ field: { onChange } }) => {
          return (
            <>
              <div className="flex gap-2">
                <Avatar className="border">
                  <AvatarImage
                    src={user.data?.avatar}
                    className="object-cover pointer-events-none select-none "
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>

                {!isPostCommentLoading ? (
                  <RichTextEditor
                    allowImagePaste={false}
                    withToolbar={false}
                    onChange={({ charSize }) => {
                      setAnswerLength(charSize ?? 0);
                    }}
                    onBlur={data => {
                      onChange(data.html);
                    }}
                  />
                ) : (
                  <>
                    <div className="h-10 flex justify-center items-center w-full border mx-auto rounded-lg shadow-md">
                      <LoadingSpinner className="text-xl" />
                    </div>
                    <ActivityIndicator />
                  </>
                )}
              </div>
            </>
          );
        }}
      />

      <div className="flex justify-end py-2 gap-2">
        {!isPostCommentLoading && (
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            disabled={answerLength === 0}
          >
            Add Comment
          </Button>
        )}
      </div>
    </form>
  );
};

export default QuestionCommentForm;
