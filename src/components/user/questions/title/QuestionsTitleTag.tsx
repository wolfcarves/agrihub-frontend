const QuestionsTitleTag = ({ title }: { title?: string | null }) => {
  if (!title) {
    return <></>;
  }

  return (
    <h1 className="mt-10 font-poppins-semibold opacity-80">
      Questions tagged [{title}]
    </h1>
  );
};

export default QuestionsTitleTag;
