import { Typography,Box } from "@mui/material";
import React, { Fragment } from "react";

const SubCategory =({categorySelected})=>{
  const categoryType=
   { "Category_One":[
      "Top Long Course",
      "Top short Course",
      "Top Crash Course"
    ],
    Category_Two:[
      "EDIC 1",
      "EDIC 2",
      "TRICS-I"
    ],
    Category_Three:[
      "TRICS-IDCCM"
    ],
    Category_Four:[
      "Nephro Critical Care Review Course",
      "Sepsis BASIC",
     " Sepsis ADVANCED",
    "Critical Care Nutrition",
    ]

   }
  return(
   
 <Fragment>
   
  { 
  
  categoryType[categorySelected]?.map(data=>{
     return <Fragment>
      
  <Box className="subCatBox">
    <Typography>
      {data}
    </Typography>
    <Typography>
      bye
    </Typography>
    </Box>
    {categoryType[categorySelected].length>2?<br/>:null}
  </Fragment>

})}


  </Fragment>
  )
}
export default SubCategory;