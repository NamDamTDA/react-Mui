import { Box, Grid } from "@mui/material";
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";

export const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "ra.validation.required";
  }
  if (!values.price) {
    errors.price = "ra.validation.required";
  }
  if (!values.oldPrice) {
    errors.oldPrice = "ra.validation.required";
  }
  if (!values.rate) {
    errors.rate = "ra.validation.required";
  }
  if (!values.sale) {
    errors.sale = "ra.validation.required";
  }
  if (!values.categoryId) {
    errors.categoryId = "ra.validation.required";
  }
  if (!values.image) {
    errors.image = "ra.validation.required";
  }

  return errors;
};
const productCreate = (props) => (
  <Box sx={{ flexGrow: 1 }}>
    <Create {...props}>
      <SimpleForm validate={validateForm} defaultValues={{ image: "https://picsum.photos/250" }}>
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
    </Create>
  </Box>
);

export default productCreate;
