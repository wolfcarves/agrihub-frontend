import {
  UserAside,
  UserAsideTitle,
  UserAsideItem,
  UserAsideItemContent
} from "@components/ui/custom";
import { Link } from "react-router-dom";
import useGetPopularTagsQuery from "@hooks/api/get/useGetPopularTagsQuery";
import LoadingSpinner from "@icons/LoadingSpinner";

const QuestionsAside = () => {
  const { data: tagsData, isLoading: isTagsLoading } = useGetPopularTagsQuery();

  return (
    <UserAside className="hidden lg:flex">
      <UserAsideTitle>Tags</UserAsideTitle>

      <UserAsideItemContent className="mt-5">
        {isTagsLoading ? (
          <LoadingSpinner className="mx-auto text-md text-green-700" />
        ) : (
          tagsData?.tags?.map(({ id, tag_name }) => (
            <Link to={`/forum?tag=${tag_name}`} key={id}>
              <UserAsideItem>{tag_name}</UserAsideItem>
            </Link>
          ))
        )}
      </UserAsideItemContent>
    </UserAside>
  );
};

export default QuestionsAside;
