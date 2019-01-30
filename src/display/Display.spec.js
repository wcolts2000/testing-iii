// Test away!
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./Display";

describe("<Display />", () => {
  describe("when component first renders, should be in open and unlocked state", () => {
    it("renders the child divs in unlocked and open state", async () => {
      const { getByTestId } = await render(<Display />);
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");

      expect(lock).toHaveTextContent(/unlocked/i);
      expect(gate).toHaveTextContent(/open/i);
    });
  });
});
