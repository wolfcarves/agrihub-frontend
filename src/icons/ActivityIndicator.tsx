const ActivityIndicator = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/10 ">
      <img src={"/infinite-spinner.svg"} width={80} height={80} />
    </div>
  );
};

export default ActivityIndicator;
