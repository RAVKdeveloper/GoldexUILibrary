import { FC } from "react";
import {
  CheckIcon,
  ErrorIcon,
  FeaturedIcon,
  InfoIcon,
} from "goldex-icon-library";

import type { AlertType } from "../assets/Alert.type";

import s from "../assets/style.module.css";

export const Alert: FC<AlertType> = ({
  children,
  variant,
  sizeType = "standart",
  isOpen,
}) => {
  const icons = {
    success: <CheckIcon width={14} height={14} color="green" />,
    error: <ErrorIcon width={16} height={16} color="red" />,
    warning: (
      <FeaturedIcon sizeType="es" width={14} height={14} variant="warning" />
    ),
    info: <InfoIcon width={14} height={14} color="blue" />,
  };

  return (
    <article
      className={`${s.root} ${s[variant]} ${s[sizeType]} ${isOpen && s.open}`}
    >
      {icons[variant]}
      <span className={s.text}>{children}</span>
    </article>
  );
};
