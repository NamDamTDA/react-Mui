const Path = {
  //user
  login: "/login",
  signUp: "/signup",
  resetPassword: "/reset",
  userDetail: "/user",
  //main page
  home: "/",
  about: "/about",
  contact: "/contact",
  news: "/news",
  //products
  categoryList: "/category",
  categoryDetail: "/category/:id",
  productList: "/products",
  productDetail: ":id",
  cart: "/cart",
  checkOut: "/checkout",
  payment: "/payment",
  success: "/success",
  //admin
  admin: "/admin/*",
};
export default Path;
