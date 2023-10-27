import { Button, Typography } from "@packages/agrihub-ui";
import { Link } from "react-router-dom";

export default function UserFinalSetupForm() {
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

        <Typography.H1
          label={"Displayed Name"}
          className="text-black-100 text-center mt-2"
          weight={500}
        />
      </div>

      <div className="absolute left-0 right-0 mx-3 bottom-10">
        <Link to={"/account/final-setup"}>
          <Button label="Continue" variant="primary" isLoading={true} />
        </Link>
      </div>
    </form>
  );
}
