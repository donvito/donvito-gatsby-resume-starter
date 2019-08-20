import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ResumeSummary from './resume-summary';
import ResumeContact from './resume-contact';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function SectionResumeSummaryContact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>             
        <Grid item xs={8}>
          <ResumeSummary />
        </Grid>
        <Grid item xs={4}>
          <ResumeContact />
        </Grid>
      </Grid>
    </div>
  );
}