import React from "react";
import { makeStyles } from "@material-ui/styles";

const HeaderComponent = () => {
  const classes = useStyles();

  return(
      <div>
          <div>
              Nasa 
          </div>
      </div>
  );
};

const useStyles = makeStyles({
  headerPage: {
    display: "flex"
  }
});

export default HeaderComponent;
