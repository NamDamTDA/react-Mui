import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./styles.module.css";
import BrandArea from "../../../components/BrandArea";
import { BusinessOutlined, EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <div>
      <Box className={styles.contact_page_area}>
        <Box className={styles.contact_section}>
          <Box className={styles.section_title}>
            <Typography component="h4">Contact Us</Typography>
          </Box>
          <Box className={styles.contact_map}>
            <Box className={styles.map_title}>
              <Typography component="h2">Where we are?</Typography>
            </Box>
            <iframe
              title="map"
              src={link.mapGoogleFrame}
              width="80%"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
          <Box className={styles.contact_area}>
            <Box className={styles.contact_left}>
              <Box className={styles.contact_message}>
                <Typography component="h3">contact us</Typography>
                <Typography component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat natus
                  eos ipsum esse nulla tempore minima fugiat laudantium aut. Voluptatum neque ipsam
                  rerum inventore id dolorem, odit illum quam.
                </Typography>
                <Box className={styles.contact_list}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <BusinessOutlined />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Address"
                        secondary="No 40 Baria Vungtau 133/2 NewYork City"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <EmailOutlined />
                      </ListItemAvatar>
                      <ListItemText primary="Email" secondary="abcdef@fake.com"/>
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <LocalPhoneOutlined />
                      </ListItemAvatar>
                      <ListItemText primary="Phone" secondary="0123456789"/>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Box>
            <Box className={styles.contact_right}>
              <Typography component="h3">Tell us your project</Typography>
              <Box component="form" noValidate autoComplete='on' className={styles.contact_form}>
                <TextField id="name" color="secondary" label="Name*" variant="outlined" />
                <TextField id="email" color="secondary" type='email' label="Email*" variant="outlined" />
                <TextField id="subject" color="secondary" label="Subjects*" variant="outlined" />
                <TextField id="message" color="secondary" label="Message*" variant="outlined" className={styles.contact_textarea}/>
                <Button>Send</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <BrandArea />
      </Box>
    </div>
  );
};
const link = {
  mapGoogleFrame: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.109945726974!2d105.7718879417724!3d21.027133842426103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c7dce37431%3A0x7a3e01807c4a08f0!2zTmdoxKlhIHRyYW5nIE1haSBE4buLY2g!5e0!3m2!1svi!2s!4v1665650693286!5m2!1svi!2s"
}
export default ContactUs;
