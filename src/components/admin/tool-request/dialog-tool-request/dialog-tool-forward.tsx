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
const DialogToolForward: React.FC<DialogProps> = ({ id }) => {
  // wag na display email sa select, yung name lang
  const [organizations, setOrganizations] = useState<Organization[]>([
    { name: "Joy for Urban Farming", checked: false, email: "jou@gmail.com" },
    {
      name: "Department of Agriculture",
      checked: false,
      email: "doa@gmail.com"
    },
    { name: "Others", checked: false, email: "" }
  ]);

  const [selectedOrganizations, setSelectedOrganizations] = useState<string[]>(
    organizations.filter(org => org.checked).map(org => org.name)
  );

  const toggleOrganization = (index: number) => {
    setOrganizations(prevOrgs =>
      prevOrgs.map((org, i) =>
        i === index ? { ...org, checked: !org.checked } : org
      )
    );
  };

  React.useEffect(() => {
    const selectedOrgs = organizations
      .filter(org => org.checked)
      .map(org => org.name);
    setSelectedOrganizations(selectedOrgs);
  }, [organizations]);

  const formatSelectedOrganizations = () => {
    const count = selectedOrganizations.length;
    if (count === 0) {
      return "";
    } else if (count === 1) {
      return selectedOrganizations[0];
    } else if (count === 2) {
      return selectedOrganizations.join(" and ");
    } else {
      const formattedOrgs = selectedOrganizations
        .slice(0, count - 1)
        .join(", ");
      return `${formattedOrgs}, and ${selectedOrganizations[count - 1]}`;
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
              <Label>Organizations:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Input
                    type="text"
                    readOnly
                    value={formatSelectedOrganizations()}
                    placeholder="select organization to forward"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  <DropdownMenuLabel>Partners</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {organizations.map((org, index) => (
                    <DropdownMenuCheckboxItem
                      key={index}
                      checked={org.checked}
                      onCheckedChange={() => toggleOrganization(index)}
                    >
                      {org.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <DialogClose asChild>
                <Button variant="secondary">Cancel</Button>
              </DialogClose>

              <Dialog>
                <DialogTrigger>
                  <Button variant="default">Accept</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex justify-between gap-4 items-start pt-4">
                      <div>
                        <DialogTitle>Forward this request?</DialogTitle>
                        <DialogDescription className="my-4">
                          Upon forwarding this request, the organizations
                          selected will receive an email with the details of the
                          reqeust sent by the farmer.
                        </DialogDescription>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-4">
                      <DialogClose>
                        <Button variant="secondary">Cancel</Button>
                      </DialogClose>
                      <DialogClose>
                        <Button variant="default">Confirm</Button>
                      </DialogClose>
                    </div>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogToolForward;
