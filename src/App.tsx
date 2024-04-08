import { TextField } from "../lib/main";
import { EyeIcon } from "goldex-icon-library";

function App() {
  return (
    <div style={{ padding: 20, background: "#343741", width: 500 }}>
      <TextField
        icon={<EyeIcon width={20} height={20} opacity={0.4} />}
        sizeType="full"
        variant="select"
      />
    </div>
  );
}

export default App;
