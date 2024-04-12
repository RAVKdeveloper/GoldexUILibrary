import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { TableWithPagination } from "../ui/TableWithPagination.ui";

describe("testing TableWithPagination component", () => {
  it("render && clicks", () => {
    const props = {
      columns: [
        {
          accessorKey: "id",
          header: "Id",
        },
      ],
      data: [
        {
          id: "Test",
        },
      ],
      activeLng: "en",
      btnNextText: "Nex",
      btnPrevText: "Preev",
    };

    render(<TableWithPagination {...props} />);

    const rootComponent = screen.getByTestId("rootComponent");

    expect(rootComponent).toBeInTheDocument();
  });
});
