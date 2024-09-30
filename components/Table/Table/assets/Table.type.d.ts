type Columns = {
    header: string;
    accessorKey: string;
};
export interface TableType {
    columns: Columns[];
    data: unknown;
}
export {};
