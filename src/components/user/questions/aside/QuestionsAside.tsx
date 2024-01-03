import {
  UserAside,
  UserAsideTitle,
  UserAsideItem,
  UserAsideItemContent
} from "@components/ui/custom";
import { Link } from "react-router-dom";
import useGetPopularTagsQuery from "@hooks/api/get/useGetPopularTagsQuery";

const QuestionsAside = () => {
  // const { data, isLoading } = useGetQuestionsQuery(
  //   undefined,
  //   String(1),
  //   String(3),
  //   "trending",
  //   "top_questions"
  // );

  const { data: tagsData, isLoading: isTagsLoading } = useGetPopularTagsQuery();

  return (
    <UserAside>
      <UserAsideTitle>Related</UserAsideTitle>
      <UserAsideItemContent className="mt-5">
        {tagsData?.tags?.splice(0, 5).map(({ id, tag_name }) => (
          <Link to="/" key={id}>
            <UserAsideItem>{tag_name}</UserAsideItem>
          </Link>
        ))}
      </UserAsideItemContent>

      <UserAsideTitle className="mt-5">Discover Tags</UserAsideTitle>
      <UserAsideItemContent className="mt-5 flex flex-wrap gap-x-1 gap-y-2">
        {tagsData?.tags?.splice(0, 5).map(({ id, tag_name }) => (
          <Link to={`/forum/tag/${id}`} key={id}>
            <span className="text-sm text-primary rounded-lg border border-primary bg-secondary px-2 py-0.5">
              {tag_name}
            </span>
          </Link>
        ))}
      </UserAsideItemContent>
    </UserAside>
  );
};

export default QuestionsAside;
