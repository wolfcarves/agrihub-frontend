import Unauthorize from "@icons/Unauthorize.svg";

interface UnauthorizeIllustrationProps extends Partial<HTMLImageElement> {}

const UnauthorizeIllustration = ({
  className
}: UnauthorizeIllustrationProps) => {
  return <img src={Unauthorize as unknown as string} className={className} />;
};

export default UnauthorizeIllustration;
