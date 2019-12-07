import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { blue, grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  outsideDiv: {
    width: '80vw',
    position: 'absolute',
    height: '80vh',
    margin: 'auto',
    overflow: 'hidden',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    '@global': {
      '*::-webkit-scrollbar': {
        width: 10,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      },
      '*::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 1px grey',
        borderRadius: 10,
      },
      '*::-webkit-scrollbar-thumb': {
        background: grey[500],
        borderRadius: 10,
        '&:hover': {
          background: grey[700]
        }
      },
    }
  },
  insideDiv: {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'block'
  },
}));

export default function AppScreen(props) {

  const classes = useStyles();

  return (
    <Grid style={{ visibility: props.hidden ? 'hidden' : 'visible' }} className={classes.outsideDiv}>
      <Grid container className={classes.insideDiv} justify={'center'}>
        {props.children}
      </Grid>
    </Grid>
  );
}