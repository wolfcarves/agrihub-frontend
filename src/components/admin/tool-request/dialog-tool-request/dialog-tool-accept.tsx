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

interface Organization {
  name: string;
  checked: boolean;
  email: string;
}

const DialogToolAccept = () => {
  // kahit wala na encluded na email dito
  const [organizations, setOrganizations] = useState<Organization[]>([
    {
      name: "Center for Urban Agriculture",
      checked: true,
      email: "center.urban.agriculture@qcu.edu.ph"
    },
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
              <Label>Organizations:</Label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Input
                    type="text"
                    readOnly
                    value={formatSelectedOrganizations()}
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
              <Button variant="secondary">Cancel</Button>
              <Dialog>
                <DialogTrigger>
                  <Button variant="default">Accept</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <div className="flex justify-between gap-4 items-start pt-4">
                      <div>
                        <DialogTitle>Accepted this request?</DialogTitle>
                        <DialogDescription className="my-4">
                          Upon accepting this request this reqeust, the tool
                          should be in preparation to distribute to farmer. This
                          action cannot be undone.
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

export default DialogToolAccept;
