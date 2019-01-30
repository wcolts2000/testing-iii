// Test away!
import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Controls from "./Controls";

describe("<Controls />", () => {
  describe("it renders buttons text according to props passed", () => {
    it("has text content of 'Close Gate' 'Lock Gate' when not passed attributes of locked and closed", async () => {
      const { getByTestId } = await render(<Controls />);
      const locker = getByTestId("locker");
      const opener = getByTestId("opener");

      expect(locker).toHaveTextContent("Lock Gate");
      expect(opener).toHaveTextContent("Close Gate");
    });
    it("has text content of 'Open Gate' 'Unlock Gate' when passed attributes of locked and closed", async () => {
      const { getByTestId, debug } = await render(
        <Controls locked={true} closed={true} />
      );

      const locker = getByTestId("locker");
      const opener = getByTestId("opener");
      debug();
      expect(locker).toHaveTextContent("Unlock Gate");
      expect(opener).toHaveTextContent("Open Gate");
    });
  });
  describe("it should disable buttons appropriately according to props passed", () => {
    it("should disable the locked toggle button if the gate is open", async () => {
      const { getByTestId } = await render(<Controls />);
      const locker = getByTestId("locker");
      expect(locker).toHaveAttribute("disabled");
    });
    it("should disable the closed toggle button if the gate is locked", async () => {
      const { getByTestId } = await render(<Controls locked={true} />);
      const opener = getByTestId("opener");
      expect(opener).toHaveAttribute("disabled");
    });
  });
});
