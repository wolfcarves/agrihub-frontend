import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@components/ui/sheet";

export default function Sidebar() {
  return (
    <div>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you sure absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </div>
  );
}
