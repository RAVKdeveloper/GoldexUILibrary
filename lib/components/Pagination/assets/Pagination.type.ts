export interface PaginationType {
  currentPage: number;
  pages: number;
  btnPrev?: string;
  btnNext?: string;
  textContent: string;
  next: () => void;
  back: () => void;
  disabledNext?: boolean;
  disabledPrev?: boolean;
  defaultLimit?: number;
  limitText?: string;
  onChangeLimit?: (limit: number) => void;
}
