import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import slider from "../../constants/slider";
import Carousel from "react-material-ui-carousel";

const Banner = () => {
  const defaultSettings = {
    autoPlay: true,
    animation: "fade",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true,
  };
  return (
    <div>
      <Carousel className="BannerSlider" {...defaultSettings}>
        {slider.map((item, key) => {
          return <Project item={item} key={key} />;
        })}
      </Carousel>
    </div>
  );
};
const Project = ({ item }) => {
  return (
    <Box
      component="section"
      className={styles.slider_section}
      sx={{ background: `url(${item.image})` }}
    >
      <Box className={styles.owl_stage_outer}>
        <Box className={styles.single_slider}>
          <Box className={styles.slider_content}>
            <Typography variant="span">{item.content}</Typography>
            <Typography variant="h1">{item.title}</Typography>
            <Typography variant="h1">{item.title2}</Typography>
            <Typography variant="p" className={styles.desc}>
              {item.desc}
            </Typography>
            <br></br>
            <Typography component="a" href="#" target="_blank" rel="noreferrer" variant="button">
              Discover Now
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
