import { RoleDropdown } from "../lib/main";

function App() {
  return (
    <div
      style={{
        padding: 10,
        background: "#1F1F24",
        maxWidth: 300,
        height: 1000,
        position: "relative",
      }}
    >
      <RoleDropdown
        activeTab="dg"
        click={(str: string) => confirm(str)}
        isOpen={true}
        data={[
          "3t4t44",
          "ryrtyrtyrt",
          "rytrytryruy",
          "eryreyryr",
          "teryreyry",
          "tetertery",
          "ettertyery",
          "t",
          "t",
          "dg",
          "et",
          "fs",
          "fegf",
        ]}
      />
    </div>
  );
}

export default App;
