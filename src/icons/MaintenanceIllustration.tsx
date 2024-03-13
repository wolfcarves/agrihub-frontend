import Maintenance from "@icons/maintenance.svg";

interface MaintenanceIllustrationProps extends Partial<HTMLImageElement> {}

const MaintenanceIllustration = ({
  className
}: MaintenanceIllustrationProps) => {
  return <img src={Maintenance as unknown as string} className={className} />;
};

export default MaintenanceIllustration;
