import {
  CreateButton,
  Datagrid,
  EditButton,
  ExportButton,
  ImageField,
  List,
  ReferenceField,
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
      <ImageField source="image" sx={{ "& img": { minWidth: 150, minHeight: 150 } }} />
      <TextField source="oldPrice" />
      <TextField source="price" />
      <TextField source="rate" />
      <TextField source="sale" />
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <EditButton basePath="/products" />
    </Datagrid>
  </List>
);

export default productList;
