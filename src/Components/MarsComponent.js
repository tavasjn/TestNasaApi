import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import axios from 'axios';


const MarsComponent = () => {
    const [post, setPost] = useState({
        title: "",
        url: "",
        explanation: ""
      });
      const classes = useStyles();
    
      useEffect(() => {
        axios
          .get(
            "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0"
          )
          .then(res => setPost(res.data))
          .catch(err => console.log(err));
      }, []);

      console.log(post)



  return (
      <div className={classes.mars}>
          MARS
          <div>
              This is the Mars Exploration
          </div>
          <div>
              Mars Rover Photo 
          </div>
          <div>
              Mars Wheater Report
          </div>
      </div>
  );
};

const useStyles = makeStyles({
  mars: {
    height: '100%'
  }
});

export default MarsComponent;
