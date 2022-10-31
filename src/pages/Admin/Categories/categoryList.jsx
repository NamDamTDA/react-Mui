import {
  CreateButton,
  Datagrid,
  EditButton,
  ExportButton,
  List,
  TextField,
  TopToolbar,
} from "react-admin";
import LinkToProducts from "./linkToProducts";

const ListActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
);

const categoryList = () => (
  <List actions={<ListActions />}>
    <Datagrid>
      <TextField source="name" />
      <LinkToProducts />
      <EditButton basePath="/categories" />
    </Datagrid>
  </List>
);

export default categoryList;
