import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ForumsService } from '@api/openapi'
import { QuestionSchema } from '@api/openapi'
import { GET_QUESTION } from '../get/useGetQuestions'

const useQuestionKey = () => 'QUESTIONS_KEY'

export default function useQuestionAskMutation() {
  const queryClient = useQueryClient()

  return useMutation([useQuestionKey()], {
    mutationFn: async (data: QuestionSchema) => {
      const response = await ForumsService.postApiForums(data)
      return response
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_QUESTION()] })
    },
  })
}
