import AntImage from "@assets/images/ant.jpg";

export default function ErrorElement() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full">
      <img src={AntImage} alt="Sadboi na langgam" width={150} height={150} />
      <span>Page not found</span>
    </div>
  );
}
