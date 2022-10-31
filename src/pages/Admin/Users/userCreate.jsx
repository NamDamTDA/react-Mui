import { Create, SimpleForm, TextInput } from "react-admin";

const userCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="company" />
    </SimpleForm>
  </Create>
);

export default userCreate;
