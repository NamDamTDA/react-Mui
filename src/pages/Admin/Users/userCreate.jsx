import { Create, SimpleForm, TextInput } from "react-admin";

const userCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" isRequired fullWidth/>
    </SimpleForm>
  </Create>
);

export default userCreate;
