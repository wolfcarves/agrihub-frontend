const Unauthorized = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-screen w-full">
      <h1 className="text-red-600 text-8xl font-poppins-bold">401</h1>
      <h1 className="w-max text-xl font-poppins-medium">
        You don't have access to this page
      </h1>
    </div>
  );
};

export default Unauthorized;
