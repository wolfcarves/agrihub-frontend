import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { FaTrashCan } from "react-icons/fa6";
import Capture from "@components/user/community/capture/capture";
import { Label } from "@components/ui/label";
import { Textarea } from "@components/ui/textarea";

interface PartnershipItem {
  id: number;
  name: string;
  description: string;
}

const ClientPartnerships = () => {
  const [partnerships, setPartnerships] = useState<PartnershipItem[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState<PartnershipItem>({
    id: 0,
    name: "",
    description: ""
  });

  const handleAddPartnership = () => {
    setPartnerships([...partnerships, { ...formData, id: Date.now() }]);
    setFormData({ id: 0, name: "", description: "" });
  };

  const handleEditPartnership = (id: number) => {
    const partnershipToEdit = partnerships.find(item => item.id === id);
    if (partnershipToEdit) {
      setFormData(partnershipToEdit);
      setIsEditing(true);
    }
  };

  const handleSavePartnership = () => {
    setIsEditing(false);
    const updatedPartnerships = partnerships.map(item =>
      item.id === formData.id ? formData : item
    );
    setPartnerships(updatedPartnerships);
    setFormData({ id: 0, name: "", description: "" });
  };

  const handleDeletePartnership = (id: number) => {
    setPartnerships(partnerships.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-bold tracking-tight">Partnerships</h2>
          <Button variant="outline" onClick={handleAddPartnership}>
            Add Partnership
          </Button>
        </div>
        {partnerships.length === 0 ? (
          <Card className="p-5">No partnership added</Card>
        ) : (
          partnerships.map(partnership => (
            <Card key={partnership.id} className="p-5 mb-4">
              <div className="flex sm:flex-nowrap flex-wrap gap-4">
                <div className="w-full">
                  <Capture />
                </div>
                <div className="w-full">
                  <div>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      disabled={!isEditing}
                      onChange={e =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <div>
                      <Textarea
                        disabled={!isEditing}
                        onChange={e =>
                          setFormData({
                            ...formData,
                            description: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4">
                <Button
                  variant="destructive"
                  onClick={() => handleDeletePartnership(partnership.id)}
                >
                  <FaTrashCan />
                </Button>
                {isEditing ? (
                  <Button variant="outline" onClick={handleSavePartnership}>
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => handleEditPartnership(partnership.id)}
                  >
                    Edit
                  </Button>
                )}
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientPartnerships;
