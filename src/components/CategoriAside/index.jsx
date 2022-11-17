import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { readCategory } from "../../api/category";
import Path from "../../routes/contants";
import styles from "./styles.module.css";

const ListCategoriAside = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const { data } = await readCategory();
    setCategories(data);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <Box>
        <div className={styles.category}>
          <h3>Category</h3>

          <ul className={styles.category_ul}>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`${Path.categoryList}/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </>
  );
};

export default ListCategoriAside;
