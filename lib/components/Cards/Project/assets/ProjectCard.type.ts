export interface ProjectCardType {
  name: string;
  status: "active" | "blocked";
  turnover: number | string;
  cbOptions?: () => void;
  minus: number | string;
  plus: number | string;
  textStatus: string;
  textTurnover: string;
}
