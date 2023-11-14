import { useQuery } from '@tanstack/react-query'
import { ForumsService } from '../../../api/openapi'
export const GET_QUESTION = () => 'GET_QUESTION_KEY'
export default function useGetQuestions(
  search?: string,
  page?: string,
  perpage?: string,
  filter?: string
) {
  return useQuery({
    queryKey: [GET_QUESTION(), page, search, filter],
    queryFn: async () => {
      const data = await ForumsService.getApiForums(
        search,
        page,
        perpage,
        filter
      )
      return data
    },
    keepPreviousData: true,
  })
}
