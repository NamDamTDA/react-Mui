/* eslint-disable import/no-anonymous-default-export */

import { PeopleAlt } from "@mui/icons-material";
import userCreate from "./userCreate";
import userEdit from "./userEdit";
import userList from "./userList";

export default {
  list: userList,
  edit: userEdit,
  create: userCreate,
  icon: PeopleAlt,
};
