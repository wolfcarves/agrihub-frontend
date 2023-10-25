export default function UserBaseContainer(props: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen w-screen">{props.children}</div>;
}
