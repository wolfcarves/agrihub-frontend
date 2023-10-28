import { AuthProvider as ReactAuthProvider } from "react-auth-kit";

export default function AuthProvider(props: { children: JSX.Element }) {
  return (
    <ReactAuthProvider
      authName="user_auth"
      authType="cookie"
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >
      {props.children}
    </ReactAuthProvider>
  );
}
