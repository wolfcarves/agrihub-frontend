import React, { ReactNode, useRef, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ setModal, children }) => {
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
    <div className="fixed z-[100] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center py-2 overflow-y-auto">
      <h1>THIS IS MODAL</h1>
      <div className="mx-auto rounded-xl" ref={modalRef}>
        <div className="absolute top-2 right-2">
          <IoMdClose
            size={40}
            className="cursor-pointer text-white"
            onClick={() => {
              setModal(false);
            }}
          />
        </div>
        <div className="p-1">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
