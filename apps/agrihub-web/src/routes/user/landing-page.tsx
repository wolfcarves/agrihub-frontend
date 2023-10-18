import { Button } from "@packages/agrihub-ui";

export default function Landing(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button className="rounded-lg text-base px-3 py-2 bg-blue-500 text-white hover:bg-blue-500/90 duration-100">
        React + Typescript
      </Button>
    </div>
  );
}
