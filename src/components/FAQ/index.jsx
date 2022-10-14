import React from "react";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import styles from "./styles.module.css";
import faquestion from "../../constants/faquestion";

const FAQuestion = () => {
  return (
    <div>
      <Box className={styles.faquestion_area}>
        <Box className={styles.section_title}>
          <Typography component="h2">Frequently Asked Questions</Typography>
        </Box>
        <Box className={styles.row}>
          {faquestion.map(({ name, nameId, title, desc, index }) => (
            <Accordion key={index} className={styles.single_question}>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={name}
                id={nameId}
                className={styles.question_title}
              >
                <Typography component="h3">{title}</Typography>
              </AccordionSummary>
              <AccordionDetails className={styles.question_content}>
                <Typography component="p">{desc}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </div>
  );
};
export default FAQuestion;
