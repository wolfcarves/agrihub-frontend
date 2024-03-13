import NotFound from "@icons/NotFound.svg";

interface NotFoundIllustrationProps extends Partial<HTMLImageElement> {}

const NotFoundIllustration = ({ className }: NotFoundIllustrationProps) => {
  return <img src={NotFound as unknown as string} className={className} />;
};

export default NotFoundIllustration;
