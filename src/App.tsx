import { useState } from "react";
import { MultiSelect, SelectInput } from "../lib/main";

function App() {
  const [test, setTest] = useState<string>("");

  return (
    <div className="bg-[#1F1F24] p-10 flex items-center gap-5 flex-wrap lg:flex-nowrap pt-96">
      <SelectInput
        options={[
          { label: "10", value: "10", id: 1 },
          { label: "100", value: "100", id: 2 },
        ]}
        sizeType="lg"
        onClickOption={(e) => setTest(e.value.toString())}
        active={test}
        placeholder="Test"
        emptyText="Empty :("
      />
      <MultiSelect
        options={[
          { label: "10", value: "10" },
          { label: "100", value: "100" },
        ]}
        onChangeValue={(e) => console.log(e)}
        placeholder="Tetds"
      />
    </div>
  );
}

export default App;
