import { Datagrid, EditButton, List, TextField } from "react-admin";

const userList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <TextField source="company" />

      <EditButton basePath="/users" />
    </Datagrid>
  </List>
);

export default userList;
