import React from 'react';
import SkillBar from './SkillBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function CustomizedProgressBars() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom align="center">
        Skill set
      </Typography>
      <SkillBar completionValue={85} name={'Javascript'} />
      <SkillBar completionValue={85} name={'ReactJs'} />
      <SkillBar completionValue={80} name={'NodeJs'} />
      <SkillBar completionValue={70} name={'Angular'} />
      <SkillBar completionValue={75} name={'JQuery'} />
    </Container>
  );
}
