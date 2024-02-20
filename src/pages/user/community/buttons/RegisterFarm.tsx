import { Button } from "@components/ui/button";
import withRequireAuth from "@higher-order/account/withRequireAuth";
import useAuth from "@hooks/useAuth";
import React from "react";
import { Link } from "react-router-dom";

const Input = () => <Button>Register Farm</Button>;

const RegisterFarmButton = () => {
  const isAuthenticated = useAuth().isAuthenticated;

  if (!isAuthenticated) {
    return <Input />;
  }

  return (
    <Link to="/community/register">
      <Input />
    </Link>
  );
};

export default withRequireAuth(RegisterFarmButton);
