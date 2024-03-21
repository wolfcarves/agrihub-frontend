import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../ui/custom/dialog/dialog";
import { Button } from "../../ui/button";
import { Textarea } from "../../ui/textarea";
import { Label } from "../../ui/label";
import IconSelector from "../../user/community/Icon-selector/icon-selector";
import { Input } from "../../ui/input";
import { TiEdit } from "react-icons/ti";
import useGetCmsLandingDetails from "../../../hooks/api/get/useGetCmsLandingDetails";

import { UpdateApproachRequest } from "../../../api/openapi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useCmsLandingUpdateApproach from "../../../hooks/api/post/useCmsLandingUpdateApproach";
import { toast } from "sonner";
import { Form, FormField } from "../../ui/form";
import Loader from "../../../icons/Loader";
import FormAddApproach from "./form/form-add-approach";
interface dialogProps {}

const DialogAddAprroach: React.FC<dialogProps> = ({}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Dialog open={isOpen}>
      <DialogTrigger>
        <Button onClick={() => setIsOpen(true)}>Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Approach</DialogTitle>
          <DialogDescription>
            Fill out form to add approach items here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <FormAddApproach setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddAprroach;
