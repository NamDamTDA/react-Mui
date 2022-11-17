/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { cartTotalPriceSelector } from "../../../features/CartSlice/selectors";
import styles from "./Payment.module.css";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const amount = useSelector(cartTotalPriceSelector);

  const getClientSecret = async () => {
    const { data } = await axios.post(process.env.REACT_APP_SERVER_CREATE_PAYMENT_INTENT_API, {
      amount,
    });
    setClientSecret(data.clientSecret);
    setIsLoading(false);
  };

  const getPublishableKey = async () => {
    const { data } = await axios.get(process.env.REACT_APP_SERVER_CONFIG_API);
    setStripePromise(loadStripe(data.publishableKey));
  };

  useEffect(() => {
    getClientSecret();
    getPublishableKey();
  }, []);

  return (
    <>
      {isLoading && (
        <div className={styles.music_waves}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
