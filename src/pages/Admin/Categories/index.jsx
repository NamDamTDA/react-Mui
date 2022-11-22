/* eslint-disable import/no-anonymous-default-export */
import { Category } from "@mui/icons-material";
import categoryCreate from "./categoryCreate";
import categoryEdit from "./categoryEdit";
import categoryList from "./categoryList";

export default {
  list: categoryList,
  edit: categoryEdit,
  create: categoryCreate,
  icon: Category,
};
