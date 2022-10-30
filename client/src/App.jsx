import { Typography, Container, AppBar, Grow, Grid } from "@mui/material";
import useStyles from "./styles";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useEffect } from "react";

//redux
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme();
  const classes = useStyles();
  //redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar
          style={{ flexDirection: "row" }}
          className={classes.appBar}
          position="static"
          color="inherit"
        >
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>

              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
}

export default App;
