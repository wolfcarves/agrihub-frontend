import { Skeleton } from "@components/ui/skeleton";

const QuestionCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-5 w-full min-h-[40rem] py-4">
      {Array.from({ length: 10 }).map(() => (
        <div className="border border-border/70 w-full h-[20rem] rounded-2xl p-4">
          <div className="flex justify-between items-center">
            <Skeleton className="h-7 w-[70%]" />
            <Skeleton className="h-7 w-10" />
          </div>

          <div className="flex gap-2 py-4">
            <Skeleton className="h-10 w-10 rounded-full" />

            <div className="space-y-1">
              <Skeleton className="h-4 w-40 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-full" />
            </div>
          </div>

          <div>
            <div className="space-y-3 pe-10">
              {Array.from({ length: 6 }).map(() => (
                <Skeleton
                  className="h-4 rounded-full"
                  style={{
                    width: `${Math.random() * 50 + 50}%`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionCardSkeleton;
