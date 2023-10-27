export default function UserBaseContainer(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center min-h-screen w-screen px-3">
      {props.children}
    </div>
  );
}
