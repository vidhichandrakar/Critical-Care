import { Typography ,Box} from "@mui/material";
import React from "react";

const Analytics =({})=>{
  return(
    <Box className="analyticsBox">
       <Typography className="anaTypo">India's Most Loved Education Platform</Typography>
       <Typography className="subTypo">With 360 Critcial care, Begin your journey to success</Typography>
       <Box className="analyticsCount">
       <div >
         <p className="calCount">10M+</p>
          <p className="calMsg">Happy Students</p>
       </div>
       <div >
         <p className="calCount">300+</p>
          <p className="calMsg">Video Lectures</p>
       </div>
       <div >
         <p className="calCount">200+</p>
          <p className="calMsg">Mock test</p>
       </div>
       <div >
         <p className="calCount">2500+</p>
          <p className="calMsg">Questions </p>
       </div>
       </Box>
    </Box>
  )
}
export default Analytics;