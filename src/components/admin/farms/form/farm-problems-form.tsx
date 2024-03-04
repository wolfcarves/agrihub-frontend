import { Button } from "@components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@components/ui/alert-dialog";
import { Card } from "@components/ui/card";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Input } from "@components/ui/custom";
import { Label } from "@components/ui/label";
import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { toast } from "sonner";
import useGetLearningPublishedList from "@hooks/api/get/useGetLearningPublishedList";
import useDebounce from "@hooks/utils/useDebounce";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FarmProblemsService } from "@api/openapi";
import { NewFarmProblem } from "@api/openapi";
import { ApiError } from "@api/openapi/core/ApiError";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../../icons/Loader";
import LearningMaterial from "../learning-material";
import { CreateProblemSchema, Material, Problem } from "./farm-problem-schema";

const FarmProblemsForm = () => {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState(false);
  const navigate = useNavigate();
  const { problemId } = useParams();
  const queryClient = useQueryClient();

  const { data: problemData, isLoading: isProblemLoading } = useQuery({
    queryKey: ["GET_PROBLEM", problemId],
    queryFn: async () => {
      const response = await FarmProblemsService.getApiFarmProblems({
        id: problemId ?? ""
      });

      return response;
    }
  });

  const { data: learningMaterials, isLoading: IsLearningLoading } =
    useGetLearningPublishedList({ page: "1", perpage: "3", search });

  const { mutateAsync, isLoading: IsMutationLoading } = useMutation(
    ["CREATE_PROBLEM_MUTATION"],
    {
      async mutationFn(requestBody: NewFarmProblem) {
        const response = await FarmProblemsService.postApiFarmProblems({
          requestBody
        });
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["GET_PROBLEM_LIST_COMMON", "GET_PROBLEM"]
        });
        toast.success(
          problemId ? "Updated Successfully" : "Created Successfully"
        );
        navigate("/admin/farm/problems");
      }
    }
  );

  const form = useForm<Problem>({
    resolver: zodResolver(CreateProblemSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const { fields, remove, append, replace } = useFieldArray({
    control: form.control,
    name: "materials",
    rules: {
      required: true,
      minLength: 1,
      maxLength: 5
    }
  });

  const handleSubmit = async (data: Problem) => {
    const compiledData: NewFarmProblem = {
      problem: data.problem,
      description: data.description,
      common: problemData?.common ? problemData?.common : true,
      materials: data.materials.map(item => item.id)
    };

    if (problemId) {
      compiledData.id = problemId;
    }

    try {
      await mutateAsync(compiledData);
      console.log(compiledData);
    } catch (error) {
      if (error instanceof ApiError) {
        return toast.error(error.body.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
    if (form.formState.errors.problem) {
      toast.error(form?.formState?.errors?.problem?.message);
    }
    if (form.formState.errors.materials) {
      toast.error(form?.formState?.errors?.materials?.message);
    }
  }, [form.formState.errors]);

  useEffect(() => {
    if (problemId && problemData?.learning_materials) {
      replace(problemData?.learning_materials as Material[]);
    }
  }, [problemData]);

  const handleSearch = useDebounce((search: string) => {
    setSearch(search);
  }, 700);

  if (problemId && isProblemLoading) {
    return <Loader isVisible={isProblemLoading} />;
  }

  function getDefaultValue(value: string | undefined) {
    return problemId ? value : "";
  }

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mb-4">
          <Label>Problem</Label>
          <FormField
            control={form.control}
            name="problem"
            defaultValue={getDefaultValue(problemData?.problem)}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    $isError={fieldState?.error && true}
                  />
                </FormControl>
                <FormMessage>{fieldState.error?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <div className="mb-4">
          <Label>Description</Label>
          <FormField
            name="description"
            defaultValue={getDefaultValue(problemData?.description)}
            control={form.control}
            render={({ field: { onChange } }) => {
              return (
                <RichTextEditor
                  // disabled={!isEditing}
                  defaultValue={getDefaultValue(problemData?.description)}
                  height={300}
                  onBlur={data => {
                    onChange(data.html);
                  }}
                />
              );
            }}
          />
        </div>
        <div>
          <div className="flex justify-between items-center my-4">
            <div className="w-full">
              <h2 className="text-xl font-bold tracking-tight">
                Learning Materials
              </h2>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search Learning Materials"
                  onFocus={() => setSelection(true)}
                  onChange={e => handleSearch(e.target.value)}
                />
                {selection && (
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    onClick={() => setSelection(false)}
                  >
                    close
                  </div>
                )}
              </div>
              {selection && (
                <Card className="p-4">
                  <div className="mt-2 grid gap-2 sm:grid-cols-3 lg:grid-cols-3">
                    {IsLearningLoading ? (
                      <>Loading...</>
                    ) : (
                      learningMaterials?.data
                        ?.filter(
                          item =>
                            !fields.some(field => field.title === item.title)
                        )
                        ?.map((items, index) => (
                          <LearningMaterial
                            fields={fields}
                            key={index}
                            index={index}
                            items={items as Material}
                            problemId={problemId}
                            append={append}
                            setSelection={setSelection}
                          />
                        ))
                    )}
                  </div>
                </Card>
              )}
            </div>
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {fields.map((item, index) => (
              <LearningMaterial
                fields={fields}
                key={index}
                index={index}
                items={item}
                problemId={problemId}
                remove={remove}
                setSelection={setSelection}
              />
            ))}
          </div>

          {/* <Button type="button" onClick={() => append({ name: "tite" })}>
            ADD
          </Button> */}
          <div className="w-full flex justify-end">
            <Button
              type="button"
              disabled={isProblemLoading}
              onClick={async () => {
                const validated = await form.trigger();
                if (validated) setConfirmDialog(true);
              }}
            >
              {problemId ? "Save" : "Create"}
            </Button>
          </div>
          <Dialog
            open={confirmDialog}
            onOpenChange={setConfirmDialog}
            form={form}
            handleSubmit={handleSubmit}
          />
        </div>
      </form>
      <Loader isVisible={IsMutationLoading} />
    </Form>
  );
};

function Dialog({
  open,
  onOpenChange,
  form,
  handleSubmit
}: {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  form: UseFormReturn<Problem>;
  handleSubmit: (data: any) => void;
}) {
  return (
    <div className="flex justify-end my-8 gap-4">
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        {/* <AlertDialogTrigger>
          <Button>Create</Button>
        </AlertDialogTrigger> */}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to add this?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will add a new problem that can be selected by farm heads
              when submitting an report.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            {/* <Link to="/admin/farm/problems"> */}
            {/* <AlertDialogAction> */}
            <Button
              type="submit"
              onClick={() => {
                onOpenChange(false);
                form.handleSubmit(handleSubmit)();
              }}
            >
              Confirm
            </Button>
            {/* </AlertDialogAction> */}
            {/* </Link> */}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default FarmProblemsForm;
