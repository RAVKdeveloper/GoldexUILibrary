import { Table } from "../ui/Table.ui";

import { CellTable, Status } from "../../../../main";
import { UserInvoiceIcon, VisaIcon } from "goldex-icon-library";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Table> = {
  title: "Design System/Entities/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "The cell data, the key in the objects, must be bound (have the same name) to the header accessor. Docs https://react-table-v7-docs.netlify.app/docs/installation",
    },
    columns: {
      description:
        "An array of objects describing, counting, and meaning of headings. The object should look like this:" +
        `  
        <pre> 
        [ 
            { 
                Header: 'Header name', 
                accessor: 'Key header' 
            } 
        ]
        </pre>
        ` +
        "Cells are bound by the value of the key (accessor). ",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 20, background: "#343741" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const InvoicesTable: Story = {
  args: {
    data: [
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
    columns: [
      {
        Header: "ID",
        accessor: "col1",
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
  },
};
