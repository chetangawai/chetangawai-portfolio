import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';

const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('rgb(231, 226, 247)', 0.5)
  },
  bar: {
    borderRadius: 20,
    backgroundColor: 'rgb(231, 226, 247)'
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'center'
  },
  margin: {
    margin: theme.spacing(1),
    height: 30
  }
}));

export default function SkillBar(props) {
  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(() => {
        return props.completionValue;
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={classes.root}>
      <h3>{props.name}</h3>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={completed}
      />
    </div>
  );
}
SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  completionValue: PropTypes.number.isRequired
};
