import { FC } from "react";
import classNames from "classnames";

type Props = {
  text: string;
  imgUrl?: string;
  alt?: string;
  classsName?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export const Avatar: FC<Props> = ({
  size = "md",
  alt,
  imgUrl,
  text,
  classsName,
}) => {
  const avatarClassNames = classNames(
    "avatar",
    size !== "md" ? `avatar-${size}` : "",
    classsName
  );

  return (
    <div className={avatarClassNames}>
      {imgUrl ? <img src={imgUrl} alt={alt} /> : <span>{text}</span>}
    </div>
  );
};
