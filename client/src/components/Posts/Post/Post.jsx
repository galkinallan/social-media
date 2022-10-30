import React from "react";
import useStyles from "./styles";
//redux
import { useSelector } from "react-redux";

export default function Post() {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);
  return <h1>Post</h1>;
}
