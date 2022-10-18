import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartTotalPriceSelector } from "../../features/CartSlice/selectors";
import { clear, decrement, deleteItem, increament } from "../../features/CartSlice/cartSlice";
import { DeleteOutline } from "@mui/icons-material";
import { toggle } from "../../features/CartSlice/uiSlice";
import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const cart = useSelector((state) => state.cart);
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const totalPrice = useSelector(cartTotalPriceSelector);

  return (
    <>
      <CartContainer visible={ui.cartDrawerVisible}>
        {cart.length > 0 ? (
          <CartClearButton
            onClick={() => {
              dispatch(clear());
            }}
          >
            Clear All
          </CartClearButton>
        ) : (
          <EmptyCart>Empty Cart</EmptyCart>
        )}
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id}>
            <CartProductImage src={cartItem.image} alt={cartItem.name} />
            <div>
              <CartProductTitle>{cartItem.name}</CartProductTitle>
              <CartProductSubtotal>
                Total: {cartItem.quantity * cartItem.price} $
              </CartProductSubtotal>
              <CartProductAction>
                <ActionButton
                  onClick={() => {
                    dispatch(deleteItem(cartItem.id));
                  }}
                >
                  <DeleteOutline />
                </ActionButton>
                <ActionButton
                  disabled={cartItem.quantity === 1}
                  onClick={() => {
                    dispatch(decrement(cartItem.id));
                  }}
                >
                  -
                </ActionButton>
                <CartProductQuantity>{cartItem.quantity}</CartProductQuantity>
                <ActionButton
                  onClick={() => {
                    dispatch(increament(cartItem.id));
                  }}
                >
                  +
                </ActionButton>
              </CartProductAction>
            </div>
          </CartItem>
        ))}
        {totalPrice > 0 && (
          <Box>
            <CartTotal>Totals: {totalPrice}$</CartTotal>
            <CheckoutButton>
              <Link to="/cart">View Cart</Link>
            </CheckoutButton>
          </Box>
        )}
      </CartContainer>
      {ui.cartDrawerVisible && (
        <Mask
          onClick={() => {
            dispatch(toggle());
          }}
        />
      )}
    </>
  );
};

const fade = keyframes`
  from {
    opacity:0
  }
  to {
    opacity:1
  }
`;
const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 600px;
  height: 100vh;
  padding: 60px 12px 0;
  background: #fff;
  overflow: auto;
  transition: transform 0.2s ease-in-out;
  transform: translateX(${(p) => (p.visible ? 0 : "600px")});
`;
const Button = styled.button`
  padding: 10px 12px;
  color: #fff;
  background-color: #79a206;
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f25807;
  }
`;
const CartClearButton = styled(Button)`
  width: 100%;
  margin: 26px 0;
`;
const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px 0;
  border-bottom: 1px solid #ededed;
`;
const CartProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 8px;
  border: 1px solid #f6f6f6;
`;
const CartProductTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
  margin-left: 30px;
`;
const CartProductAction = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 50px 40px;
  grid-template-rows: 50px;
  align-items: center;
  padding: 8px 0 0;
  text-align: center;
  margin-left: 30px;
`;
const CartProductSubtotal = styled.div`
  margin-top: 4px;
  color: #666;
  margin-left: 30px;
`;
const ActionButton = styled(Button)`
  padding: 0;
  width: 40px;
  height: 40px;
  color: #222;
  background: #fff;
  border: 1px solid #efefef;
  opacity: ${(p) => (p.disabled ? 0.4 : 1)};
  pointer-events: ${(p) => (p.disabled ? "none" : "unset")};

  &:hover {
    background: #efefef;
  }
`;
const CartProductQuantity = styled.div`
  height: 30px;
  line-height: 30px;
`;
const CartTotal = styled.div`
  padding: 16px 0;
  font-size: 20px;
  text-align: right;
  color: #79a206;
`;
const Mask = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.75);
  animation: ${fade} 0.2s ease-in-out;
`;
const CheckoutButton = styled(Button)`
  padding: 0;
  width: 100%;
  height: 40px;
  &:hover {
    background: #222;
  }
  a {
    color: #fff;
    width: 100%;
  }
`;
const EmptyCart = styled.div`
  padding: 16px;
  color: #888;
  text-align: center;
`;

export default CartDrawer;
