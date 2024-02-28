const QuestionsTitleTag = ({ title }: { title?: string | null }) => {
  if (!title) {
    return <></>;
  }

  return (
    <div className="w-full max-w-[45rem] mx-auto">
      <h1 className="mt-10 font-poppins-semibold opacity-80">
        Questions tagged [{title}]
      </h1>
    </div>
  );
};

export default QuestionsTitleTag;
