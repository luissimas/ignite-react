import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean;
}

export function Avatar({ border = true, ...props }: AvatarProps) {
  return (
    <img
      className={border ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
