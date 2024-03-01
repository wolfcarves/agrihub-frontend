import AdminOutletContainer from "@components/admin/layout/container/AdminOutletContainer";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import BreadCrumb from "@components/ui/custom/breadcrumb/breadcrumb";
import RichTextEditor from "@components/ui/custom/rich-text-editor/RichTextEditor";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useState } from "react";

const breadcrumbItems = [
  {
    title: "Privacy Policy",
    link: "/admin/website/privacy-policy"
  }
];

const PrivacyAdmin = () => {
  const [cardCount, setCardCount] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const handleAddNewCard = () => {
    setCardCount(prevCount => prevCount + 1);
  };

  const handleDeleteCard = () => {
    if (cardCount > 0) {
      setCardCount(prevCount => prevCount - 1);
    }
  };

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  return (
    <AdminOutletContainer className="container mx-auto py-10 ">
      <BreadCrumb items={breadcrumbItems} />
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Privacy Policy</h2>
          <p className="text-sm text-muted-foreground">
            Liver lover boi, secured ang iyong bituka sa sinigang na manok sa
            may tinola.
          </p>
        </div>
        <div>
          <Button onClick={handleAddNewCard}>Add New</Button>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="w-full mb-5">
          <Label>Privacy</Label>
          <RichTextEditor height={300} />
        </div>
        {cardCount === 0 ? (
          <Card className="w-full p-5 flex items-center justify-center">
            <p>You haven't added any subcategory yet.</p>
          </Card>
        ) : (
          [...Array(cardCount)].map((_, index) => (
            <div key={index}>
              <Card className="p-5 mb-5">
                <div className="flex gap-4 w-full items-end mb-4">
                  <div className="w-full">
                    <Label>Sub Category {index + 1}</Label>
                    <Input type="text" disabled={!editMode} />
                  </div>

                  <div className="flex gap-4 mb-1">
                    <Button onClick={toggleEditMode}>
                      {editMode ? "Save" : "Edit"}
                    </Button>
                    <Button variant="destructive" onClick={handleDeleteCard}>
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="w-full">
                  <RichTextEditor height={300} disabled={!editMode} />
                </div>
              </Card>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-end">
        <Button>Save</Button>
      </div>
    </AdminOutletContainer>
  );
};

export default withAuthGuard(
  PrivacyAdmin,
  ["admin", "asst_admin"],
  "privacy_policy"
);
