import { Button, Typography } from "@components-ui";
import { Link } from "react-router-dom";

const UserVerifyEmailForm = () => {
  return (
    <>
      <div className="flex flex-col">
        <Typography.Span $label="rodel.crisosto7@gmail.com" $align="center" />
        <Typography.P
          $label="Just click on the link in that email on complete your sign up.If you don't 
          see it, you may need to check your spam folder."
          $align="center"
          className="mt-5"
        />
      </div>

      <div className="flex flex-col w-full gap-5 mt-10">
        <Button label="Resend Email" variant="primary" />
        <Link to={"/help"}>
          <Typography.H6
            $label={"Trobule Verifying?"}
            $align="center"
            $size="sm"
          />
        </Link>
      </div>

      <Link
        to={"/help"}
        className="absolute left-1/2 -translate-x-1/2 bottom-5 "
      >
        <Typography.H6 $label={"Need help?"} />
      </Link>
    </>
  );
};

export default UserVerifyEmailForm;
