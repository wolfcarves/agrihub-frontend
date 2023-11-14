import { useQuery } from '@tanstack/react-query'
import { TagsService } from '../../../api/openapi'
export const GET_TAGS = () => 'GET_TAGS_KEY'

export default function useGetTags(key: string) {
  return useQuery({
    queryKey: [GET_TAGS(), key],
    queryFn: async () => {
      const data = await TagsService.getApiTagsSearch(key)
      return data
    },
  })
}
