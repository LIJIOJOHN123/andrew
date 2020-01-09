import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab, Box, Typography } from "@material-ui/core";
import GuestArticles from "./Articles/Articles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  bold: {
    fontWeight: 1000,
    color: "black"
  }
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.bold} label="Latest" />
        <Tab className={classes.bold} label="India" />
        <Tab className={classes.bold} label="World" />
        <Tab className={classes.bold} label="Business" />
        <Tab className={classes.bold} label="Technology" />
        <Tab className={classes.bold} label="Entertainment" />
        <Tab className={classes.bold} label="Sports" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <GuestArticles />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GuestArticles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <GuestArticles />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GuestArticles />
      </TabPanel>
    </Paper>
  );
}
