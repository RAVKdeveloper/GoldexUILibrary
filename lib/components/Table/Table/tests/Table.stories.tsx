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
        "The cell data, the key in the objects, must be bound (have the same name) to the header accessorKey. Docs https://react-table-v7-docs.netlify.app/docs/installation",
    },
    columns: {
      description:
        "An array of objects describing, counting, and meaning of headings. The object should look like this:" +
        `  
        <pre> 
        [ 
            { 
                header: 'header name', 
                accessorKey: 'Key header' 
            } 
        ]
        </pre>
        ` +
        "Cells are bound by the value of the key (accessorKey). ",
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
    ],
  },
};
