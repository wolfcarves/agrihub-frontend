const QuestionsTitleTag = ({ title }: { title?: string | null }) => {
  if (!title) {
    return <></>;
  }

  return (
    <div className="mt-10 w-full max-w-[45rem] mx-auto">
      <h1 className="font-poppins-semibold opacity-80">Tag: [{title}]</h1>
    </div>
  );
};

export default QuestionsTitleTag;
