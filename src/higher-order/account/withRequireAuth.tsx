import { Button } from "@components/ui/button";
import React, { ComponentType, useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@components/ui/dialog";
import useAuth from "@hooks/useAuth";
import { Link } from "react-router-dom";

export function withRequireAuth<T extends object>(Component: ComponentType<T>) {
  const NewComponent = (props: T) => {
    const { isAuthenticated } = useAuth();

    return (
      <>
        <Dialog>
          <DialogContent>
            <h1 className="text-xl text-neutral-700 font-poppins-medium tracking-tight line-clamp-2">
              To continue interacting, <br /> please create an account or login
            </h1>

            <div className="flex flex-col py-10 gap-3">
              <Link to="/account/signup">
                <Button className="w-full" size="lg" variant="default_border">
                  Signup with Google
                </Button>
              </Link>

              <div className="text-center text-sm">
                <span className="text-gray-700">OR</span>
              </div>

              <Link to="/account/signup">
                <Button className="w-full" size="lg" variant="outline_border">
                  Continue with email
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <span className="text-sm text-neutral-700">
                By creating an account you agree with our Terms of Service, and
                Privacy Policy,
              </span>
            </div>

            <div className="text-center text-sm text-neutral-700 mt-auto">
              <span>Already have an account? </span>
              <Link to="/account/login">
                <span className="hover:underline">Login</span>
              </Link>
            </div>
          </DialogContent>

          <DialogTrigger>
            {isAuthenticated ? (
              <Component {...props} />
            ) : (
              <div className="cursor-pointer">
                <div className="pointer-events-none">
                  <Component {...props} />
                </div>
              </div>
            )}
          </DialogTrigger>
        </Dialog>
      </>
    );
  };

  return NewComponent;
}

export default withRequireAuth;
