import { FC } from "react";

import type { ModalActionsType } from "../assets/ModalActions.type";

import s from "../assets/style.module.css";

export const ModalActions: FC<ModalActionsType> = ({
  variant = "confirm",
  btnTextCancel,
  btnTextAction,
  cbCansel,
  cbAction,
  align = "horizontal",
  disabledAction = false,
  disabledCansel = false,
}) => {
  return (
    <div className={`${s.root} ${s[align]}`}>
      {align === "horizontal" ? (
        <>
          <button
            onClick={cbCansel}
            className={`${s.btn} ${s.cansel} ${disabledCansel && s.dis}`}
          >
            {btnTextCancel}
          </button>
          <button
            onClick={cbAction}
            className={`${s.btn} ${s[variant]} ${disabledAction && s.dis}`}
          >
            {btnTextAction}
          </button>
        </>
      ) : (
        <>
          <button onClick={cbAction} className={`${s.btn} ${s[variant]}`}>
            {btnTextAction}
          </button>
          <button onClick={cbCansel} className={`${s.btn} ${s.cansel}`}>
            {btnTextCancel}
          </button>
        </>
      )}
    </div>
  );
};
