/*
 * @Author: jweboy
 * @Date: 2019-12-03 10:29:08
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-03 12:01:04
 */
import React, { useState, Fragment } from 'react';
import Link from 'next/link';
import { Button, Box, Dialog } from '@material-ui/core';

// http://www.limijiaoyin.com/#/
// https://nextjs.org/

const initialVisible = false;

function Home() {
  const [visible, setVisible] = useState(initialVisible);

  function handleOpenModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }

  return (
    <Fragment>
      <Box>
        <span>background</span>
      </Box>
      <Box position="absolute" bottom="0" display="flex" alignItems="center" width="100%" flexDirection="column" paddingTop={2} paddingBottom={2}>
        <Box width="100%" textAlign="center" marginBottom={1}>
          <Box marginLeft={1} display="inline">
            <Button className="btn" variant="contained" color="primary" size="large" onClick={handleOpenModal}>我有需求</Button>
          </Box>
          <Box marginLeft={1} display="inline">
            <Link href="/showcase">
              <Button variant="outlined" color="primary" size="large">查看作品</Button>
            </Link>
          </Box>
        </Box>
        <Box>备案号XXXXX</Box>
      </Box>
      <Dialog open={visible} onBackdropClick={handleCloseModal}>
        <Box padding={2} width={278} height={278}>二维码</Box>
      </Dialog>
    </Fragment>
  );
}

export default Home;
