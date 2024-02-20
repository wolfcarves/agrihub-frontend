import React, { useState } from "react";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import { Input } from "@components/ui/input";
import { ComboboxSocialMedia } from "../components/combobox-social-media";
import { FaTrashCan } from "react-icons/fa6";

interface SocialMediaItem {
  id: number;
  link: string;
}

const ClientSocials = () => {
  const [socialMediaList, setSocialMediaList] = useState<SocialMediaItem[]>([]);
  const [isEditingSocial, setIsEditingSocial] = useState<boolean>(false);

  const handleAddSocialMedia = () => {
    setSocialMediaList([...socialMediaList, { id: Date.now(), link: "" }]);
  };

  const handleEditSocial = () => {
    setIsEditingSocial(true);
  };

  const handleSaveSocial = () => {
    setIsEditingSocial(false);
  };

  const handleDeleteSocial = (id: number) => {
    setSocialMediaList(socialMediaList.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="my-8">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-bold tracking-tight">
            Social Media Accounts
          </h2>
          <Button variant="outline" onClick={handleAddSocialMedia}>
            Add Social Media
          </Button>
        </div>
        {socialMediaList.length === 0 ? (
          <p>No social media links added yet.</p>
        ) : (
          socialMediaList.map(socialMedia => (
            <Card key={socialMedia.id} className="p-5 mb-4">
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-4 items-center">
                <ComboboxSocialMedia />
                <Input
                  type="text"
                  id="link"
                  placeholder="insert social media link here"
                  value={socialMedia.link}
                  disabled={!isEditingSocial}
                  onChange={e => {
                    const updatedList = socialMediaList.map(item =>
                      item.id === socialMedia.id
                        ? { ...item, link: e.target.value }
                        : item
                    );
                    setSocialMediaList(updatedList);
                  }}
                />
                {isEditingSocial ? (
                  <Button variant="outline" onClick={handleSaveSocial}>
                    Save
                  </Button>
                ) : (
                  <Button variant="outline" onClick={handleEditSocial}>
                    Edit
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteSocial(socialMedia.id)}
                >
                  <FaTrashCan />
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientSocials;
