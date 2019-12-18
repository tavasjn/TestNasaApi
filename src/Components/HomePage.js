import React, { useState, useEffect } from "react";
import axios from "axios";
import {makeStyles} from '@material-ui/styles';
// import { nasaApiKey } from "../nasaApiKey";

const HomePage = () => {
  const [post, setPost] = useState({
    title: "",
    url: "",
    explanation: ''
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
  console.log(post);
  console.log(post.title);
  console.log(post.url);

  return (
    <div>
      <div>Daily Space Img</div>
      <div>{post.title}</div>
      <div>
          <img src={post.url} alt='' className={classes.dailyImage}/>
      </div>
      <div>
          {post.explanation}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
    dailyImage: {
        height: '25%',
        width: '25%'
    }
})

export default HomePage;
