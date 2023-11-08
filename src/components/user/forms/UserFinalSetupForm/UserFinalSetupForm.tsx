import { Button, Typography } from "@components-ui";
import { Link } from "react-router-dom";

const UserFinalSetupForm = () => {
  return (
    <form>
      <div className="flex justify-center">
        <div className="rounded-full border w-40 aspect-square"></div>
      </div>

      <div className="flex flex-col mt-5">
        <input
          type="text"
          className="border-b border-black-100 mx-auto focus:outline-0"
        />

        <Typography.Span $title={"Displayed Name"} />
      </div>

      <div className="absolute left-0 right-0 mx-3 bottom-10">
        <Link to={"/account/final-setup"}>
          <Button label="Continue" variant="primary" />
        </Link>
      </div>
    </form>
  );
};

export default UserFinalSetupForm;
