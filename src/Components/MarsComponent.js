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
            "https://api.nasa.gov/planetary/apod?api_key=e21GCEXAJL0w8X1OH5hL7ZMOu8U2110NkpBx4bA9"
          )
          .then(res => setPost(res.data))
          .catch(err => console.log(err));
      }, []);



  return (
      <div>
          This is the Mars Exploration
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
  headerPage: {
    display: "flex"
  }
});

export default MarsComponent;
