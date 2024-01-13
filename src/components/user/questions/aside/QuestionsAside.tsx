import {
  UserAside,
  UserAsideTitle,
  UserAsideItem,
  UserAsideItemContent
} from "@components/ui/custom";
import { Link } from "react-router-dom";
import useGetPopularTagsQuery from "@hooks/api/get/useGetPopularTagsQuery";
import TagChip from "../chip/TagChip";
import LoadingSpinner from "@icons/LoadingSpinner";

const QuestionsAside = () => {
  const { data: tagsData, isLoading: isTagsLoading } = useGetPopularTagsQuery();

  return (
    <UserAside className="hidden lg:flex">
      <UserAsideTitle>Related</UserAsideTitle>
      <UserAsideItemContent className="mt-5">
        {isTagsLoading ? (
          <LoadingSpinner className="mx-auto text-md text-green-700" />
        ) : (
          tagsData?.tags?.map(({ id, tag_name }) => (
            <Link to="/" key={id}>
              <UserAsideItem>{tag_name}</UserAsideItem>
            </Link>
          ))
        )}
      </UserAsideItemContent>

      <UserAsideTitle className="mt-5">Discover Tags</UserAsideTitle>
      <UserAsideItemContent className="mt-5 flex flex-wrap gap-x-1 gap-y-2">
        {isTagsLoading ? (
          <LoadingSpinner className="mx-auto text-md text-green-700" />
        ) : (
          tagsData?.tags?.map(({ id, tag_name }) => {
            return (
              <Link to={`/forum/tag/${id}`} key={id}>
                <TagChip name={tag_name} size="sm" />
              </Link>
            );
          })
        )}
      </UserAsideItemContent>
    </UserAside>
  );
};

export default QuestionsAside;
