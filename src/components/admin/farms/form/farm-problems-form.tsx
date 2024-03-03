import { Button } from "@components/ui/button";
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
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import React from "react";
import { Link } from "react-router-dom";

const FarmProblemsForm = () => {
  return (
    <div>
      <div className="mb-4">
        <Label>Problem</Label>
        <Input type="text" />
      </div>
      <div className="mb-4">
        <Label>Description</Label>
        <RichTextEditor height={300} />
      </div>
      <div>
        <div className="flex justify-between items-center my-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight">
              Learning Materials
            </h2>
          </div>
        </div>
        <Card className="p-5"></Card>
      </div>
      <div className="flex justify-end my-8 gap-4">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Create</Button>
          </AlertDialogTrigger>
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
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link to="/admin/farm/problems">
                <AlertDialogAction>
                  <Button>Confirm</Button>
                </AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default FarmProblemsForm;
