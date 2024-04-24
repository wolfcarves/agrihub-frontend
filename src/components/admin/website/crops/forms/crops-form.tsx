import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@components/ui/select";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import useGetCropsQuery from "@hooks/api/get/useGetCropsQuery";
import { useParams } from "react-router-dom";
import { NewCropRequest } from "@api/openapi";
import { zodResolver } from "@hookform/resolvers/zod";
import { addCropSchema } from "./schema";
import { Form, FormField } from "@components/ui/form";
import Loader from "@icons/Loader";
import CaptureWithDelete from "@components/ui/custom/input/capture-with-delete";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { CropSeasonsMenu } from "../menu/crops-seasons-menu";
import { toast } from "sonner";
import usePutCrops from "@hooks/api/put/usePutCrops";
import useCropCreate from "@hooks/api/post/useCropsCreate";
import { Checkbox } from "@components/ui/checkbox";
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
} from "../../../../ui/alert-dialog";

const CropsForm = () => {
  const { cropId } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [companionName, setCompanionName] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

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

  const { data, isLoading: isCropDataLoading } = useGetCropsQuery();

  const cropData = data?.find(p => p.id === cropId);

  const companion = useMemo(() => {
    return cropData?.companion;
  }, [data]);

  const seedling = cropData?.seedling_season;
  const harvest = cropData?.harvest_season;
  const [companions, setCompanions] = useState<string[]>(companion || []);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setCompanions(cropData?.companion || []);
  }, [data]);
  // Form
  const form = useForm<NewCropRequest>({
    resolver: zodResolver(addCropSchema),
    mode: "onBlur"
  });

  const planting = cropData?.p_season;

  //validations
  useEffect(() => {
    if (form.formState.errors.name) {
      toast.error(form?.formState?.errors?.name?.message);
    }
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
    if (form.formState.errors.seedling_season) {
      toast.error(form?.formState?.errors?.seedling_season?.message);
    }
    if (form.formState.errors.harvest_season) {
      toast.error(form?.formState?.errors?.harvest_season?.message);
    }
    if (form.formState.errors.growth_span) {
      toast.error(form?.formState?.errors?.growth_span?.message);
    }
    if (form.formState.errors.isyield) {
      toast.error(form?.formState?.errors?.isyield?.message);
    }
    if (form.formState.errors.p_season) {
      toast.error(form?.formState?.errors?.p_season?.message);
    }
    if (form.formState.errors.image) {
      toast.error(form?.formState?.errors?.image?.message);
    }
  }, [form.formState.errors]);

  // add companion
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

  // edit companion, bug nag sasubmit pag cinlick edit
  const handleEditCompanion = (index: number, name: string) => {
    setCompanionName(name);
    setEditMode(true);
    setEditIndex(index);
  };

  // delete companion
  const handleDeleteCompanion = (index: number) => {
    const updatedCompanions = companions.filter((_, idx) => idx !== index);
    setCompanions(updatedCompanions);
  };

  const allCompanions = companions;

  // create
  const { mutateAsync: createCropsMutate, isLoading: isCropsLoading } =
    useCropCreate();

  //update
  const { mutateAsync: updateCropMutate, isLoading: isCropLoading } =
    usePutCrops();

  // create and update crop submit handler
  const handleSubmitForm = async (data: NewCropRequest) => {
    const compiledData: NewCropRequest = {
      name: data.name,
      description: data.description,
      seedling_season: data.seedling_season,
      harvest_season: data.harvest_season,
      growth_span: data.growth_span,
      isyield: data.isyield,
      p_season: data.p_season,
      image: data.image,
      planting_season: "0",
      companion: allCompanions
    };
    console.log(companions, "compiled");
    console.log(data.isyield, "YIELD");
    try {
      if (cropId) {
        await updateCropMutate({
          id: cropId || "",
          formData: compiledData
        });
        toast.success("Crop Detail Updated Successfully!");
      } else {
        await createCropsMutate({
          id: cropId || "",
          formData: compiledData
        });
        toast.success(" Crop Added Successfully!");
      }
    } catch (e: any) {
      toast.error(e.body.message);
    }
    setOpenDialog(false);
  };

  if (isCropDataLoading) {
    return <Loader isVisible={true} />;
  }

  console.log(form.formState.errors, "errorss");

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          encType="multipart/form-data"
        >
          <div className="flex justify-between items-center w-full gap-4 mb-4">
            {/* Crop name */}
            <div className="w-full">
              <Label>Crop Name</Label>
              {/* <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <Input
                    type="text"
                    placeholder="Crop name"
                    onChange={field.onChange}
                    defaultValue={cropData?.name}
                    // value={field.value}
                  />
                )}
              /> */}
              <Input
                type="text"
                placeholder="Crop name"
                defaultValue={cropData?.name}
                {...form.register("name")}
              />
            </div>

            {/* Type */}
            <div>
              <Label>Yieldable</Label>
              <FormField
                control={form.control}
                name="isyield"
                render={({ field }) => (
                  <div className="flex justify-center">
                    <Checkbox
                      // checked={field.value}
                      defaultChecked={cropData?.isyield ?? false}
                      onCheckedChange={field.onChange}
                    />
                  </div>
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

          <div className="flex items-center w-full sm:flex-nowrap flex-wrap  gap-4 mb-4 justify-between">
            <div className="flex flex-wrap gap-4">
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
                <FormField
                  control={form.control}
                  name="harvest_season"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={
                        months.find(month => month.value === field.value)
                          ?.label || harvest
                      }
                    >
                      <SelectTrigger className="w-auto">
                        <SelectValue
                          placeholder={
                            cropData?.harvest_season
                              ? cropData?.harvest_season
                              : "Harvest Season"
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
            </div>

            {/* growth span */}
            <div>
              <Label>Growth Span</Label>
              <Input
                type="text"
                placeholder="Growth Span"
                className="w-auto"
                defaultValue={cropData?.growth_span}
                {...form.register("growth_span")}
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

          {/* comapnions */}
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
              <Button onClick={handleAddCompanion} type="button">
                Add
              </Button>
            </div>
          </div>

          {companions?.length === 0 ? (
            <p>No companion added yet</p>
          ) : (
            companions?.map((companion, index) => (
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
                  type="button"
                  variant="destructive"
                  onClick={() => handleDeleteCompanion(index)}
                >
                  Delete
                </Button>
                {!editMode || editIndex !== index ? (
                  <div
                    // type="button"
                    // variant="outline"
                    className="border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 rounded-lg h-10 px-4 py-2"
                    onClick={() => handleEditCompanion(index, companion)}
                  >
                    Edit
                  </div>
                ) : (
                  <Button onClick={handleAddCompanion}>Save</Button>
                )}
              </Card>
            ))
          )}
          {/* add crop button */}
          <div className="flex justify-end my-8">
            <Button type="button" onClick={() => setOpenDialog(true)}>
              Confirm
            </Button>
            <AlertDialog open={openDialog}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you want to register for this crop?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Please confirm by clicking 'Continue' or 'Cancel' to abort.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    disabled={isCropLoading || isCropsLoading}
                    onClick={form.handleSubmit(handleSubmitForm)}
                  >
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <Loader isVisible={isCropLoading} />
        </form>
      </Form>
    </>
  );
};

export default CropsForm;
