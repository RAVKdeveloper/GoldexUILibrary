import { FC } from "react";
import { MenuDotsIcon } from "goldex-icon-library";

import s from "../assets/style.module.css";

import { Percent } from "../../../../main";

import type { ProjectCardType } from "../assets/ProjectCard.type";

export const ProjectCard: FC<ProjectCardType> = ({
  turnover,
  minus,
  cbOptions,
  plus,
  status,
  name,
  textStatus,
  textTurnover,
}) => {
  return (
    <article className={s.root}>
      <div className={s.left}>
        <p className={s.nameProject}>{name}</p>
        <p
          className={`${s.statusProject} 
          ${status === "blocked" && s.blocked}`}
        >
          {textStatus}
        </p>
      </div>
      <div className={s.right}>
        <div className={s.turnoverColumn}>
          <p className={s.turnover}>{turnover}</p>
          <p className={s.textTurnover}>{textTurnover}</p>
        </div>
        <div className={s.actions}>
          <div className={s.badgeRow}>
            <div className={s.minus}>
              <Percent value={Number(minus)} />
            </div>
            <div className={s.plus}>
              <Percent value={Number(plus)} />
            </div>
          </div>
          <div
            data-testid="options"
            onClick={() => cbOptions?.()}
            className={s.optionsBody}
          >
            <MenuDotsIcon width={20} height={20} opacity={0.4} />
          </div>
        </div>
      </div>
    </article>
  );
};
