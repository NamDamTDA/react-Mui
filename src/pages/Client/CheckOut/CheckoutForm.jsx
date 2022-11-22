import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import toastr from "toastr";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        //return_url: process.env.REACT_APP_STRIPE_CART_PAGE,
        return_url: "http://localhost:3000/success",
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      toastr.error(error.message);
    } else {
      toastr.error(error.message);
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className={styles.section_title}>
        <h4>Payment</h4>
      </div>
      <form id="payment-form" onSubmit={handleSubmit} className={styles.payment_form}>
        <PaymentElement id="payment-element" />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className={styles.button_checkout}
        >
          <span id="button-text">
            {isLoading ? <div className={styles.spinner} id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
    </>
  );
};

export default CheckoutForm;
