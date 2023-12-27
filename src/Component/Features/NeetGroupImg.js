import React, { Fragment } from 'react'
import { Box} from "@mui/material";
import NeetImg from '../../Media/Images/1695704271-result-neet-banner-web (1).jpg'

function NeetGroupImg() {
  return (
    <Fragment>
      <Box className="NeetBox">
        <img src={NeetImg} className="NeetImg" />
      </Box>
    </Fragment>
  )
}

export default NeetGroupImg
