import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/LocationOn';

export default function MediaCard(props) {
  const useStyles = makeStyles(theme => ({
    media: {
      height: 300,
      width: props.drawerWidth
    },

    wrapIcon: {
      verticalAlign: 'middle',
      display: 'inline-flex'
    }
  }));
  const classes = useStyles();

  return (
    <div style={{ alignItems: 'center' }}>
      <Card className={classes.card} square={true}>
        <CardActionArea>
          <CardMedia
            title="Chetan Gawai"
            image={require('./../images/mypic.jpg')}
            className={classes.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Chetan Gawai
            </Typography>
            <Typography gutterBottom variant="subtitle1">
              Software Engineer | Javascript, ReactJS
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.wrapIcon}
            >
              <EmailIcon /> &nbsp; chetansgawai@gmail.com
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.wrapIcon}
            >
              <LocationIcon /> &nbsp;Bangalore, India
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
