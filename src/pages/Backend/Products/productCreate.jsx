import { Create, SimpleForm, TextInput } from "react-admin";

const productCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="brand" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
);

export default productCreate;
