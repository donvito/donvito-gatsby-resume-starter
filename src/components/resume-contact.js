import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import { StaticQuery, graphql } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function ResumeContact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>      
      <List>
      <StaticQuery
        query={graphql`
          query {
            allContactJson {
              edges {
                node {
                  id
                  type
                  value
                }
              }
            }
          }
        `}
        render={data => (          
           <Typography component="p">
           {data.allContactJson.edges.map(s => (
               <ListItem button>
               <ListItemText>{s.node.type}</ListItemText>
               <Typography component="span"
                 variant="caption"      
                 color="textPrimary">{s.node.value}</Typography>
             </ListItem>
            ))}
           </Typography>
        )}
      />
      </List>

    </div>
  );
}