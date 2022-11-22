import { Grid } from "@mui/material";
import { Edit, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { validateForm } from "./productCreate";

const productEdit = (props) => (
  <Edit {...props}>
    <SimpleForm validate={validateForm}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="name" isRequired fullWidth />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="price" isRequired fullWidth />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="oldPrice" isRequired fullWidth />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="rate" isRequired fullWidth />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="sale" isRequired fullWidth />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <ReferenceInput source="categoryId" reference="categories" isRequired>
            <SelectInput optionText="name" fullWidth />
          </ReferenceInput>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <TextInput source="image" isRequired fullWidth />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export default productEdit;
