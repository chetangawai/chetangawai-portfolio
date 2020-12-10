import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { List, ListItem, Link, Typography } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(() => ({
  noLine: {
    textDecoration: 'none',
    color: 'rgb(34, 15, 95)'
  },
  root: {
    fontSize: '1.5rem',
    padding: '20px',
    background: '#f1f2f2'
  }
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" style={{ alignItems: 'center' }}>
      <Typography variant="h3" gutterBottom align="center">
        Blogs
      </Typography>
      <Typography variant="h5" gutterBottom align="center">
        I write blogs whenever I get some free time. I have written few blogs on
        Rails, Javascript and ReactJs.
      </Typography>

      <List style={{ alignItems: 'center' }} dense>
        <ListItem component="button" divider className={classes.root}>
          <Link href="https://blog.bigbinary.com/2020/09/29/react-17-delegates-events-to-root-instead-of-document.html">
            <ArrowForwardIosIcon /> React 17 delegates events to root instead of
            document
          </Link>
        </ListItem>
        <ListItem component="button" divider className={classes.root}>
          <Link href="https://blog.bigbinary.com/2020/09/22/rails-6-1-deprecates-rails-db-structure-dump.html">
            <ArrowForwardIosIcon /> Rails 6.1 deprecates rails db:structure:dump
            and rails db:structure:load
          </Link>
        </ListItem>
        <ListItem component="button" divider className={classes.root}>
          <Link href="https://blog.bigbinary.com/2020/11/17/rails-6-1-adds-values_at-attribute-method-for-active-record.html">
            <ArrowForwardIosIcon /> Rails 6.1 adds values_at attribute method
            for Active Record
          </Link>
        </ListItem>
        <ListItem component="button" divider className={classes.root}>
          <Link href="https://blog.bigbinary.com/2020/09/01/rails-6-add-timezone-support-in-active-job.html">
            <ArrowForwardIosIcon /> Rails 6 adds support to persist timezones of
            Active Job
          </Link>
        </ListItem>
        <ListItem component="button" className={classes.root}>
          <Link href="https://medium.com/@chetansgawai/optional-chaining-a-new-feature-in-es2020-es11-f38b872895a6">
            <ArrowForwardIosIcon /> ES11 - Optional chaining
          </Link>
        </ListItem>
      </List>
    </Container>
  );
}
