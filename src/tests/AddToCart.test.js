import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddToCart from "../components/preview/AddToCart";
import CartContextProvider from "../contexts/CartContext";
import UserContextProvider from "../contexts/UserContext";

test("clicking the AddToCart button calls event handler once", () => {
  const addToCart = jest.fn();

  const component = render(
    <CartContextProvider>
      <UserContextProvider>
        <AddToCart setCompleteOrder={addToCart} />
      </UserContextProvider>
    </CartContextProvider>
  );

  const button = component.container.querySelector("#cart");
  fireEvent.click(button);

  expect(addToCart.mock.calls).toHaveLength(1);
});
