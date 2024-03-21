export interface ProfileModalType {
  cbPropLanguage?: () => void;
  cbPropSupport: () => void;
  cbPropTheme: () => void;
  cbPropLogout: () => void;
  isDarkMode: boolean;
  textLng: string;
  textSupport: string;
  textTheme: string;
  textLogOut: string;
  activeLng: string;
  changeLng: (lng: string) => void;
}
