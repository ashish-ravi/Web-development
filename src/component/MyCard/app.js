import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";
import img from "../../codecolab1.gif";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

const MyCard2 = () => {
  const classes = useStyles();

  return (
     
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
       
          style = {{ height: 0, paddingTop: "90%"}}
          className={classes.media}
          image={img}
          title="Code Collab"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Code Collab
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A Real time codecollaborator. Multiple users can test and run code in real-time collaborative environment
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Link to={"/codecollab"}>
            <Button size="small" color="primary">
                Learn More
            </Button>
        </Link>
      </CardActions>
    </Card>
  
  );
}

export default MyCard2;