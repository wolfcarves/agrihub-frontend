import React from "react";
import { Label } from "@components/ui/label";
import LightThemeIllustration from "@icons/theme/LightThemeIllustration";
import DarkThemeIllustration from "@icons/theme/DarkThemeIllustration";

const UserAppearanceSettings = () => {
  const radios = [
    {
      name: "Ligh Theme",
      illustration: <LightThemeIllustration />,
      description:
        "This theme will be active when your system is set to “light mode”"
    },
    {
      name: "Dark Theme",
      illustration: <DarkThemeIllustration />,
      description:
        "This theme will be active when your system is set to “dark mode”"
    }
  ];
  return (
    <div className="w-full m-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Theme Preference</h2>
      </div>
      <p className="text-sm text-muted-foreground">
        Choose how AgriHub looks to you. Select a single theme, or sync with
        your system and automatically switch between day and night themes.
      </p>
      <hr className="my-4" />
      <div className=" mx-auto">
        <form>
          <Label className="font-bold">Theme mode</Label>
          <div className="mx-auto p-4">
            <ul className="flex gap-8 space-y-3">
              {radios.map((item, idx) => (
                <p key={idx}>
                  <label htmlFor={item.name} className="block relative">
                    <input
                      id={item.name}
                      type="radio"
                      defaultChecked={idx == 1 ? true : false}
                      name="payment"
                      className="sr-only peer"
                    />
                    <div className="w-full cursor-pointer rounded-lg border bg-white shadow-sm ring-green-600 peer-checked:ring-2 duration-200 p-5">
                      <div className="pl-7  ">
                        <h3 className="leading-none text-gray-800 font-medium mb-4">
                          {item.name}
                        </h3>
                        {item.illustration}
                        <p className="mt-2 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </label>
                </p>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAppearanceSettings;
