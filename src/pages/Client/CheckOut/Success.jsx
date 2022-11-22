import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { clear } from "../../../features/CartSlice/cartSlice";
import styles from "./Success.module.css";

const Success = () => {
  const [count, setCount] = useState(20);
  const carts = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const statusCheckout = searchParams.get("redirect_status");

  useEffect(() => {
    if (statusCheckout === "succeeded" && count === 0) {
      dispatch(clear());
    }
  }, [statusCheckout, dispatch, count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (count === 0) {
    navigate("/");
  }

  return (
    <>
      <div className={styles.success}>
        <div className={styles.wrapper}>
          <div className={styles.header_wrapper}>
            <div className={styles.header}>
              <div className={styles.sign}>
                <span></span>
              </div>
            </div>
          </div>
          <h1>Success!</h1>
          <p>Everything works fine!</p>
          <p>You will come back to Home page on</p>
          <span>{count}</span>
        </div>
        <div className={styles.order_table}>
          <p>Your order here:</p>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((product) => (
                <tr key={product.id}>
                  <td>
                    {product.name} <span>x {product.quantity}</span>
                  </td>
                  <td>
                    <img src={product.image} alt="img" width="100px" />
                  </td>
                  <td>$ {product.price * product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Success;
