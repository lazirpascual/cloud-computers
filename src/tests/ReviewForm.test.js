import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ReviewForm from "../components/review/ReviewForm";
import ProductContextProvider from "../contexts/ProductContext";

describe("When <ReviewForm /> is submitted,", () => {
  const createReview = jest.fn();
  let component;

  beforeEach(() => {
    component = render(
      <ProductContextProvider>
        <ReviewForm createReview={createReview} />
      </ProductContextProvider>
    );

    // get reference to all inputs in ReviewForm
    const titleInput = component.container.querySelector("#title");
    const commentInput = component.container.querySelector("#comment");
    const form = component.container.querySelector("form");

    // change the inputs
    fireEvent.change(titleInput, {
      target: { value: "Test Review Title" },
    });
    fireEvent.change(commentInput, {
      target: { value: "This is a test review" },
    });
    fireEvent.submit(form);
  });

  test("createReview() is called", () => {
    // check if submitting the form calls the createReview method
    expect(createReview.mock.calls).toHaveLength(1);
  });

  test("review contains correct content", () => {
    // check if the review contains correct content
    expect(createReview.mock.calls[0][0].title).toBe("Test Review Title");
    expect(createReview.mock.calls[0][0].comment).toBe("This is a test review");
  });
});
