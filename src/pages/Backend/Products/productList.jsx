import {
  CreateButton,
  Datagrid,
  EditButton,
  ExportButton,
  ImageField,
  List,
  TextField,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <TopToolbar>
    {/* <FilterButton /> */}
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const productList = () => (
  <List actions={<ListActions />}>
    <Datagrid>
      <TextField source="name" />
      <ImageField source="image" sx={{ "& img": { minWidth: 250, minHeight: 250 } }} />
      <TextField source="oldPrice" />
      <TextField source="price" />
      <TextField source="rate" />
      <TextField source="category_id" />

      <EditButton basePath="/products" />
    </Datagrid>
  </List>
);

export default productList;
