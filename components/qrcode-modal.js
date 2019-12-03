/*
 * @Author: jweboy
 * @Date: 2019-12-03 10:29:08
 * @LastEditors: jweboy
 * @LastEditTime: 2019-12-03 14:13:00
 */
import React, { useState, forwardRef } from 'react';
import { Dialog, Box } from '@material-ui/core';

// const initialVisible = false;

// function QRCodeModal(props, ref) {
//   const [visible, setVisible] = useState(initialVisible);

//   function open() {
//     setVisible(true);
//   }

//   function close() {
//     setVisible(false);
//   }

//   return (

//   );
// }

// export default forwardRef(QRCodeModal);
class QRCodeModal extends React.Component {
  constructor() {
    super();
    this.state = { visible: false };
  }

  open() {
    this.setState({ visible: true });
  }

  close() {
    this.setState({ visible: false });
  }

  render() {
    const { forwardRef } = this.props;
    const { visible } = this.state;

    return (
      <Dialog ref={forwardRef} open={visible} onBackdropClick={this.close}>
        <Box padding={2} width={278} height={278}>二维码</Box>
      </Dialog>
    );
  }
}

export default QRCodeModal;
