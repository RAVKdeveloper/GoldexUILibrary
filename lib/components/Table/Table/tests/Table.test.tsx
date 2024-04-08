import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Table } from "../ui/Table.ui";

import { CellTable, Status } from "../../../../main";
import { UserInvoiceIcon, VisaIcon } from "goldex-icon-library";

describe("testin Table component", () => {
  const data = [
    {
      col1: <CellTable text="#1011" />,
      col2: (
        <CellTable
          text="Мозолевский Даниил Сергеевич"
          icon={<UserInvoiceIcon width={22} height={22} />}
        />
      ),
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />,
    },
    {
      col1: <CellTable text="#1011" />,
      col2: (
        <CellTable
          text="Мозолевский Даниил Сергеевич"
          icon={<UserInvoiceIcon width={22} height={22} />}
        />
      ),
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />,
    },
    {
      col1: <CellTable text="#1011" />,
      col2: (
        <CellTable
          text="Мозолевский Даниил Сергеевич"
          icon={<UserInvoiceIcon width={22} height={22} />}
        />
      ),
      col3: <CellTable text="#15" />,
      col4: <CellTable text="Mastercard" icon={<VisaIcon />} />,
      col5: <CellTable text="10 ноября 2023, 08:23" />,
      status: <CellTable text={<Status text="Wait" variant="wait" />} />,
      sum: <CellTable text="22 500 RUB" />,
    },
  ];

  const columns = [
    {
      header: "ID",
      accessorKey: "col1",
    },
    {
      header: "Банк клиента",
      accessorKey: "col2",
    },
    {
      header: "ID клиента",
      accessorKey: "col3",
    },
    {
      header: "Метод",
      accessorKey: "col4",
    },
    {
      header: "Дата и время",
      accessorKey: "col5",
    },
    {
      header: "Статус",
      accessorKey: "status",
    },
    {
      header: "Сумма",
      accessorKey: "sum",
    },
  ];

  it("render", () => {
    render(<Table data={data} columns={columns} />);

    const tableComponent = screen.getByTestId("table");

    expect(tableComponent).toBeInTheDocument();
  });
});
