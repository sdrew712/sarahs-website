import React from 'react';
import MUIButton from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

export default function Button(props) {
  const theme = useTheme();
  const tertiaryPalette = theme.palette.tertiary.main

  const styles = {}
  if (props.color == "tertiary"){
    if (props.variant == "outlined"){
      styles.color = tertiaryPalette
      styles.borderColor = tertiaryPalette  
    } 
    else if (props.variant == "contained"){
      styles.backgroundColor = tertiaryPalette
    }
    else {
      styles.color = tertiaryPalette
    }
  }

  return (
    <MUIButton {...props} style={styles}> {props.text} </MUIButton>
  );
}
