export interface ProfileModalType {
  cbPropLanguage?: () => void;
  cbPropSupport?: () => void;
  cbPropTheme?: () => void;
  cbPropLogout: () => void;
  cbMyProfile: () => void;
  cbEditProfile: () => void;
  isDarkMode: boolean;
  textLng: string;
  textMyProfile: string;
  textEditProfile: string;
  textSupport: string;
  textTheme: string;
  textLogOut: string;
  activeLng: string;
  changeLng: (lng: string) => void;
  readonly isOpenMainModal: boolean;
}
