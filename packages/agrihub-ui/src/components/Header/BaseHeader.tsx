type BaseHeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface BaseHeader extends BaseHeaderProps {
  logo?: React.ReactNode;
  navbar?: React.ReactNode;
}

export default function BaseHeader({ logo, navbar, className }: BaseHeader) {
  return (
    <div className={`flex h-[55px] justify-between items-center ${className}`}>
      <div>{logo}</div>
    </div>
  );
}
