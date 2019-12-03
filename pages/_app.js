/*
 * @Author: jweboy
 * @Date: 2019-12-03 10:42:52
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-03 13:05:37
 */
import React, { Fragment } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { CssBaseline } from '@material-ui/core';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    console.log('pageProps', pageProps);

    return (
      <Fragment>
        <Head>
          <title>作品展示</title>
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </Fragment>
    );
  }
}

export default  MyApp;
