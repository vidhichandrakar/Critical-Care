import { Box, Typography } from "@mui/material";
import React from "react";
import Desicription from "../../Media/Images/description.png";
import Live from "../../Media/Images/Live Scheduled Lectures.svg";
import dotOne from "../../Media/Images/dotted-line-1.svg";
import dotTwo from "../../Media/Images/dotted-line-2.svg";

const PlanDescription = ({}) => {
  return (
    <Box className="planMainBox">
      <Box className="planBox">
        <img src={Desicription} className="planImg" />
      </Box>

      <Box className="planText">
        <Typography className="planTextTypo">Why 360 Critical Care?</Typography>
        <Typography className="planSubTextTypo">
          {" "}
          Your One Stop Destination For Success
        </Typography>
      </Box>

      <Box className="planMainBox">
        <Box class="liveBox">
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          <Box className="liveScnd">
            <Typography className="liveText">
              Live / Scheduled Lectures
            </Typography>
            <Typography className="liveTextScnd">
              Learning is an important step for achieving dreams in a student's
              journey. We encourage the student to explore the concept in depth
              instead of memorizing. The live lectures help us in learning the
              needs of the students and motivates the students to be creative
              and be passionate learners.
            </Typography>
          </Box>
        </Box>
        <Box className="dotLine">
          <img src={dotOne} className="dotLineImg" />
        </Box>
      </Box>

      <Box>
        <Box class="liveBox liveBoxrev">
          <Box className="liveScnd">
            <Typography className="liveText">
              Live Doubt Solving Sessions
            </Typography>
            <Typography className="liveTextScnd">
              At 360 Critical Care we always encourage students to ask
              questions. We have created an atmosphere where students don t
              hesitate to ask their doubts. We firmly believe in More you ask,
              the more you learn.
            </Typography>
          </Box>
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
        </Box>
        <Box className="dotLine">
          <img src={dotTwo} className="dotLineImg" />
        </Box>
      </Box>

      <Box>
        <Box class="liveBox">
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
          <Box className="liveScnd">
            <Typography className="liveText">
              Structured And Targeted Study Material
            </Typography>
            <Typography className="liveTextScnd">
              Explore the art of concept with our structured material with
              intelligent question tackling and problem solving skills.
            </Typography>
          </Box>
        </Box>
        <Box className="dotLine">
          <img src={dotOne} className="dotLineImg" />
        </Box>
      </Box>

      <Box>
        <Box class="liveBox liveBoxrev">
          <Box className="liveScnd">
            <Typography className="liveText">
              Tests On Regular Basis For Progress Tracking
            </Typography>
            <Typography className="liveTextScnd">
              It is a set of test papers designed to make the student
              comfortable with all possible varieties of questions along with
              the various ways in which the same question can be put in order to
              make the student sweat in the exam hall.The problems involve
              multi-dimensional thinking at a time.
            </Typography>
          </Box>
          <Box className="liveFirst">
            <img src={Live} className="liveImg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default PlanDescription;
