import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";

interface Loader {
  isVisible?: boolean;
}

export default function Loader({ isVisible = false }: Loader) {
  const location = useLocation();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [path, setPath] = useState(location.pathname);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isFirstRender) {
      console.log(location.pathname);
    }

    setIsFirstRender(false);
  }, [location]);

  return (
    <div
      className={`${
        !isVisible && "hidden"
      } absolute w-full h-full inset-0 flex items-center justify-center bg-[black]/50`}
    >
      <HashLoader color="#36d7b7" size={40} />
    </div>
  );
}
