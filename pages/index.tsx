import React from 'react';
import { Container, Box, Typography, Divider, makeStyles, Button, Theme } from '@material-ui/core';
import { getLayout as getSiteLayout } from '../src/Layouts/SiteLayout';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import Link from '../src/Link';
import Dropzone from '../src/Dropzone/Dropzone';

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    boxShadow: theme.shadows[12],
    width: '100%',
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    background: `linear-gradient(45deg, ${theme.palette.secondary.light} 30%, #FF8E53 90%)`
  }
}));

const Index = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box my={4}>

        <Typography variant="h4" component="h1" gutterBottom>
          Live RegFileViewer
        </Typography>
        <Link href="/about">
          About this project
        </Link>
        <Divider style={{ margin: "16px 0" }} />
        <Dropzone />
        <Button
          variant="contained"
          color="primary"
          centerRipple
          className={classes.button}
          endIcon={<PlayCircleFilledWhiteIcon />}>
          Start PDF Viewer
        </Button>

      </Box>
    </Container>
  );
};

Index.getLayout = getSiteLayout;

export default Index;
