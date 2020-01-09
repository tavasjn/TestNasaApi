import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/styles";
import MarsComponent from "./MarsComponent";
import HeaderComponent from "./HeaderComponent";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterFollowButton,
//   TwitterHashtagButton,
//   TwitterMentionButton,
//   TwitterTweetEmbed,
//   TwitterMomentShare,
//   TwitterDMButton,
//   TwitterVideoEmbed,
//   TwitterOnAirButton
// } from "react-twitter-embed";

// import { findByLabelText } from "@testing-library/react";
// import { nasaApiKey } from "../nasaApiKey";

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

  // console.log(post);
  // console.log(post.title);
  // console.log(post.url);

  return (
    <div>
      <HeaderComponent />
      <div className={classes.headerPage}>
        <div className={classes.dailyImageDiv}>
          <div>Daily Space Img</div>
          <div>{post.title}</div>
          <div>
            <img src={post.url} alt="" className={classes.dailyImage} />
          </div>
          <div className={classes.dailyImageInfo}>{post.explanation}</div>
        </div>
        <div className={classes.twitterSpaceFeed}>
          <div>Twitter Feed</div>
          <div>
            <a
              class="twitter-timeline"
              data-theme="dark"
              href="https://twitter.com/NASA?ref_src=twsrc%5Etfw"
              className={classes.twitterFeed}
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
    width: "75%"
  },
  dailyImageInfo: {
    width: "50%"
  },
  dailyImageDiv: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    width: "50%",
    backgroundColor: "blue"
  },
  headerPage: {
    display: "flex"
  },
  twitterFeed: {
    height: '100%',
    width: '100%'
  }
});

export default HomePage;
