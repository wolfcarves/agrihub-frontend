import { Button } from "@packages/agrihub-ui";

import UserLandingContainer from "@components/user/UserLanding/UserLandingContainer";

export default function Landing(): JSX.Element {
  return (
    <UserLandingContainer>
      <Button className="rounded-lg text-base px-3 py-2 bg-blue-500 text-white hover:bg-blue-500/90 duration-100">
        React + Typescript
      </Button>
    </UserLandingContainer>
  );
}
