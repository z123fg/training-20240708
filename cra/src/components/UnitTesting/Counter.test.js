/*
Unit test
  test one unit of code at a time, it can be a function or a component, should not depend on anything external
Integration test
  test multiple units together, test the interaction betweem them
End to end test (e2e)
  simulate the user interaction with the application, test the entire workflow


BDD (behavior driven development)
  write code first, and then test it

TDD (test driven development)
  write tests first, and then code


Jest 
  test runner

React Testing Library
  render component, interact with virtual DOM


Why do we need to test
  give confidence to your code
  catch bugs early
  reduce risk during refactoring

code coverage: above 90%

mock API requests
  to not pollute db
  to not depend on the server status
  to not cause extra traffic on the server -> cost money
*/

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

// import { add } from "./demo";

// test("should do addition", () => {
//   expect(add(1, 2)).toBe(3);
// });

// beforeAll(()=>{

// })

// beforeEach(()=>{

// })

// afterEach

// afterAll

describe("Counter", () => {
  test("should display an intial value of 0", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Count: 0")).toBeInTheDocument();
  });

  test("should add one to counter by clicking + button", async () => {
    // const user = userEvent.setup();
    // Arrange
    // const mockFunction = jest.fn();
    const { getByText } = render(<Counter />);
    // const { getByText } = render(<Counter onPlus={mockFunction} />);

    // Act

    // Assert
    const plusButton = screen.getByText("+");
    expect(plusButton).toBeInTheDocument();
    await userEvent.click(plusButton);
    // expect(mockFunction).toBeCalledTimes(1);

    expect(getByText("Count: 1")).toBeInTheDocument();
  });
});
