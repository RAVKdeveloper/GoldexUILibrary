import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { RoleDropdown } from "../ui/RoleDropdown.ui";

describe("testing RoleDropdown component", () => {
  it("render", () => {
    render(
      <RoleDropdown activeTab="TRAIDER_ADMIN" click={() => {}} isOpen={true} />
    );

    const rootComponent = screen.getByRole("article");

    expect(rootComponent).toBeInTheDocument();
  });
});
