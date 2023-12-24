import { Box, Typography } from "@mui/material";
import React from "react";
import Desicription from "../../Media/Images/description.png"

const PlanDescription =({})=>{
  return(
    <Box className="planMainBox">
    <Box className="planBox">
      <img src={Desicription} className="planImg"/>
    </Box>

    <Box className="planText">
      <Typography className="planTextTypo">Why 360 Critical Care?</Typography>
      <Typography className="planSubTextTypo"> Your One Stop Destination For Success</Typography>
    </Box>
    </Box>
  )
}
export default PlanDescription;