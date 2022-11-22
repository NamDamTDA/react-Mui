import { Edit, SimpleForm, TextInput } from "react-admin";

const userEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" fullWidth isRequired/>

    </SimpleForm>
  </Edit>
);

export default userEdit;
