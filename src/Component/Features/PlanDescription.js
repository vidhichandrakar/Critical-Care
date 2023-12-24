import { Box, Typography } from "@mui/material";
import React from "react";
import Desicription from "../../Media/Images/description.png";
import Live from "../../Media/Images/Live Scheduled Lectures.svg";
import dotOne from "../../Media/Images/dotted-line-1.svg";
import dotTwo from "../../Media/Images/dotted-line-2.svg"

const PlanDescription = ({ }) => {
  return (
    <Box className="planMainBox">
      <Box className="planBox">
        <img src={Desicription} className="planImg" />
      </Box>

      <Box className="planText">
        <Typography className="planTextTypo">Why 360 Critical Care?</Typography>
        <Typography className="planSubTextTypo"> Your One Stop Destination For Success</Typography>
      </Box>

      <Box className="planMainBox">
        <Box class="liveBox">
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          <Box className="liveScnd">
            <Typography className="liveText">Live / Scheduled Lectures</Typography>
            <Typography className="liveTextScnd">Learning is an important step for achieving dreams in a student's
              journey. We encourage the student to explore the concept in depth
              instead of memorizing. The live lectures help us in learning the
              needs of the students and motivates the students to be creative
              and be passionate learners.</Typography>
          </Box>
        </Box>
        <Box className="dotLine">
          <img src={dotOne} className="dotLineImg"/>
        </Box>
      </Box>
      
      

      <Box >
        <Box class="liveBox">

        <Box className="liveScnd">
            <Typography className="liveText">Live / Scheduled Lectures</Typography>
            <Typography className="liveTextScnd">Learning is an important step for achieving dreams in a student's
              journey. We encourage the student to explore the concept in depth
              instead of memorizing. The live lectures help us in learning the
              needs of the students and motivates the students to be creative
              and be passionate learners.</Typography>
          </Box>
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          
        </Box>
        <Box className="dotLine">
          <img src={dotTwo} className="dotLineImg"/>
        </Box>
      </Box>
      
      <Box >
        <Box class="liveBox">

      
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          <Box className="liveScnd">
            <Typography className="liveText">Live / Scheduled Lectures</Typography>
            <Typography className="liveTextScnd">Learning is an important step for achieving dreams in a student's
              journey. We encourage the student to explore the concept in depth
              instead of memorizing. The live lectures help us in learning the
              needs of the students and motivates the students to be creative
              and be passionate learners.</Typography>
          </Box>
        </Box>
        <Box className="dotLine">
          <img src={dotOne} className="dotLineImg"/>
        </Box>
      </Box>


      <Box >
        <Box class="liveBox">

        <Box className="liveScnd">
            <Typography className="liveText">Live / Scheduled Lectures</Typography>
            <Typography className="liveTextScnd">Learning is an important step for achieving dreams in a student's
              journey. We encourage the student to explore the concept in depth
              instead of memorizing. The live lectures help us in learning the
              needs of the students and motivates the students to be creative
              and be passionate learners.</Typography>
          </Box>
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          
        </Box>
      
      </Box>
    </Box>
  )
}
export default PlanDescription;