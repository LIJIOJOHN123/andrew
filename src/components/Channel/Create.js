import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { createChannel } from "../../redux/action/channel";
import { setAlert } from "../../redux/action/alert";

const CreateChannel = ({ createChannel, setAlert }) => {
  const [open, setOpen] = React.useState(false);
  let [formData, setFromData] = React.useState({
    channel: "",
    channelName: "",
    introduction: "",
    language: "",
    keywords: ""
  });
  const { channel, channelName, introduction, language, keywords } = formData;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    createChannel(formData);
    setOpen(false);
    setAlert("You have successfully created channel!!!");
    setFromData({
      channel: "",
      channelName: "",
      introduction: "",
      language: "",
      keywords: ""
    });
  };

  const handleChange = channel => e => {
    setFromData({ ...formData, [channel]: e.target.value });
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Channel</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={channel}
            onChange={handleChange("channel")}
            label="Name"
            type="email"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={channelName}
            onChange={handleChange("channelName")}
            label="Channel Name"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            label="Language"
            value={language}
            onChange={handleChange("language")}
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={introduction}
            onChange={handleChange("introduction")}
            id="name"
            label="Introduction"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={keywords}
            onChange={handleChange("keywords")}
            id="name"
            label="Keywords"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default connect(null, { createChannel, setAlert })(CreateChannel);
