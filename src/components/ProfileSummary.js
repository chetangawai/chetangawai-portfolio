import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';

export default function ProfileSummary(props) {
  const useStyles = makeStyles(() => ({
    media: {
      height: 340,
      width: props.drawerWidth,
      backgroundColor: 'rgb(34, 15, 95)',
      color: 'inherit'
    },
    wrapIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      color: '#BCB8CF'
    },
    cardTextColor: {
      color: '#BCB8CF',
      textDecoration: 'none'
    },
    subtitle: {
      fontSize: '1.10rem'
    },
    cardContent: {
      backgroundColor: 'rgb(34, 15, 95)'
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
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.cardTextColor}
              align="center"
              gutterBottom
            >
              Chetan Gawai
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.cardTextColor + ' ' + classes.subtitle}
              align="center"
            >
              Sr Software Engineer @Saeloun
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.cardTextColor + ' ' + classes.subtitle}
              align="center"
            >
              Javascript | ReactJS | NodeJS
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.wrapIcon + ' ' + classes.subtitle}
              align="center"
            >
              <EmailIcon /> &nbsp;{' '}
              <a
                href="mailto:chetansgawai@gmail.com"
                className={classes.cardTextColor}
              >
                chetansgawai@gmail.com
              </a>
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={classes.wrapIcon + ' ' + classes.subtitle}
              align="center"
            >
              <LocationIcon /> &nbsp;Pune, India
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
ProfileSummary.propTypes = {
  drawerWidth: PropTypes.number.isRequired
};
