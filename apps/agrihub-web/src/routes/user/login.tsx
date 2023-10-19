import UserLoginLayout from "@components/user/UserLayouts/UserLoginLayout";
import UserLoginForm from "@components/user/UserForms/UserLoginForm";
import UserLoginHeader from "@components/user/UserHeaders/UserLoginHeader";

// import axios from "axios";
// const data = JSON.stringify({
//   username: "daniel123x1",
//   password: "7qweR123$"
// });

// const config = {
//   method: "post",
//   maxBodyLength: Infinity,
//   url: "https://qc-agrihub.xyz/v1/api/auth/login",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   data: data
// };

// async function makeRequest() {
//   try {
//     const response = await axios.request(config);
//     console.log(JSON.stringify(response.data));
//   } catch (error) {
//     console.log(error);
//   }
// }

// makeRequest();

export default function Login() {
  return (
    <UserLoginLayout>
      <UserLoginHeader />
      <UserLoginForm />
    </UserLoginLayout>
  );
}
