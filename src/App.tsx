import { TableWithPagination, CellTable } from "../lib/main";

function App() {
  const columns = [
    {
      header: "Id",
      accessorKey: "id",
    },
    {
      header: "test",
      accessorKey: "test",
    },
    {
      header: "Two",
      accessorKey: "two",
    },
  ];

  const data = [
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test" />,
      two: <CellTable text="Two" />,
    },
    {
      id: <CellTable text="ID" />,
      test: <CellTable text="Test2" />,
      two: <CellTable text="Two3" />,
    },
  ];

  data.length;

  return (
    <div style={{ padding: 20, background: "#343741", maxWidth: 1431 }}>
      <TableWithPagination
        columns={columns}
        data={data}
        activeLng="en"
        btnNextText="Nex"
        btnPrevText="Preev"
      />
    </div>
  );
}

export default App;
