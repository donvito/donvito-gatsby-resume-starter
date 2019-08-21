import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ResumeExperience from './resume-experience';
import ResumeSkills from './resume-skills';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SectionResumeExperienceSkills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>        
        <Grid item xs={8}>
          <ResumeExperience />
        </Grid>
        <Grid item xs={4}>
          <ResumeSkills />
        </Grid>

      </Grid>
    </div>
  );
}