import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ProfileModal } from "../..";

describe("testing ProfileModal component", () => {
  it("render", () => {
    const user = userEvent.setup();

    render(
      <ProfileModal
        cbPropLanguage={() => confirm("lang")}
        cbPropSupport={() => confirm("support")}
        cbPropTheme={() => confirm("theme")}
        cbPropLogout={() => confirm("logour")}
        isDarkMode={true}
        textLng="Language"
        textSupport="Support"
        textTheme="Theme"
        textLogOut="Log out"
        activeLng="en"
        changeLng={(lng: string) => [lng]}
        isOpenMainModal={true}
      />
    );

    const modal = screen.getByTestId("modal");
    const lngProp = screen.getByText(/Language/i);
    const supportProp = screen.getByText(/Support/i);
    const themeProp = screen.getByText(/Theme/i);
    const logOutProp = screen.getByText(/Log out/i);

    user.click(lngProp);
    user.click(supportProp);
    user.click(themeProp);
    user.click(logOutProp);

    expect(modal).toBeInTheDocument();
  });
});
