import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import BrandArea from "../BrandArea";

const TestimonialArea = () => {
  return (
    <div>
      <Box component="section" className={styles.main_area}>
        <Box className={styles.section_title}>
          <Typography component="h2">What Our Customers Says ?</Typography>
        </Box>
        <Box className={styles.single_testimonial}>
          <Box className={styles.icon_img}>
            <Box
              component="img"
              alt="icon"
              src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonials-icon.png"
            />
          </Box>
          <Box className={styles.testimonial_content}>
            <Typography component="p">
              “ When a beautiful design is combined with powerful technology,
            </Typography>
            <Typography component="p">
              it truly is an artwork. I love how my website operates and looks with this theme.
              Thank you for the awesome product. ”
            </Typography>
            <Box
              component="img"
              alt="icon"
              src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonial2.png"
            />
            <Typography component="p" className={styles.testimonial_author}>
              Amber Lama
            </Typography>
          </Box>
        </Box>
        <BrandArea />
      </Box>
    </div>
  );
};

export default TestimonialArea;
