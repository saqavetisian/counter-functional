// StageA.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import StageA from "@/app/stage-a/page";

describe("Stage A Component", () => {
  test("should display the initial count", () => {
    render(<StageA />);
    expect(screen.getByText(/Count:/).textContent).toBe("Count: 0");
  });

  test("should increment count by 1 when Increment button is clicked", () => {
    render(<StageA />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count:/).textContent).toBe("Count: 1");
  });

  test("should decrement count by 1 when Decrement button is clicked", () => {
    render(<StageA />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count:/).textContent).toBe("Count: -1");
  });

  test("should handle multiple increments and decrements correctly", () => {
    render(<StageA />);
    const incrementButton = screen.getByText("Increment");
    const decrementButton = screen.getByText("Decrement");

    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);

    expect(screen.getByText(/Count:/).textContent).toBe("Count: 1");
  });
});
