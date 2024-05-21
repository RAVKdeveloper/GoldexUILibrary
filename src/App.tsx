import { MultiSelect, SelectOptions } from "../lib/main";

function App() {
  const options: SelectOptions[] = [
    {
      label: "Test",
      value: "test",
    },
    {
      label: "Test2rkljjrj2ioijo23rjio23",
      value: "testfre",
    },
    {
      label: "Active",
      value: "active",
    },
  ];

  return (
    <div
      className="bg-[#1F1F24] p-10 flex items-center gap-5 flex-wrap lg:flex-nowrap "
      style={{ width: 500 }}
    >
      <MultiSelect options={options} placeholder="Placeholder" />
    </div>
  );
}

export default App;
