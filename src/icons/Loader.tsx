const Loader = ({ isVisible }: { isVisible?: boolean }) => {
  if (isVisible)
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/20 z-50">
        <img src={"/infinite-spinner.svg"} width={80} height={80} />
      </div>
    );
};

export default Loader;
