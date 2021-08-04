import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SignUpForm from "../components/signup/SignUpForm";
import UserContextProvider from "../contexts/UserContext";

describe("When <SignUpForm /> is submitted,", () => {
  const createUser = jest.fn();
  let component;

  beforeEach(() => {
    component = render(
      <UserContextProvider>
        <SignUpForm createUser={createUser} />
      </UserContextProvider>
    );

    // get reference to all inputs in ReviewForm
    const firstnameInput = component.container.querySelector("#firstName");
    const lastNameInput = component.container.querySelector("#lastName");
    const usernameInput = component.container.querySelector("#username");
    const passwordInput = component.container.querySelector("#password");
    const form = component.container.querySelector("form");

    // change the inputs
    fireEvent.change(firstnameInput, {
      target: { value: "Joshua" },
    });
    fireEvent.change(lastNameInput, {
      target: { value: "Valdez" },
    });
    fireEvent.change(usernameInput, {
      target: { value: "joshua" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "joshua" },
    });
    fireEvent.submit(form);
  });

  test("userLogin() is called", () => {
    // check if submitting the form calls the createReview method
    expect(createUser.mock.calls).toHaveLength(1);
  });

  test("credentials are valid", () => {
    // check if the review contains correct content
    expect(createUser.mock.calls[0][0].name).toBe("Joshua");
    expect(createUser.mock.calls[0][0].lastName).toBe("Valdez");
    expect(createUser.mock.calls[0][0].username).toBe("joshua");
    expect(createUser.mock.calls[0][0].password).toBe("joshua");
  });
});
