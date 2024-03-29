type Columns = {
  Header: string;
  accessor: string;
};

export interface TableType {
  columns: Columns[];
  data: unknown;
}
