import { FC, useMemo } from "react";

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import { HeaderTable } from "../../Header/ui/Header.ui";

import { Pagination } from "../../../Pagination/ui/Pagination.ui";

import type { TableWithPaginationType } from "../assets/TableWithPag.type";

import s from "../assets/style.module.css";

export const TableWithPagination: FC<TableWithPaginationType> = ({
  data,
  columns,
  activeLng,
  btnNextText,
  btnPrevText,
}) => {
  const {
    getHeaderGroups,
    getRowModel,
    getState,
    previousPage,
    nextPage,
    getCanNextPage,
    getCanPreviousPage,
  } = useReactTable({
    columns,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const totalPages = useMemo(() => {
    if (Array.isArray(data)) {
      return Math.ceil(Number(data.length) / 10);
    }

    return 1;
  }, [data]);

  return (
    <div className={s.withPagination} data-testid="rootComponent">
      <div className={s.wrapper}>
        <table className={s.root}>
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
      <Pagination
        pages={10}
        currentPage={2}
        textContent={
          activeLng === "en"
            ? `Page ${
                getState().pagination.pageIndex + 1
              } of ${totalPages} pages`
            : `Страница ${getState().pagination.pageIndex + 1} из ${totalPages}`
        }
        next={nextPage}
        back={previousPage}
        btnNext={btnNextText}
        btnPrev={btnPrevText}
        disabledNext={!getCanNextPage()}
        disabledPrev={!getCanPreviousPage()}
      />
    </div>
  );
};
