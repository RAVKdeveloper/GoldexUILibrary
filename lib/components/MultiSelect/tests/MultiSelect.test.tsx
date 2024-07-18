import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { MultiSelect } from "../index";

describe("testing MultiSelect component", () => {
  const user = userEvent.setup();

  it("render empty options", () => {
    render(
      <MultiSelect
        options={[]}
        onChangeValue={() => {}}
        placeholder="Placeholder"
      />
    );

    const rootComponent = screen.getByTestId("multiSelect");

    expect(rootComponent).toBeInTheDocument();
  });

  it("render with options && click", () => {
    render(
      <MultiSelect
        options={[
          {
            label: "Test",
            value: "Test",
          },
        ]}
        onChangeValue={() => {}}
        placeholder="Placeholder"
      />
    );

    const rootComponent = screen.getByTestId("multiSelect");
    const clickDropdownComponent = screen.getByTestId("click-to-open-dropdown");

    user.click(clickDropdownComponent);

    expect(rootComponent).toBeInTheDocument();
    expect(clickDropdownComponent).toBeInTheDocument();
  });
});
