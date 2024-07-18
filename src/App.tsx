import { MultiSelect } from "../lib/main";

function App() {
  return (
    <div className="bg-[#1F1F24] p-10 flex items-center gap-5 flex-wrap lg:flex-nowrap pt-96">
      <MultiSelect
        options={[
          { label: "WORK", value: "WORK" },
          { label: "ACTIVE", value: "ACTIVE" },
        ]}
        placeholder={"dewdew"}
        onChangeValue={(val) => console.log(val)}
      />
    </div>
  );
}

export default App;
