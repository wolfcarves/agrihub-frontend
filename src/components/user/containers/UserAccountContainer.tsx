export default function UserAccountContainer(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-w-[480px] mx-auto items-center min-h-screen px-3">
      {props.children}
    </div>
  );
}
