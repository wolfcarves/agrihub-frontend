import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import { Button } from "@components/ui/button";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@components/ui/dropdown-menu";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import usePutRequestToolUpdate from "../../../../hooks/api/put/usePutRequestToolUpdate";
import { toast } from "sonner";
import { UpdateToolRequestStatus } from "../../../../api/openapi";
import { formatSelectedOrganizations } from "./dialog-tool-accept";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "../../../ui/alert-dialog";
import Loader from "../../../../icons/Loader";
import { IoMdAdd } from "react-icons/io";
interface Organization {
  name: string;
  checked: boolean;
  email: string;
}
interface DialogProps {
  id: string;
}
const formSchema = zod.object({
  client_note: zod
    .string({
      required_error: "Note is required."
    })
    .min(3, "Note must have at least 3 characters")
});

const organizations = [
  { name: "Joy for Urban Farming", email: "jou@gmail.com" },
  {
    name: "Department of Agriculture",

    email: "doa@gmail.com"
  }
];
const DialogToolForward: React.FC<DialogProps> = ({ id }) => {
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrgs] = useState<string[]>([
    "Joy for Urban Farming"
  ]);
  const [selectedEmail, setSelectedEmail] = useState<string[]>([
    "jou@gmail.com"
  ]);
  const [other, setOther] = useState<boolean>(false);
  const [otherValue, setOtherValue] = useState<string>("");
  const [otherValueEmail, setOtherValueEmail] = useState<string>("");

  const handleCheckedChange = (orgName: string) => {
    if (selectedOrg.includes(orgName)) {
      setSelectedOrgs(selectedOrg.filter(org => org !== orgName));
    } else {
      setSelectedOrgs([...selectedOrg, orgName]);
    }
  };

  const handleEmailChange = (email: string) => {
    if (selectedEmail.includes(email)) {
      setSelectedEmail(selectedEmail.filter(org => org !== email));
    } else {
      setSelectedEmail([...selectedEmail, email]);
    }
  };

  // const handleOtherInput = (value: string) => {
  //   setOtherValue(value);
  // };

  const handleOtherConfirm = () => {
    if (otherValue.trim() !== "" && otherValueEmail.trim() !== "") {
      setSelectedOrgs([...selectedOrg, otherValue]);
      setSelectedEmail([...selectedEmail, otherValueEmail]);
      setOther(false);
    }
  };

  const { mutateAsync, isLoading } = usePutRequestToolUpdate();

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOrg.length === 0) {
      toast.error("Please select an organization");
      return;
    }
    const compiledData: UpdateToolRequestStatus = {
      accepted_by: selectedOrg,
      forwarded_to: selectedEmail,
      status: UpdateToolRequestStatus.status.FORWARDED
    };

    try {
      await mutateAsync({ id: id, requestBody: compiledData });
      toast.success("Tool Forwarded Successfully!");
      navigate("/admin/community/tool-request?tab=forwarded");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Forward</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between gap-4 items-start pt-4">
              <div>
                <DialogTitle>Forward to</DialogTitle>
                <DialogDescription>
                  Select which organization you are going to forward the
                  reqeust, this action will email the selected organization.
                </DialogDescription>
              </div>
            </div>

            <div className="w-full">
              <Label className=" font-poppins-medium">Organizations:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Input
                    type="text"
                    readOnly
                    value={formatSelectedOrganizations(selectedOrg)}
                    placeholder="select organization to forward"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>Partners</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {organizations.map((org, index) => (
                    <DropdownMenuCheckboxItem
                      key={index}
                      checked={selectedOrg.includes(org.name)}
                      onCheckedChange={() => {
                        handleCheckedChange(org.name);
                        handleEmailChange(org.email);
                      }}
                    >
                      {org.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuCheckboxItem
                    checked={otherValue ? true : false}
                    onCheckedChange={() => {
                      if (other) {
                        setOther(false);
                        setSelectedOrgs(
                          selectedOrg.filter(org => org !== otherValue)
                        );
                        setSelectedEmail(
                          selectedEmail.filter(org => org !== otherValueEmail)
                        );
                        setOtherValue("");
                      } else if (!other && otherValue) {
                        setSelectedOrgs(
                          selectedOrg.filter(org => org !== otherValue)
                        );
                        setSelectedEmail(
                          selectedEmail.filter(org => org !== otherValueEmail)
                        );
                        setOtherValue("");
                        setOtherValueEmail("");
                      } else if (!other) {
                        setOther(true);
                      }
                    }}
                  >
                    Other
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {other && (
              <>
                <div className="w-full mt-8">
                  <Label className=" font-poppins-medium">Name:</Label>
                  <Input
                    type="text"
                    value={otherValue}
                    onChange={e => setOtherValue(e.target.value)}
                  />
                </div>
                <div className="w-full mt-8">
                  <Label className=" font-poppins-medium">Email:</Label>
                  <Input
                    type="text"
                    value={otherValueEmail}
                    onChange={e => setOtherValueEmail(e.target.value)}
                  />
                </div>
                <Button className="w-full my-2" onClick={handleOtherConfirm}>
                  <IoMdAdd />
                </Button>
              </>
            )}

            <div className="flex justify-end gap-4 mt-4">
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="default">Accept</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Forward this request?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Upon forwarding this request, the organizations selected
                      will receive an email with the details of the reqeust sent
                      by the farmer.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={e => handleSubmitForm(e)}>
                      Confirm
                    </AlertDialogAction>
                  </AlertDialogFooter>
                  <Loader isVisible={isLoading} />
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogToolForward;
