import AgrihubLogoSrc from "@icons/agrihub-logo.svg";

interface AgrihubLogoProps extends Partial<HTMLImageElement> {}

const AgrihubLogo = ({ className }: AgrihubLogoProps) => {
  return (
    <img src={AgrihubLogoSrc as unknown as string} className={className} />
  );
};

export default AgrihubLogo;
