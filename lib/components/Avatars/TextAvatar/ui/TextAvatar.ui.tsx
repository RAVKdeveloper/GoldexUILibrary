import { FC } from "react";

import { useOneLetter } from "../logic/useOneLetter.logic";

import type { TextAvatarType } from "./TextAvatar.types";

import s from "../assets/style.module.css";

export const TextAvatar: FC<TextAvatarType> = ({
  bgColor = "green",
  name,
  auto = false,
  sizeType = "md",
  ...props
}) => {
  const letter = useOneLetter(name);

  return (
    <article {...props} className={`${s.root} ${s[bgColor]} ${s[sizeType]}`}>
      {auto ? letter : name}
    </article>
  );
};
