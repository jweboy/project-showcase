/*
 * @Author: jweboy
 * @Date: 2019-12-02 18:26:27
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-03 14:17:24
 */
import React, { useRef, createRef, forwardRef, useEffect } from 'react';
import { Container, Box, CssBaseline, Chip, Grid, Card, CardMedia, CardActionArea, makeStyles, CardContent, Typography, CardActions, Button, RootRef } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
// import QRCodeModal from '../components/qrcode-modal';
import Link from 'next/link';

const useStyles = makeStyles({
  logo: {
    cursor: 'pointer',
  },
  media: {
    height: 140,
  },
});

function Showcase(props) {
  let qrModal = createRef();
  const classes = useStyles(props);

  function handleClick() {
    console.log('click', qrModal);
  }

  function handleTagChange(key) {
    return function onClick() {
      // console.log(key)
    };
  }

  const data = [
    {
      id: 1,
      image: '/miniProgram.png',
      title: '备忘录小程序',
      desc: '用于记录的小程序',
    },
    {
      id: 2,
      image: '/miniProgram.png',
      title: '备忘录小程序',
      desc: '用于记录的小程序',
    },
    {
      id: 3,
      image: '/miniProgram.png',
      title: '备忘录小程序',
      desc: '用于记录的小程序',
    },
    {
      id: 4,
      image: '/miniProgram.png',
      title: '备忘录小程序',
      desc: '用于记录的小程序',
    },
    {
      id: 5,
      image: '/miniProgram.png',
      title: '备忘录小程序',
      desc: '用于记录的小程序',
    },
  ];

  // useEffect(() => {
  //   console.log('showcase', qrModal);
  // }, []);


  return (
    <Container maxWidth="md">
      {/* <Button ref={qrModal}>ssd</Button> */}
      {/* header */}
      <Box display="flex" justifyContent="space-between" paddingTop={1} paddingBottom={1}>
        <Link href="/">
          <Box component="span" className={classes.logo}>logo</Box>
        </Link>
        <Chip label="我有需求" variant="outlined" icon={<FaceIcon />} onClick={handleClick} />
      </Box>
      {/* content */}
      <Box>
        {/* tags */}
        <Box marginBottom={2}>
          <Box component="span" marginRight={1}>
            <Chip label="小程序" color="primary" variant="outlined" onClick={handleTagChange('miniProgram')} />
          </Box>
          <Box component="span" marginRight={1}>
            <Chip label="h5" color="secondary" variant="outlined" onClick={handleTagChange('h5')}/>
          </Box>
        </Box>
        {/* cards */}
        <Grid container spacing={3}>
          {
            data.map((item) => (
              <Grid item xs={3} key={item.id}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={item.image}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">预览</Button>
                </CardActions>
              </Grid>
            ))
          }
        </Grid>
      </Box>
      {/* <QRCodeModal forwardRef={qrModal} /> */}
    </Container>
  );
}

export default Showcase;
