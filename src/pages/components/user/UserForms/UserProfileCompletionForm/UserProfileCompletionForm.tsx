import { Button, Input } from "@components-ui";
import { Link } from "react-router-dom";

export default function UserProfileCompletionForm() {
  return (
    <form className="mt-30">
      <div className="flex flex-col gap-3">
        <Input type="text" label="First Name" />
        <Input type="text" label="Last Name" />
        <Input type="text" label="Birth Date" />
        <Input type="text" label="Present Address" />
        <Input type="text" label="Zip Code" />
        <Input type="text" label="District" />
        <Input type="text" label="Municipality" />
      </div>

      <div className="mt-8">
        <Link to={"/account/final-setup"}>
          <Button label="Continue" variant="primary" />
        </Link>
      </div>
    </form>
  );
}
