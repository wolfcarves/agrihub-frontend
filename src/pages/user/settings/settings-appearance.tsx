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
    <div className="py-10 max-w-[50rem]">
      <h4 className="font-poppins-medium">Customize Theme</h4>

      <div className="py-7 space-y-2">
        <h4 className="text-sm font-poppins-medium uppercase text-foreground/70">
          Theme Preference
        </h4>
        <hr />
      </div>

      <div className=" mx-auto">
        <form>
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
