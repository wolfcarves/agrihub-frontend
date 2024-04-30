import React, { useEffect, useState } from "react";
import { Button } from "@components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/custom/dialog/dialog";
import FormAddProblem from "./form-add-problem";
import Harvest from "./tabs/harvest";
import Planted from "./tabs/planted";
import { IoMdAdd } from "react-icons/io";

const DialogAssignTask = () => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [tab, setTab] = useState<"harvest" | "planted">("harvest");
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>
          <IoMdAdd size={16} /> Assign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assign Task</DialogTitle>
          <DialogDescription>
            Assign task to the farmers of your community.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex mb-4">
            <button
              className={`text-md px-3 py-1 font-poppins-medium ${
                tab === "harvest" && "text-primary border-b-2 border-primary"
              }`}
              onClick={() => setTab("harvest")}
            >
              Harvest
            </button>
            <button
              className={`text-md px-3 py-1 font-poppins-medium ${
                tab === "planted" && "text-primary border-b-2 border-primary"
              }`}
              onClick={() => setTab("planted")}
            >
              Planted
            </button>
          </div>
          {tab === "harvest" && <Harvest setIsOpen={setIsOpen} />}
          {tab === "planted" && <Planted setIsOpen={setIsOpen} />}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAssignTask;
