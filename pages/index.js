import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button, Box, Dialog } from '@material-ui/core'
// import './index.less';

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
    <div>
      <Box>
        <span>background</span>
      </Box>
      <Box position="absolute" bottom="0" display="flex" justifyContent="center" width="100%" paddingTop={1} paddingBottom={1}>
        <Box margin-left={2}>
          <Box marginLeft={1} display="inline">
            <Button className="btn" variant="contained" color="primary" size="large" onClick={handleOpenModal}>我有需求</Button>
          </Box>
          <Box marginLeft={1} display="inline">
            <Link href="/showcase">
              <Button variant="outlined" color="primary" size="large">查看作品</Button>
            </Link>
          </Box>
        </Box>
        {/* <p>备案号</p> */}
      </Box>
      <Dialog open={visible} onBackdropClick={handleCloseModal}>
        <Box padding={2} width={278} height={278}>二维码</Box>
      </Dialog>
      <style global jsx>
        {
          `
          body {
            margin: 0;
            padding: 0;
          }
          `
        }
      </style>
      <style jsx>
        {
          `
          `
        }
      </style>
    </div>
  )
}

export default Home
