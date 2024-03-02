import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import React, { useMemo, useState } from "react";
import { Form, useForm } from "react-hook-form";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import { useParams } from "react-router-dom";
import { UpdateCropRequest } from "@api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCropSchema } from "./schema";
import { FormField } from "@components/ui/form";
import CoverImageUpload from "@components/ui/custom/image/cover-image-input";
import Loader from "@icons/Loader";
import CaptureWithDelete from "@components/ui/custom/input/capture-with-delete";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { CropSeasonsMenu } from "../menu/crops-seasons-menu";

interface Month {
  value: string;
  label: string;
}

const CropsForm = () => {
  const { cropId } = useParams();
  const [companions, setCompanions] = useState<string[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [companionName, setCompanionName] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [plantingSeason, setPlantingSeason] = useState<string>("");
  const [harvestSeason, setHarvestSeason] = useState<string>("");
  const [growthSpan, setGrowthSpan] = useState<string>("");

  const [selectedMonthValues, setSelectedMonthValues] = React.useState<
    string[]
  >([]);

  const handleSelectedMonthValuesChange = (monthValues: string[]) => {
    setSelectedMonthValues(monthValues);
  };

  const { data, isLoading: isCropDataLoading } = useGetCropsQuery();
  const cropData = data?.find(p => p.id === cropId);

  // Form
  const form = useForm<UpdateCropRequest>({
    resolver: zodResolver(addCropSchema),
    mode: "onBlur",
    defaultValues: {
      name: cropData?.name,
      image: cropData?.image || ""
    }
  });

  // Selected option for true/false
  const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

  const handleChange = (e: string | null) => {
    setSelectedOption(e === "1" ? true : e === "0" ? false : null);
  };

  // select months value
  const months = [
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" }
  ];

  console.log(selectedMonthValues, "from selected month value");

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

  const planting = cropData?.p_season;
  console.log(planting, "from planting");

  const companion = cropData?.companion;

  const seedling = cropData?.seedling_season;

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
      setCompanionName("");
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

  if (isCropDataLoading) {
    return <Loader isVisible={true} />;
  }

  return (
    <div>
      <Form {...form}>
        <div className="flex justify-between items-center w-full gap-4 mb-4">
          {/* Crop name */}
          <div className="w-full">
            <Label>Crop Name</Label>
            <Input
              type="text"
              placeholder="Crop name"
              defaultValue={cropData?.name}
              {...form.register("name")}
            />
          </div>

          {/* Type */}
          <div>
            <Label>Type</Label>
            <FormField
              control={form.control}
              name="isyield"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    cropData?.isyield === true
                      ? "Yieldable"
                      : cropData?.isyield === false
                      ? "NotYieldable"
                      : ""
                  }
                >
                  <SelectTrigger className="w-auto">
                    <SelectValue
                      placeholder={
                        field.value === true
                          ? "Yieldable"
                          : field.value === false
                          ? "Not Yieldable"
                          : "Choose"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yieldable">Yieldable</SelectItem>
                    <SelectItem value="NotYieldable">Not Yieldable</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        {/* crop image */}
        <div className="mb-4">
          <Label>Crop Image</Label>
          <FormField
            control={form.control}
            name="image"
            render={() => (
              <CaptureWithDelete
                onChange={value => {
                  form.setValue("image", value);
                }}
                defaultValue={
                  cropData?.image ===
                  "https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/"
                    ? undefined
                    : cropData?.image
                }
              />
            )}
          />
        </div>

        <div className="flex items-center w-full sm:flex-nowrap flex-wrap gap-4 mb-4 justify-between">
          <div className="flex gap-4">
            {/* seedling season */}
            <div>
              <Label>Seedling Season</Label>
              <FormField
                control={form.control}
                name="seedling_season"
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={
                      months.find(month => month.value === field.value)
                        ?.label || seedling
                    }
                  >
                    <SelectTrigger className="w-auto">
                      <SelectValue
                        placeholder={
                          cropData?.seedling_season
                            ? cropData?.seedling_season
                            : "Seedling Season"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map(month => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            {/* planting season */}
            <div>
              <Label>Planting Season</Label>
              <FormField
                control={form.control}
                name="p_season"
                render={({ field }) => (
                  <CropSeasonsMenu
                    selectedMonthValues={field.value || planting || []}
                    onSelectedMonthValuesChange={field.onChange}
                  />
                )}
              />
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
          <FormField
            name="description"
            control={form.control}
            render={({ field: { onChange } }) => {
              return (
                <RichTextEditor
                  defaultValue={cropData?.description}
                  height={300}
                  onBlur={data => {
                    onChange(data.html);
                  }}
                />
              );
            }}
          />
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

        {companion?.length === 0 ? (
          <p>No companion added yet</p>
        ) : (
          companion?.map((companions, index) => (
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
                  <Input type="text" value={companions} disabled />
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
                  onClick={() => handleEditCompanion(index, companions)}
                >
                  Edit
                </Button>
              ) : (
                <Button onClick={handleAddCompanion}>Save</Button>
              )}
            </Card>
          ))
        )}
      </Form>
    </div>
  );
};

export default CropsForm;
