import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

export default function Posts() {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
