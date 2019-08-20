import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2),
  },
  inline: {
    display: 'inline',
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
}));

export default function ResumeExperience() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
       <Typography variant="h5" component="h3">
          Work Experience
        </Typography>       
      <List>  
        <StaticQuery
          query={graphql`
          query {
            allExperienceJson {
              edges {
                node {
                  id
                  position
                  company
                  duration
                  description
                }
              }
            }
          }
        `}
          render={data => (
            <div>
              {data.allExperienceJson.edges.map(s => (
                 <ListItem alignItems="flex-start">
                 <ListItemAvatar>
                   <Avatar className={classes.greenAvatar}>
                     <AssignmentIcon />
                   </Avatar>
                 </ListItemAvatar>
                 <ListItemText
                   primary={s.node.position}
                   secondary={
                     <React.Fragment>
                       <Typography
                         component="span"
                         variant="body2"
                         className={classes.inline}
                         color="textPrimary"
                         paddingBottom={100}
                       >
                        {s.node.company}                
                     </Typography>
                      - {s.node.duration}
       
                     <Typography 
                         variant="body2"
                         color="textPrimary">
                         {s.node.description}
                     </Typography>
                       
                     </React.Fragment>
                   }
                 />
               </ListItem>
              ))}
            </div>
          )}
        />

      </List>
    </Paper>
  );
}