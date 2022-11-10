import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
import { cartTotalPriceSelector } from "../../../features/CartSlice/selectors";

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const amount = useSelector(cartTotalPriceSelector);

  const getClientSecret = async () => {
    const { data } = await axios.post(process.env.REACT_APP_SERVER_CREATE_PAYMENT_INTENT_API, {
      amount,
    });
    setClientSecret(data.clientSecret);
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
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Payment;
