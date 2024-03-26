export interface TransactionCardType {
  variant: "inference" | "exchange" | "deposit";
  date: string;
  status: "paid" | "wait" | "rejected" | "expired";
  sum: string | number;
  cbOptions?: () => void;
  language: "en" | "ru";
}
