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
      const controls = getByTestId("controls");
      const display = getByTestId("display");
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");
      const locker = getByTestId("locker");
      const opener = getByTestId("opener");

      expect(controls).toBeInTheDocument();
      expect(display).toBeInTheDocument();
      expect(lock).toBeInTheDocument();
      expect(gate).toBeInTheDocument();
      expect(locker).toBeInTheDocument();
      expect(opener).toBeInTheDocument();
    });
  });
});
