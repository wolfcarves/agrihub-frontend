import GoogleLogo from "@icons/google.svg";
// import { Divider, Typography } from "@components-ui";
import { Link } from "react-router-dom";
import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";

const UserSignInMethods = () => {
  return (
    <>
      <div className="py-10">
        <Separator />
      </div>
      <Button variant={"outline"} className="w-full" size={"lg"}>
        Continue with Google
      </Button>
    </>
  );
};

export default UserSignInMethods;
