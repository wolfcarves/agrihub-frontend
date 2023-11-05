import AntImage from "@assets/images/ant.jpg";
import { Typography } from "@components-ui";

export default function ErrorElement() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full">
      <img src={AntImage} alt="Sadboi na langgam" width={150} height={150} />
      <Typography.H6 $title={"Page not found."} />
    </div>
  );
}
