export default function UserAccountContainer(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen w-full px-3">
      {props.children}
    </div>
  );
}
