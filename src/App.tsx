import React from "react";

import { Table, CellTable, Status, Pagination } from "../lib/main";
import { UserInvoiceIcon, VisaIcon } from "goldex-icon-library";

function App() {
  const data = React.useMemo(
    () => [
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
    ],
    []
  );

  const columns = React.useMemo(
    () => [
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
    ],
    []
  );

  return (
    <div style={{ padding: 20, background: "#343741" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* <div style={{ display: "block" }}> */}
        <Table data={data} columns={columns} />
        <Pagination
          currentPage={1}
          pages={10}
          btnNext="Next"
          btnPrev="Prev"
          next={() => {}}
          back={() => {}}
          textContent="Page 1 of 10 pages"
        />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
