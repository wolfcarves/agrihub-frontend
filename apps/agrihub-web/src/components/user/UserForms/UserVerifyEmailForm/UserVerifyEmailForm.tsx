import { Button, Typography } from "@packages/agrihub-ui";
import { Link } from "react-router-dom";

export default function UserVerifyEmailForm() {
  return (
    <>
      <div className="flex flex-col gap-5 py-10">
        <Typography.H1
          label="rodel.crisosto7@gmail.com"
          size="base"
          className="text-center"
        />
        <Typography.P
          label="Just click on the link in that email on complete your sign up.If you don't 
          see it, you may need to check your spam folder."
          size="base"
          className="text-center"
        />
      </div>

      <div className="flex flex-col w-full gap-5 mt-10">
        <Button label="Resend Email" variant="primary" />
        <Link to={"/help"}>
          <Typography.H1
            label={"Trobule Verifying?"}
            size="sm"
            weight={500}
            className="text-black-100 underline text-center"
          />
        </Link>
      </div>

      <Link
        to={"/help"}
        className="absolute left-1/2 -translate-x-1/2 bottom-5 "
      >
        <Typography.H1 label={"Need help?"} size="sm" />
      </Link>
    </>
  );
}
