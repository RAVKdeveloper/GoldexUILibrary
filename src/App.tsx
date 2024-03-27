import { SidebarMobile } from "../lib/main";

function App() {
  return (
    <div style={{ maxWidth: 500, padding: 20 }}>
      <SidebarMobile
        avatarUrl="/3"
        userName="Rie"
        onOpenSidebar={() => confirm("")}
      />
    </div>
  );
}

export default App;
