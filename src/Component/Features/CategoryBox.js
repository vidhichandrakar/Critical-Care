import { Typography,Box, Card } from "@mui/material";
import React from "react";
import DropDown from "../Header/NestedMenu";

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DropdownMenuItem, DropdownNestedMenuItem } from "../Header/NestedDropdown";

const CategoryBox =()=>{
  return(
    <Box className="categoryMainBox">
        <Typography className="catHeading">Explore <span style={{color:"#0075FF"}}>Category</span></Typography>

        <Box>
          <Box className="cardBox">
        <Box  className="catDrop" > 
          <DropdownNestedMenuItem label="DrNB/DM/IFCCM Critical Care"
          rightIcon={<KeyboardArrowRightIcon />}
          menu={[
          <DropdownMenuItem onClick={() => {}}>
           <Typography className="dropDownText"> Top Long Course</Typography>
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            Top Short Course
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            Top Crash Course
          </DropdownMenuItem>
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>
        </Box> 
        <Box  className="catDrop" > 
        <DropdownNestedMenuItem label="EDIC"
        rightIcon={<KeyboardArrowRightIcon />}
        menu={[
          <DropdownMenuItem onClick={() => {}}>
            EDIC 1
          </DropdownMenuItem>,
          <DropdownMenuItem onClick={() => {}}>
            EDIC 2
          </DropdownMenuItem>,
           <DropdownMenuItem onClick={() => {}}>
           TRICS-I
         </DropdownMenuItem>
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>
        </Box>
        <Box  className="catDrop" > 
        <DropdownNestedMenuItem label="IDCCM"
        rightIcon={<KeyboardArrowRightIcon />}
        menu={[
          <DropdownMenuItem onClick={() => {}}>
            TRICS-IDCCM
          </DropdownMenuItem>
         
        ]}>
          Delete <DeleteForeverIcon />
        </DropdownNestedMenuItem>
        </Box>
        <Box  className="catDrop" > 
        <DropdownNestedMenuItem
          label="Other"
          rightIcon={<KeyboardArrowRightIcon />}
          menu={[
            <DropdownMenuItem onClick={() => {}}>
              Nephro Critical Care Review Course
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={() => {}}>
              Sepsis BASIC
            </DropdownMenuItem>,
            <DropdownMenuItem onClick={() => {}}>
            Sepsis ADVANCED
          </DropdownMenuItem>,
        <DropdownMenuItem onClick={() => {}}>
        Critical Care Nutrition
      </DropdownMenuItem>,
    
          ]}/>
          </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default CategoryBox