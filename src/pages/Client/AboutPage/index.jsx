import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import styles from "./styles.module.css";
import chosen from "../../../constants/choseus";
import TestimonialArea from "../../../components/TestimonialArea";
import FAQuestion from "../../../components/FAQ";

const AboutPage = () => {
  return (
    <div>
      <Box className={styles.about_page_area}>
        <Box className={styles.about_section}>
          <Box className={styles.about_thumb}>
            <Box component="img" alt="image" src={link.aboutMain}  />
          </Box>
          <Box className={styles.about_content}>
            <Typography component="h1">
              We Are A Digital Agency Focused On Delivering Content And Utility User-Experiences.
            </Typography>
            <Typography component="p">
              Adipiscing lacus ut elementum, nec duis, tempor litora turpis dapibus. Imperdiet
              cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel
              nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque
              mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent
              lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.
            </Typography>
          </Box>
          <Box className={styles.about_signature}>
            <Box component="img" alt="image" src={link.aboutUsSignature} />
          </Box>
        </Box>
        <Box component="section" className={styles.choseus_area}>
          <Box className={styles.row}>
            {chosen.map(({ title, desc, icon, index }) => (
              <Grid key={index} className={styles.single_chose}>
                <Box className={styles.chose_icone} component="img" alt="Logo-ship" src={icon} />
                <Box className={styles.chose_content}>
                  <Typography component="h3">{title}</Typography>
                  <Typography component="p">{desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Box>
        </Box>
        <FAQuestion />
        <TestimonialArea />
      </Box>
    </div>
  );
};

const link = {
  aboutMain: "https://htmldemo.net/lukani/lukani/assets/img/about/about1.jpg",
  aboutUsSignature: "https://htmldemo.net/lukani/lukani/assets/img/about/about-us-signature.png",
};

export default AboutPage;
