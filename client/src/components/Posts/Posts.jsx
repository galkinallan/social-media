import React from "react";
import useStyles from "./styles";
import Post from "./Post/Post";

export default function Posts() {
  return (
    <div>
      <h1>POSTS</h1>
      <Post />
      <Post />
      <Post />
    </div>
  );
}
