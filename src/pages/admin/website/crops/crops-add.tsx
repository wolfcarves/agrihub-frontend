import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@components/ui/tabs";
import CropsRegistered from "./crops-registered";
import CropsOthers from "./crops-others";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import Capture from "@components/user/community/capture/capture";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Label } from "@components/ui/label";
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
} from "@components/ui/alert-dialog";
import { Card } from "@components/ui/card";

const breadcrumbItems = [
  {
    title: "Crops",
    link: "/admin/website/crops"
  },
  {
    title: "New Crops",
    link: "/admin/website/crops/add"
  }
];

interface Month {
  value: string;
  label: string;
}

const AddCropsAdmin = () => {
  // select months value
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" }
  ];

  const [plantingSeason, setPlantingSeason] = useState<string>("");
  const [harvestSeason, setHarvestSeason] = useState<string>("");
  const [growthSpan, setGrowthSpan] = useState<string>("");

  const handlePlantingSeasonChange = (value: string) => {
    setPlantingSeason(value);
    calculateGrowthSpan(value, harvestSeason);
  };

  const handleHarvestSeasonChange = (value: string) => {
    setHarvestSeason(value);
    calculateGrowthSpan(plantingSeason, value);
  };

  const calculateGrowthSpan = (planting: string, harvest: string) => {
    if (planting && harvest) {
      const plantingMonth = parseInt(planting);
      const harvestMonth = parseInt(harvest);

      let span = harvestMonth - plantingMonth;
      if (span < 0) {
        span += 12;
      }

      setGrowthSpan(span.toString());
    }
  };

  // selected option yun true false
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const handleChange = (e: string | null) => {
    setSelectedOption(e === "1" ? true : e === "0" ? false : null);
  };

  const [companions, setCompanions] = useState<string[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [companionName, setCompanionName] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddCompanion = () => {
    if (companionName.trim() !== "") {
      if (editMode) {
        const updatedCompanions = [...companions];
        updatedCompanions[editIndex!] = companionName;
        setCompanions(updatedCompanions);
        setEditMode(false);
        setEditIndex(null);
      } else {
        setCompanions(prevCompanions => [...prevCompanions, companionName]);
      }
      setCompanionName(""); // Clear the input field
    }
  };

  const handleEditCompanion = (index: number, name: string) => {
    setCompanionName(name);
    setEditMode(true);
    setEditIndex(index);
  };

  const handleDeleteCompanion = (index: number) => {
    const updatedCompanions = companions.filter((_, idx) => idx !== index);
    setCompanions(updatedCompanions);
  };

  return (
    <AdminOutletContainer>
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Crops</h2>
          <p className="text-sm text-muted-foreground">
            Manage all registered and unregistered crops within the community
          </p>
        </div>
      </div>
      <hr className="my-4" />

      <div className="w-full">
        <div className="flex justify-between items-center w-full gap-4 mb-4">
          {/* crop name */}
          <div className="w-full">
            <Label>Crop Name</Label>
            <Input type="text" placeholder="Crop name" />
          </div>

          <div>
            {/* type */}
            <Label>Type</Label>
            <Select onValueChange={e => handleChange(e)}>
              <SelectTrigger className="w-auto">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Yieldable</SelectItem>
                <SelectItem value="0">Not Yieldable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* crop image */}
        <div className="mb-4">
          <Label>Crop Image</Label>
          <Capture />
        </div>

        <div className="flex items-center w-full sm:flex-nowrap flex-wrap gap-4 mb-4 justify-between">
          <div className="flex gap-4">
            {/* seedling season */}
            <div>
              <Label>Seedling Season</Label>
              <Select>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Seedling Season" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* planting season */}
            <div>
              <Label>Planting Season</Label>
              <Select onValueChange={e => handlePlantingSeasonChange(e)}>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Seedling Season" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* harvest season */}
            <div>
              <Label>Harvest Season</Label>
              <Select onValueChange={e => handleHarvestSeasonChange(e)}>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Harvest Season" />
                </SelectTrigger>
                <SelectContent>
                  {months.map(month => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* growth span */}
          <div>
            <Label>Growth Span</Label>
            <Input
              type="text"
              placeholder="Growth Span"
              className="w-auto"
              value={`${growthSpan} months`}
              disabled
            />
          </div>
        </div>

        {/* description */}
        <div className="mb-4 w-full">
          <Label>Description</Label>
          <RichTextEditor height={250} />
        </div>

        <div className="flex justify-between items-center my-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Companion</h2>
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Insert companion name"
              value={companionName}
              onChange={e => setCompanionName(e.target.value)}
            />
            <Button onClick={handleAddCompanion}>Add</Button>
          </div>
        </div>

        {companions.length === 0 ? (
          <p>No companion added yet</p>
        ) : (
          companions.map((companion, index) => (
            <Card key={index} className="p-5 flex gap-4 items-end mb-4">
              {editMode && editIndex === index ? (
                <Input
                  type="text"
                  value={companionName}
                  onChange={e => setCompanionName(e.target.value)}
                />
              ) : (
                <div className="w-full">
                  <Label>Companion</Label>
                  <Input type="text" value={companion} disabled />
                </div>
              )}
              <Button
                variant="destructive"
                onClick={() => handleDeleteCompanion(index)}
              >
                Delete
              </Button>
              {!editMode || editIndex !== index ? (
                <Button
                  variant="outline"
                  onClick={() => handleEditCompanion(index, companion)}
                >
                  Edit
                </Button>
              ) : (
                <Button onClick={handleAddCompanion}>Save</Button>
              )}
            </Card>
          ))
        )}
      </div>

      {/* add crop button */}
      <div className="flex justify-end my-8">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Add Crop</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you want to add this crop?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This will make the crop available in the planting calendar and
                can be selected by farmer as new crop.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link to="/admin/website/crops/">
                <AlertDialogAction>Confirm</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(AddCropsAdmin, ["admin", "asst_admin"], "crops");
