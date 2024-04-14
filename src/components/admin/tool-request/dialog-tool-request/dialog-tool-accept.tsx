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
import { Textarea } from "../../../ui/textarea";
import usePutRequestToolUpdate from "../../../../hooks/api/put/usePutRequestToolUpdate";
import { UpdateToolRequestStatus } from "../../../../api/openapi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import Loader from "../../../../icons/Loader";
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

interface Organization {
  name: string;
  checked: boolean;
  email: string;
}

const organizations = [
  {
    name: "Center for Urban Agriculture"
  },
  { name: "Joy for Urban Farming" },
  {
    name: "Department of Agriculture"
  }
];

interface DialogProps {
  id: string;
}

export const formatSelectedOrganizations = (
  selectedOrganizations: string[]
) => {
  const count = selectedOrganizations.length;
  if (count === 0) {
    return "";
  } else if (count === 1) {
    return selectedOrganizations[0];
  } else if (count === 2) {
    return selectedOrganizations.join(" and ");
  } else {
    const formattedOrgs = selectedOrganizations.slice(0, count - 1).join(", ");
    return `${formattedOrgs}, and ${selectedOrganizations[count - 1]}`;
  }
};
const DialogToolAccept: React.FC<DialogProps> = ({ id }) => {
  const navigate = useNavigate();
  const [selectedOrg, setSelectedOrgs] = useState<string[]>([
    "Center for Urban Agriculture"
  ]);
  const [other, setOther] = useState<boolean>(false);
  const [otherValue, setOtherValue] = useState<string>("");
  const handleCheckedChange = (orgName: string) => {
    if (selectedOrg.includes(orgName)) {
      setSelectedOrgs(selectedOrg.filter(org => org !== orgName));
    } else {
      setSelectedOrgs([...selectedOrg, orgName]);
    }
  };

  const handleOtherInput = (value: string) => {
    setOtherValue(value);
  };

  const handleOtherConfirm = () => {
    if (otherValue.trim() !== "") {
      setSelectedOrgs([...selectedOrg, otherValue]);
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
      status: UpdateToolRequestStatus.status.ACCEPTED
    };

    try {
      await mutateAsync({ id: id, requestBody: compiledData });
      toast.success("Tool Accepted Successfully!");
      navigate("/admin/community/tool-request?tab=accepted");
    } catch (e: any) {
      toast.error(e.body.message);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button variant="default">Accept</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-between gap-4 items-start pt-4">
              <div>
                <DialogTitle>Accepted by:</DialogTitle>
                <DialogDescription>
                  Select which organization contributed to accomplish this
                  request.
                </DialogDescription>
              </div>
            </div>

            <div className="w-full">
              <Label className=" font-poppins-medium">Organizations:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Textarea
                    readOnly
                    className="min-h-10 "
                    value={formatSelectedOrganizations(selectedOrg)}
                  />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>Partners</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {organizations.map((org, index) => (
                    <DropdownMenuCheckboxItem
                      key={index}
                      checked={selectedOrg.includes(org.name)}
                      onCheckedChange={() => handleCheckedChange(org.name)}
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
                        setOtherValue("");
                      } else if (!other && otherValue) {
                        setSelectedOrgs(
                          selectedOrg.filter(org => org !== otherValue)
                        );
                        setOtherValue("");
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
              <div className="w-full mt-8">
                <Label className=" font-poppins-medium">Others:</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="text"
                    value={otherValue}
                    onChange={e => handleOtherInput(e.target.value)}
                  />
                  <Button onClick={handleOtherConfirm}>
                    <IoMdAdd />
                  </Button>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-4 mt-10 pt-4">
              <DialogClose>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="default">Accept</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Accepted this request?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Upon accepting this request this reqeust, the tool should
                      be in preparation to distribute to farmer. This action
                      cannot be undone.
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

export default DialogToolAccept;
