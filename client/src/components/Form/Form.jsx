import { TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./Form.css";

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  function handleSubmit() {
    event.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }
  }

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  function updateData(event) {
    const { name, value } = event.target;
    setPostData((prevPostData) => ({
      ...prevPostData,
      [name]: value,
    }));
  }

  function clear() {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  }

  return (
    <Paper className="paper">
      <form
        className="root"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing` : `Creating`} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={updateData}
        />
        <TextField
          sx={{
            mt: 2,
          }}
          className="field"
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={updateData}
        />
        <TextField
          sx={{
            mt: 2,
          }}
          className="field"
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={updateData}
        />
        <TextField
          sx={{
            mt: 2,
          }}
          className="field"
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={updateData}
        />
        <div className="fileInput">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className="buttonSubmit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          sx={{
            mt: 1,
          }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
