import React from "react";
import LightThemeIllustration from "@icons/theme/LightThemeIllustration";
import DarkThemeIllustration from "@icons/theme/DarkThemeIllustration";
import { useTheme } from "@components/ui/theme-provider";

const UserAppearanceSettings = () => {
  const { theme, setTheme } = useTheme();

  const radios = [
    {
      name: "Light Theme",
      theme: "light",
      illustration: <LightThemeIllustration />,
      description:
        "This theme will be active when your system is set to “light mode”"
    },
    {
      name: "Dark Theme",
      theme: "dark",
      illustration: <DarkThemeIllustration />,
      description:
        "This theme will be active when your system is set to “dark mode”"
    }
  ];

  return (
    <div className="py-10 max-w-[50rem]">
      <h4 className="font-poppins-medium">Customize Theme</h4>

      <div className="mt-10 space-y-2">
        <h4 className="text-sm font-poppins-medium uppercase text-foreground/70">
          Theme Preference
        </h4>
        <hr />
      </div>

      <div className="mt-10 mx-auto">
        <form>
          <div className="mx-auto p-4">
            <ul className="flex gap-8 space-y-3">
              {radios.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setTheme(item.theme as "dark" | "light")}
                >
                  <label htmlFor={item.name} className="block relative">
                    <div
                      className={`${
                        item.theme === theme && "ring-2 ring-green-600"
                      } w-full cursor-pointer rounded-lg border bg-white shadow-sm duration-200 p-5`}
                    >
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
                </div>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAppearanceSettings;
