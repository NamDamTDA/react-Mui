import { Button } from "@mui/material";
import { useRecordContext } from "react-admin";
import { Link } from "react-router-dom";
import { stringify } from "query-string";
import { CardTravel } from "@mui/icons-material";

const LinkToProducts = () => {
  const record = useRecordContext();

  if (!record) return null;

  return (
    <Button
      size="small"
      color="secondary"
      component={Link}
      to={{
        pathname: "/admin/products",
        search: stringify({
          filter: JSON.stringify({ category_id: record.id }),
        }),
      }}
    >
      <CardTravel />
      Products
    </Button>
  );
};

export default LinkToProducts;
