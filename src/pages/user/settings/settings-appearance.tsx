import React from "react";
import LightThemeIllustration from "@icons/theme/LightThemeIllustration";
import DarkThemeIllustration from "@icons/theme/DarkThemeIllustration";
import { useTheme } from "@components/ui/theme-provider";
import UserSettingsTitle from "@components/user/settings/form/UserSettingsProfileTitle/UserSettingsTitle";

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
    <>
      <UserSettingsTitle title="Change Theme" />

      <form className="space-y-10 py-10">
        <div className="mx-auto p-4">
          <ul className="flex flex-wrap gap-4">
            {radios.map((item, idx) => (
              <div
                className="max-w-[350px]"
                key={idx}
                onClick={() => setTheme(item.theme as "dark" | "light")}
              >
                <label htmlFor={item.name} className="block relative">
                  <div
                    className={`${
                      item.theme === theme && "ring-2 ring-green-600"
                    } w-full cursor-pointer rounded-lg border bg-white shadow-sm duration-200 p-5`}
                  >
                    <h3 className="leading-none text-gray-800 font-medium mb-4">
                      {item.name}
                    </h3>
                    {item.illustration}
                    <p className="mt-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </label>
              </div>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
};

export default UserAppearanceSettings;
