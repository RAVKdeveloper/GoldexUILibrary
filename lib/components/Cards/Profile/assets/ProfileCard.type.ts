import { ReactElement, ReactNode } from "react";

export interface ProfileCardType {
  avatarUrl: string;
  avatarNickName: string;
  avatarRole: string;
  cbOptions: () => void;
  isOpenModal?: boolean;
  modal?: ReactNode | ReactElement;
}
