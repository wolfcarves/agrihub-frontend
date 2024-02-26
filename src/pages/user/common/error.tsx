import AntImage from "@assets/images/ant.jpg";

export default function ErrorElement() {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full pb-20">
      <h1 className="text-[10rem] uppercase font-poppins-thin bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
        404
      </h1>
      <h4>
        It looks like the page you're looking for has been moved or deleted.
      </h4>
    </div>
  );
}
