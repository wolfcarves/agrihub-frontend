import React from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

interface QuestionUserAvatar {
  userId?: string;
  avatar?: string;
  username?: string;
}

const QuestionUserAvatar = ({
  userId,
  avatar,
  username
}: QuestionUserAvatar) => {
  return (
    <div className="flex relative h-max rounded-full">
      <Link
        to={`/users/${userId}/${username}`}
        className="font-poppins-medium hover:opacity-80"
      >
        <Avatar className="border">
          <AvatarImage
            src={avatar}
            className="object-cover pointer-events-none select-none "
          />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </Link>
    </div>
  );
};

export default QuestionUserAvatar;
