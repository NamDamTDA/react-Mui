import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { clear } from "../../../features/CartSlice/cartSlice";
import styles from "./Success.module.css";

const Success = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const statusCheckout = searchParams.get("redirect_status");

  useEffect(() => {
    if (statusCheckout === "succeeded") {
      dispatch(clear());
    }
  }, [statusCheckout, dispatch]);

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
      </div>
    </>
  );
};

export default Success;
