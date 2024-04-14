const QuestionsTitleTag = ({ title }: { title?: string | null }) => {
  if (!title) {
    return <></>;
  }

  return (
    <div className="mt-10 mx-auto">
      <h1 className="font-poppins-semibold opacity-80">Tag: [{title}]</h1>
    </div>
  );
};

export default QuestionsTitleTag;
