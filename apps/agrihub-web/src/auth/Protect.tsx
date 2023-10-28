import { RequireAuth } from "react-auth-kit";

export default function Protect({ children }: { children: JSX.Element }) {
  return <RequireAuth loginPath="/account/login">{children}</RequireAuth>;
}
