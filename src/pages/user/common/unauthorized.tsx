import AntImage from "@assets/images/ant.jpg";
import { Typography } from "@components-ui";

const Unauthorized = () => {
  return (
    <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center min-h-screen w-full">
      <img src={AntImage} alt="Sadboi na langgam" width={150} height={150} />
      <Typography.H6 $label={"Please Login First."} />
    </div>
  );
};

export default Unauthorized;
