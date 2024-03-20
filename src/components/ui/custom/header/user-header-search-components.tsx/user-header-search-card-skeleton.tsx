import { Skeleton } from "@components/ui/skeleton";

const UserHeaderSearchCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, idx) => (
        <div className="space-y-3 py-5" key={idx + Math.random()}>
          <Skeleton className="h-4 max-w-[250px]" />
          <Skeleton className="h-4 max-w-[370px]" />
        </div>
      ))}
    </>
  );
};

export default UserHeaderSearchCardSkeleton;
