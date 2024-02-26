const Unauthorized = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full pb-20">
      <h1 className="text-[10rem] uppercase font-poppins-thin bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
        401
      </h1>
      <h4>This page is not publically available</h4>
    </div>
  );
};

export default Unauthorized;
