import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SkillBar from './SkillBar';

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

export default function CustomizedProgressBars() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SkillBar completionValue={85} name={'Javascript'} />
      <SkillBar completionValue={85} name={'ReactJs'} />
      <SkillBar completionValue={80} name={'NodeJs'} />
      <SkillBar completionValue={70} name={'Angular'} />
      <SkillBar completionValue={75} name={'JQuery'} />
    </div>
  );
}
