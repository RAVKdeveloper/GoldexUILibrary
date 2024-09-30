type Columns = {
    header: string;
    accessorKey: string;
};
export interface TableWithPaginationType {
    columns: Columns[];
    data: unknown;
    activeLng: string;
    btnNextText: string;
    btnPrevText: string;
}
export {};
