const AccountOutletContainer = ({
  children
}: {
  children: React.ReactNode | JSX.Element;
}) => {
  return <div className="max-w-[28rem] w-full mx-auto">{children}</div>;
};

export default AccountOutletContainer;
