import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getDistrict, getProvince, getWards } from "../../../api/address";
import { cartTotalPriceSelector } from "../../../features/CartSlice/selectors";
import styles from "./styles.module.css";
const validEmail = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const validPhone = new RegExp(/(84|0[3|5|7|8|9])+([0-9]{8})\b/);

const Checkout = () => {
  const carts = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const totalPrice = useSelector(cartTotalPriceSelector);
  let shippingPrice = 20;
  if (totalPrice === 0 || totalPrice > 2000) {
    shippingPrice = 0;
  }
  const onChangeProvince = async (e) => {
    const data = await getDistrict(e.target.value);
    setDistricts(data);
  };

  const onChangeDistrict = async (e) => {
    const data = await getWards(e.target.value);
    setWards(data);
  };

  const onSubmit = () => navigate("/payment");

  const listProvinces = async () => {
    const data = await getProvince();
    setProvinces(data);
  };

  useEffect(() => {
    listProvinces();
  }, []);

  return (
    <>
      <div className={styles.section_title}>
        <h4>Checkout</h4>
      </div>
      <div className={styles.checkout_form}>
        <div className={styles.infor_order}>
          <div className={styles.billing_detail}>
            <h3>Billing Details</h3>
            <form autoComplete="off" id="form-infor" onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form_group}>
                <label htmlFor="">
                  Full Name<span>*</span>
                </label>
                <input
                  autoComplete="name"
                  {...register("name", { required: "Please enter the name" })}
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="">
                  Email<span>*</span>
                </label>
                <input
                  autoComplete="email"
                  {...register("email", {
                    required: "Please enter the email",
                    pattern: {
                      value: validEmail,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              </div>
              <div className={styles.form_group}>
                <select
                  {...register("province", {
                    required: "Please select the province",
                    onChange: (e) => onChangeProvince(e),
                  })}
                >
                  <option value="">Select Province</option>
                  {provinces?.map((province) => (
                    <option key={province.province_id} value={province.province_id}>
                      {province.province_name}
                    </option>
                  ))}
                </select>

                {errors.province && <span className={styles.error}>{errors.province.message}</span>}
              </div>
              <div className={styles.form_group}>
                <select
                  {...register("district", {
                    required: "Please select the district",
                    onChange: (e) => onChangeDistrict(e),
                  })}
                >
                  <option value="">Select District</option>
                  {districts?.map((district) => (
                    <option value={district.district_id} key={district.district_id}>
                      {district.district_name}
                    </option>
                  ))}
                </select>
                {errors.district && <span className={styles.error}>{errors.district.message}</span>}
              </div>
              <div className={styles.form_group}>
                <select
                  {...register("ward", {
                    required: "Please select the ward",
                  })}
                >
                  <option value="">Select Ward</option>
                  {wards?.map((ward, i) => (
                    <option key={ward.ward_id}>{ward.ward_name}</option>
                  ))}
                </select>
                {errors.ward && <span className={styles.error}>{errors.ward.message}</span>}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="">
                  Phone<span>*</span>
                </label>
                <input
                  autoComplete="tel"
                  {...register("phone", {
                    required: "Please enter the phone number",
                    pattern: {
                      value: validPhone,
                      message: "Please enter a valid phone",
                    },
                  })}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
              </div>
              <div className={styles.form_group}>
                <label htmlFor="">Order Notes</label>
                <input />
              </div>
            </form>
          </div>
          <div className={styles.detail_order}>
            <h3>Your Order</h3>
            <div className={styles.order_table}>
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((product) => (
                    <tr key={product.id}>
                      <td>
                        {product.name} <span>x {product.quantity}</span>
                      </td>
                      <td>$ {product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>$ {totalPrice}</td>
                  </tr>
                  <tr>
                    <td>Shipping Price</td>
                    <td>$ {shippingPrice}</td>
                  </tr>
                  <tr>
                    <td>Order Total</td>
                    <td>$ {totalPrice + shippingPrice}</td>
                  </tr>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
            <button form="form-infor" type="submit" className={styles.button_order}>
              place order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
