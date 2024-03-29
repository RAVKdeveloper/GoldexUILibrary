import { FC } from "react";

import { useTable } from "react-table";

import { HeaderTable } from "../../Header/ui/Header.ui";

import type { TableType } from "../assets/Table.type";

import s from "../assets/style.module.css";

export const Table: FC<TableType> = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useTable({ columns, data });

  return (
    <div className={s.wrapper}>
      <table {...getTableProps()} className={s.root} data-testid="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <HeaderTable {...column.getHeaderProps()}>
                  {column.render("Header")}
                </HeaderTable>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={s.cell}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
