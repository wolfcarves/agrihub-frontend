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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldArrayWithId,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormReturn,
  useFieldArray,
  useForm
} from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@components/ui/form";
import { toast } from "sonner";
import useGetLearningPublishedList from "@hooks/api/get/useGetLearningPublishedList";
import { convertToEmbedLink, formatDate } from "@lib/utils";
import parse from "html-react-parser";
import useDebounce from "@hooks/utils/useDebounce";

const MaterialSchema = z.object({
  content: z.string(),
  createdat: z.string(), // Assuming date-time format
  id: z.string(),
  tags: z.array(
    z.object({
      tag: z.string()
    })
  ),
  thumbnail: z.object({
    id: z.string(),
    resource: z.string(),
    type: z.string()
  }),
  title: z.string(),
  updatedat: z.string() // Assuming date-time format
});

type Material = z.infer<typeof MaterialSchema>;

const CreateProblemSchema = z.object({
  problem: z.string({ required_error: "Problem is required" }),
  description: z.string({ required_error: "Description is required" }).min(20),
  materials: z.array(MaterialSchema)
});

type Problem = z.infer<typeof CreateProblemSchema>;

const FarmProblemsForm = () => {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState(false);

  const { data: learningMaterials, isLoading: IsLearningLoading } =
    useGetLearningPublishedList({ page: "1", perpage: "3", search });

  const form = useForm<Problem>({
    resolver: zodResolver(CreateProblemSchema),
    mode: "onChange",
    reValidateMode: "onChange"
  });

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name: "materials"
  });

  const handleSubmit = (data: Problem) => {
    console.log(data?.materials.map(item => item.id));
  };

  useEffect(() => {
    if (form.formState.errors.description) {
      toast.error(form?.formState?.errors?.description?.message);
    }
    if (form.formState.errors.problem) {
      toast.error(form?.formState?.errors?.problem?.message);
    }
  }, [form.formState.errors]);

  const handleSearch = useDebounce((search: string) => {
    setSearch(search);
  }, 700);

  return (
    <Form {...form}>
      <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="mb-4">
          <Label>Problem</Label>
          <FormField
            control={form.control}
            name="problem"
            defaultValue=""
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder=""
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
            control={form.control}
            render={({ field: { onChange } }) => {
              return (
                <RichTextEditor
                  // disabled={!isEditing}
                  // defaultValue={eventData?.about}
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
              <div>
                <Input
                  type="text"
                  placeholder=""
                  // onBlur={() => setSelection(false)}
                  onFocus={() => setSelection(true)}
                  onChange={e => handleSearch(e.target.value)}
                />
              </div>
              {selection && (
                <Card className="p-4">
                  <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {learningMaterials?.data?.map((items, index) => (
                      <LearningMaterial
                        fields={fields}
                        key={index}
                        index={index}
                        items={items as Material}
                        append={append}
                        setSelection={setSelection}
                      />
                    ))}
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
              onClick={async () => {
                const validated = await form.trigger();
                if (validated) setConfirmDialog(true);
              }}
            >
              Create
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

type LearningMaterialProps = {
  items: Material;
  index: number;
  setSelection: React.Dispatch<React.SetStateAction<boolean>>;
  fields: FieldArrayWithId<Problem, "materials", "id">[];
  append?: UseFieldArrayAppend<Problem, "materials">;
  remove?: UseFieldArrayRemove;
};
function LearningMaterial({
  items,
  index,
  fields,
  setSelection,
  append,
  remove
}: LearningMaterialProps) {
  return (
    <article
      className="max-w-sm mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
      onClick={() => {
        const isInList = fields.some(learn => learn.title === items.title);
        if (append && !isInList) {
          append(items);
        }
        setSelection(false);
      }}
    >
      <div className="cursor-pointer">
        {remove && (
          <button
            type="button"
            onClick={() => {
              if (remove) {
                remove(index);
              }
            }}
          >
            x
          </button>
        )}
        <div className="h-48 rounded-t-md">
          {items.thumbnail.type === "image" ? (
            <img
              src={`https://s3.ap-southeast-1.amazonaws.com/agrihub-bucket/${items.thumbnail.resource}`}
              alt={items.thumbnail.id}
              className="w-full aspect-video object-cover object-center rounded-md h-48 rounded-t-md"
            />
          ) : items.thumbnail.type === "video" ? (
            <div className="w-full aspect-video h-48 rounded-t-md">
              <iframe
                className="w-full h-full rounded-t-md"
                src={convertToEmbedLink(items.thumbnail.resource || "")}
                title={items.thumbnail.id}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : null}
        </div>

        <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
          <div className="">
            <span className="block text-gray-400 text-sm">
              {formatDate(items.createdat)}
            </span>
          </div>
        </div>
        <div className="pt-3 ml-4 mr-2 mb-3 ">
          <h3 className="text-xl text-gray-900 truncate">{items.title}</h3>
          <p className="text-gray-400 text-sm mt-1 line-clamp-3">
            {parse(items.content || "")}
          </p>

          <div className="my-4 item">
            <p className="text-gray-700 mb-2 flex flex-wrap">
              {items.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-base text-primary rounded-md w-auto border border-[#BBE3AD] bg-secondary px-2 mr-2 mb-2 py-1"
                >
                  {tag.tag}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default FarmProblemsForm;
