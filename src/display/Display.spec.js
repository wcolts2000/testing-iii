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
  describe("the gate cant be opened or closed when the lock is active", () => {
    it("gate has a class of green-led when the lock is locked", async () => {
      const { getByTestId } = await render(<Display locked="true" />);
      const gate = getByTestId("gate");

      expect(gate).toHaveClass("green-led");
    });
  });
  describe("the gate cant be locked when it is open", () => {
    it("lock has a class of green-led when the gate is open", async () => {
      const { getByTestId } = await render(<Display closed="false" />);
      const lock = getByTestId("lock");

      expect(lock).toHaveClass("green-led");
    });
  });
  describe("uses red-led appropriately", () => {
    it("uses the class red-led on the locked or closed states", async () => {
      const { getByTestId } = await render(
        <Display closed={true} locked={true} />
      );
      const lock = getByTestId("lock");
      const gate = getByTestId("gate");

      expect(lock).toHaveClass("red-led");
      expect(gate).toHaveClass("red-led");
    });
  });
});
