import React from "react";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";

import { Button } from "@components/ui/button";

import { Card } from "@components/ui/card";
import { useState } from "react";

const LearningCreditForm = () => {
  // credits
  const [credits, setCredit] = React.useState(1);
  const handleAddCredit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCredit(prevCredit => Math.min(100, prevCredit + 1));
  };
  const handleDeleteCredit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCredit(prevCredit => Math.max(1, prevCredit - 1));
  };

  // credits edit
  const [isEditingCredit, setIsEditingCredit] = useState(false);
  const handleEditingCredit = () => {
    setIsEditingCredit(true);
  };
  const handleSaveCredit = () => {
    setIsEditingCredit(false);
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-2">
        <h2 className="text-md font-bold tracking-tight">Credits</h2>
        <div></div>
      </div>

      {/* credits form */}
      <div>
        {Array.from({ length: credits }).map((_, index) => (
          <Card className="p-4 mb-4">
            <h2 className="text-sm font-bold tracking-tight">
              Credit {index + 1}
            </h2>
            <div
              className="flex flex-wrap justify-between items-end gap-4 mb-8"
              key={index}
            >
              <div className="grid w-full max-w-[40rem] items-center gap-1.5">
                <Label htmlFor={`name-${index}`}>Name</Label>
                <Input
                  type="text"
                  id={`name-${index}`}
                  placeholder="e.g Engr. Jusin F. Malindao"
                  disabled={!isEditingCredit}
                />
              </div>

              <div className="grid w-full max-w-[15rem] items-center gap-1.5">
                <Label htmlFor={`occupation-${index}`}>Title</Label>
                <Input
                  type="text"
                  id={`occupation-${index}`}
                  placeholder="e.g Agriculturist"
                  disabled={!isEditingCredit}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 gap-4">
              {isEditingCredit ? (
                <div>
                  <Button variant="secondary" onClick={handleSaveCredit}>
                    Save
                  </Button>
                </div>
              ) : (
                <Button variant="outline" onClick={handleEditingCredit}>
                  Edit Details
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={e => handleDeleteCredit(e)}
                disabled={credits < 0}
              >
                Delete
              </Button>
              <Button onClick={e => handleAddCredit(e)}>Add more source</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningCreditForm;
