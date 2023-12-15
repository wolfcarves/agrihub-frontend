import AntImage from "@assets/images/ant.jpg";

const Unauthorized = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full">
      <img src={AntImage} alt="Sadboi na langgam" width={150} height={150} />
      <span>Please Login First</span>
    </div>
  );
};

export default Unauthorized;
