import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function ResumeSummary() {
  const classes = useStyles();

  return (

    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Career Summary
        </Typography>
        <br />
  
      <StaticQuery
        query={graphql`
          query {
            allSummaryJson {
              edges {
                node {
                  id
                  summary
                }
              }
            }
          }
        `}
        render={data => (          
           <Typography component="p">
           {data.allSummaryJson.edges.map(s => (
              <div key={s.node.id} style={{paddingTop: 22}}>
                {s.node.summary}                
              </div>
            ))}
           </Typography>
        )}
      />

      </Paper>

    </div>
  );
}

