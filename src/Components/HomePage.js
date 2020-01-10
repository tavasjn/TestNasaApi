import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import MarsComponent from "./MarsComponent";
import HeaderComponent from "./HeaderComponent";
import "../App.css";

const HomePage = () => {
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
      <HeaderComponent />
      <div className={classes.headerPage}>
        <div className={classes.dailyImageDiv}>
          <div>Daily Space Img</div>
          <div>{post.title}</div>
          <div className={classes.dailyImage}>
            <img src={post.url} alt="" className={classes.dailyImage} />
          </div>
          <div className={classes.dailyImageInfo}>{post.explanation}</div>
        </div>
        <div className={classes.twitterSpaceFeed}>
          <div>Twitter Feed</div>
          <div>
            <a
              class="twitter-timeline"
              data-width="600"
              data-height="800"
              data-theme="dark"
              href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
            >
              Tweets by NASA
            </a>
          </div>
        </div>
      </div>
      <MarsComponent />
    </div>
  );
};

const useStyles = makeStyles({
  dailyImage: {
    height: "100%",
    width: "75%",
    align: "center",
    marginLeft: "45px"
  },
  dailyImageInfo: {
    width: "55%",
    align: "center",
    color: 'white',
    backgroundColor: 'grey',
    opacity: '0.7'
  },
  dailyImageDiv: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "50%"
  },
  headerPage: {
    display: "flex"
  }
});

export default HomePage;
