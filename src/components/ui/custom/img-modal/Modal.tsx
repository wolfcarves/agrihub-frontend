import { Card } from "@components/ui/card";
import React, { ReactNode, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const ImgModal: React.FC<ModalProps> = ({ setModal, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setModal]);

  return (
    <div className="fixed z-[100] inset-0 bg-white bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto animate-in">
      <div className="mx-auto rounded-xl " ref={modalRef}>
        <Card className="absolute top-2 right-2">
          <IoMdClose
            size={40}
            className="cursor-pointer text-gray-500"
            onClick={() => {
              setModal(false);
            }}
          />
        </Card>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default ImgModal;
