import { FC } from "react";

import type { ModalType } from "../assets/Modal.type";

import s from "../assets/style.module.css";

export const Modal: FC<ModalType> = ({ children, isOpen = false }) => {
  return (
    <div className={`${s.wrapper} ${isOpen && s.open}`}>
      <article className={s.root}>{children}</article>
    </div>
  );
};
