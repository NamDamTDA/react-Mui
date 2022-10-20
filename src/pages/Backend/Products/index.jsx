/* eslint-disable import/no-anonymous-default-export */
import { CardTravel } from "@mui/icons-material";
import productCreate from "./productCreate";
import productEdit from "./productEdit";
import productList from "./productList";

export default {
  list: productList,
  edit: productEdit,
  create: productCreate,
  icon: CardTravel,
};
