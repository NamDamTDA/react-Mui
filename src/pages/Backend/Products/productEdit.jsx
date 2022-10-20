import { Edit, SimpleForm, TextInput } from "react-admin";

const productEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="brand" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
);

export default productEdit;
