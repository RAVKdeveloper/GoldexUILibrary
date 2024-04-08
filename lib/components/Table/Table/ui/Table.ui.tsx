import { FC } from "react";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

import { HeaderTable } from "../../Header/ui/Header.ui";

import type { TableType } from "../assets/Table.type";

import s from "../assets/style.module.css";

export const Table: FC<TableType> = ({ data, columns }) => {
  const { getHeaderGroups, getRowModel } =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useReactTable({ columns, data, getCoreRowModel: getCoreRowModel() });

  return (
    <div className={s.wrapper}>
      <table className={s.root} data-testid="table">
        <thead>
          {getHeaderGroups().map((header) => (
            <tr key={header.id}>
              {header.headers.map((column) => (
                <HeaderTable key={column.id}>
                  {flexRender(
                    column.column.columnDef.header,
                    column.getContext()
                  )}
                </HeaderTable>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={s.cell}>
                  {flexRender(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    // Вместо типа ReactNode возвращает unknown
                    cell.getContext().cell.getValue(),
                    cell.getContext()
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
