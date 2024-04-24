import { Button } from "@components/ui/button";
import React, { useEffect, useState } from "react";
import { MdInstallDesktop } from "react-icons/md";

const InstallPWA: React.FC = () => {
  const [supportsPWA, setSupportsPWA] = useState<boolean>(false);
  const [promptInstall, setPromptInstall] = useState<Event | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    console.log(supportsPWA, "suuportpwa");
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, [supportsPWA, promptInstall]);

  const onClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    (promptInstall as any).prompt(); // Casted to any for prompt method
  };

  if (!supportsPWA) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      <MdInstallDesktop size="24" />
    </Button>
  );
};

export default InstallPWA;
