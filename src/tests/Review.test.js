import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Review from "../components/preview/Review";
import UserContextProvider from "../contexts/UserContext";

// this is testing if the list of reviews in the product page is being generated properly
test("<Review /> renders the correct content", () => {
  const review = {
    rating: 5,
    title: "test review",
    comment: "this is a test review",
    recommend: true,
    user: {
      name: "Zae",
    },
  };

  const component = render(
    <UserContextProvider>
      <Review review={review} />
    </UserContextProvider>
  );

  // check if the rendered Reviews contains the correct content
  expect(component.container).toHaveTextContent("test review");
  expect(component.container).toHaveTextContent("this is a test review");
  expect(component.container).toHaveTextContent("Zae");
  expect(component.container).toHaveTextContent(
    "Yes, I would recommend this to a friend"
  );
});
