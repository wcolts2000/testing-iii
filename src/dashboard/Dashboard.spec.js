// Test away!
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  describe("it renders the display and the controls components to the dom", () => {
    it("renders both components", async () => {
      const { getByTestId } = await render(<Dashboard />);
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");
      const locker = getByTestId("locker");
      const opener = getByTestId("opener");

      expect(lock).toHaveClass("green-led");
      expect(gate).toHaveClass("green-led");
      expect(locker).toHaveAttribute("disabled");
      expect(opener).toHaveClass("toggle-btn");
    });
  });
});
