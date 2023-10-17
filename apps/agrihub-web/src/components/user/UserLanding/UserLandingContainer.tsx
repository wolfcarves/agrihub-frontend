import React from "react";

export default function UserLandingContainer(props: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen">
      {props.children}
    </div>
  );
}
