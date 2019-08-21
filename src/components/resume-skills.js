import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Rating from 'material-ui-rating'
import { useStaticQuery, graphql } from "gatsby"

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

export default function SimpleList() {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allSkillJson {
        edges {
          node {
            id
            skill
            selfRating
          }
        }
      }
    }
  `)

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">        
        <Typography component="p">
          {data.allSkillJson.edges.map(s => (
            <ListItem button>
              <ListItemText>{s.node.skill}</ListItemText>
              <Rating value={s.node.selfRating} readOnly />
            </ListItem>
          ))}
        </Typography>        
      </List>
    </div>
  );
}