import { FC, useEffect, useState } from "react";
import { Avatar } from "../common/Avatar";
import { IMessage } from "../../types";
import classNames from "classnames";
import { initialsGenerator } from "../../utils/functions";

type Props = {
  record: IMessage;
};

export const Chat: FC<Props> = ({ record }) => {
  const [user, setUser] = useState<string | undefined>(undefined);
  const userInitials = initialsGenerator(record.user);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user") ?? "";
    setUser(sessionUser);
  }, []);

  const chatClassNames = classNames(
    "flex",
    record.user === user
      ? "flex-row-reverse space-x-2 space-x-reverse"
      : "flex-row space-x-2"
  );
  const bubbleClassNames = classNames(
    "rounded-lg p-4 mt-8",
    record.user === user ? "bg-gray-100 text-gray-700" : "bg-primary text-white"
  );
  const avatarClassNames = classNames(
    record.user === user
      ? "!bg-gray-100 text-gray-700"
      : "bg-primary text-white"
  );

  return (
    <div className={chatClassNames}>
      <Avatar text={userInitials} classsName={avatarClassNames} />

      <div className={bubbleClassNames}>{record.content}</div>
    </div>
  );
};
