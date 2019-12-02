import React, { useState, forwardRef } from 'react'
import { Dialog, Box } from '@material-ui/core'

const initialVisible = false;

function QRCodeModal(props, ref) {
  const [visible, setVisible] = useState(initialVisible);

  function open() {
    setVisible(true);
  }

  function close() { 
    setVisible(false);
  }

  console.log(props, ref)

  return (
    <Dialog ref={ref} open={visible} onBackdropClick={close}>
      <Box padding={2} width={278} height={278}>二维码</Box>
    </Dialog>
  )
}

export default forwardRef(QRCodeModal);
