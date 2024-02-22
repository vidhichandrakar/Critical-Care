import { Typography, Box, Button } from "@mui/material";
import React, { Fragment } from "react";

const SubCategory = ({ categorySelected }) => {
  const categoryType = {
    Category_One: ["Top Long Course", "Top short Course", "Top Crash Course"],
    Category_Two: ["EDIC 1", "EDIC 2", "TRICS-I"],
    Category_Three: ["TRICS-IDCCM"],
    Category_Four: [
      "Nephro Critical Care Review Course",
      "Sepsis BASIC",
      " Sepsis ADVANCED",
      "Critical Care Nutrition",
    ],
  };

  const handleCourses = ({ type }) => {
    console.log(type);
    switch (type) {
      case "Top Crash Course":{
        window.open("/TopCourse","_self")
        console.log("oijn")
        break;
      }
      case "EDIC 1":{
        window.open("/EDIC","_self")
        console.log("oijn")
        break;
      }
      case "EDIC 2":{
        window.open("/EDIC2","_self")
        console.log("oijn")
        break;
      }
      case "TRICS-IDCCM":{
        window.open("/IDCCM","_self")
        console.log("oijn")
        break;
      }
            
      default:
   }
  };
  return (
    <Fragment>
      {categoryType[categorySelected]?.map((data) => {
        return (
          <Fragment>
            <Box className="subCatBox">
              <Typography className="subCatHead">{data}</Typography>
              <Button
                onClick={() => handleCourses({ type: data })}
                className="subCatSubHead"
              >
                Explore
              </Button>
            </Box>

            {categoryType[categorySelected].length > 2 ? <br /> : null}
          </Fragment>
        );
      })}
    </Fragment>
  );
};
export default SubCategory;
