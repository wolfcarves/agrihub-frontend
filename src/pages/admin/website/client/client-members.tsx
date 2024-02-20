import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@components/ui/dialog";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import Capture from "@components/user/community/capture/capture";

interface TeamMember {
  avatar: string;
  name: string;
  position: string;
  description: string;
}

const ClientMembers = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [formData, setFormData] = useState<TeamMember>({
    avatar: "",
    name: "",
    position: "",
    description: ""
  });

  const handleAddMember = () => {
    setTeam([...team, formData]);
    setFormData({ avatar: "", name: "", position: "", description: "" }); // Reset form data after adding member
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleEditMember = (idx: number) => {
    setFormData(team[idx]);
  };

  const handleDeleteMember = (idx: number) => {
    const updatedTeam = team.filter((_, index) => index !== idx);
    setTeam(updatedTeam);
  };

  return (
    <div>
      <hr className="my-4" />
      <div className="flex justify-between items-center my-4">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold tracking-tight">The team</h2>
          <p className="text-gray-600 mt-3">
            Quezon City University - Center for Urban Agriculture and Innovation
            Core Members.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Member</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-3xl">
            <DialogHeader>
              <DialogTitle>Add Member</DialogTitle>
              <DialogDescription>Add a new team member.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div>
                <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-4">
                  <div className="w-full">
                    <Capture />
                  </div>

                  <div className="w-full">
                    <div className="mb-4">
                      <Label>Name</Label>
                      <Input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-4">
                      <Label>Position</Label>
                      <Input
                        type="text"
                        id="position"
                        value={formData.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label>Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <div className="flex justify-end">
                <DialogClose>
                  <Button variant="outline" onClick={handleAddMember}>
                    Add
                  </Button>
                </DialogClose>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* members */}
      <Card className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
          <div>
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.length === 0 ? (
                <Card className="p-5">No members added yet.</Card>
              ) : (
                team.map((item, idx) => (
                  <div>
                    <Dialog>
                      <DialogTrigger
                        asChild
                        onClick={() => handleEditMember(idx)}
                      >
                        <Card className="p-5" key={idx}>
                          <div className="w-24 h-24 mx-auto">
                            {/* profile */}
                            <img
                              src={
                                item.avatar ||
                                "https://randomuser.me/api/portraits/lego/5.jpg"
                              }
                              className="w-full h-full rounded-full object-cover"
                              alt=""
                            />
                          </div>
                          <div className="mt-2">
                            {/* name */}
                            <h4 className="text-gray-700 font-semibold sm:text-lg">
                              {item.name}
                            </h4>
                            {/* position */}
                            <p className="text-green-600">{item.position}</p>
                            {/* description */}
                            <p className="text-gray-600 mt-2">
                              {item.description}
                            </p>
                          </div>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="sm:max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>Edit Member</DialogTitle>
                          <DialogDescription>
                            Edit member details.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div>
                            <div className="flex w-full flex-wrap sm:flex-nowrap items-center gap-4">
                              <div className="w-full">
                                <Capture />
                              </div>

                              <div className="w-full">
                                <div className="mb-4">
                                  <Label>Name</Label>
                                  <Input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="mb-4">
                                  <Label>Position</Label>
                                  <Input
                                    type="text"
                                    id="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div>
                                  <Label>Description</Label>
                                  <Textarea
                                    id="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <div className="flex justify-end gap-4">
                            <Button
                              variant="destructive"
                              onClick={() => handleDeleteMember(idx)}
                            >
                              Delete
                            </Button>
                            <DialogClose>
                              <Button variant="outline">Edit</Button>
                            </DialogClose>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                ))
              )}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ClientMembers;
