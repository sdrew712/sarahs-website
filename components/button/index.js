import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="#ff61d8" href="mc-builds.js"> MC Builds </Button>
      <Button variant="outlined" color="#569cfa" href="creative-writing.js"> Creative Writing </Button>
      <Button variant="outlined" color="#ffcc81" href="music.js"> Music </Button>
      {/* <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#outlined-buttons">
        Link
      </Button> */}
    </div>
  );
}
