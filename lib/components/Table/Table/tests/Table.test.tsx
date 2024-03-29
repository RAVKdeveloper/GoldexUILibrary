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
      Header: "ID",
      accessor: "col1", // accessor is the "key" in the data
    },
    {
      Header: "Банк клиента",
      accessor: "col2",
    },
    {
      Header: "ID клиента",
      accessor: "col3",
    },
    {
      Header: "Метод",
      accessor: "col4",
    },
    {
      Header: "Дата и время",
      accessor: "col5",
    },
    {
      Header: "Статус",
      accessor: "status",
    },
    {
      Header: "Сумма",
      accessor: "sum",
    },
  ];

  it("render", () => {
    render(<Table data={data} columns={columns} />);

    const tableComponent = screen.getByTestId("table");

    expect(tableComponent).toBeInTheDocument();
  });
});
