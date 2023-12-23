import React from 'react'
import "./ContactUs.css"
import Header from '../Header/Header'
import Container from '@mui/material/Container';
import { OutlinedFlag } from '@mui/icons-material';


function ContactUs() {
  return (
    <>
    <div className='allContactUs'>
      <Header/>
     <div className='contactUsHeading'> <span className='contactHeading'> Contact </span> <span className='usHeading'> Us </span> </div>
     <div className='contactUs1'>
       <p>This is the official page of Physics Wallah, where you can share all your queries, feedback, complaints, or 
any concern you may have about our centers, courses, and programs.</p>
<p>Physics Wallah, India's leading student-oriented Edtech organization, is here to help all the students to 
solve their grievances. We're here to help you. We aim to solve all the queries within 7 days. You can call on 
Physics Wallah's official Contact No. 07019243492, 24 x 7. If the phone is busy, we're resolving someone 
else's queries. We request you to contact us again after 15 minutes so that we can address your query or 
concern you may have regarding lectures or course material. You may notify us in the "contact us" section 
only. Your suggestions will help us improve and give you and all the children a bright future.</p>
<p>In Case of any grievance, don't hesitate to get in touch with us on Physics Wallah's official contact number 
07019243492. Or you can write to us at support@pw.live.</p>
</div>


<hr/>

<div className='contactUs2_1'>
    <h2 className='criticalCareHead2_1'>
        360 Critical Care
    </h2>

    <div>KLJ Noida one</div>
    <div>B 8, Block B, Industrial </div>
    <div>Area,Sector 62, Noida,Uttar</div> 
    <div>Pradesh 201309</div>

    <button type="button" className='contactEmailId'> support@360criticalcare.com </button>

    <Container fixed> 
    <button sx={{ variant: OutlinedFlag, bgcolor: '#FFFFFF' }} className="getDirectionBox" > Get Direction </button>
      </Container>
</div>


{/* <div className='contactUs2_2'>
    <img src="" alt="Map will be displayed here" height="auto" width="100px"></img>
</div> */}

<hr/>

<div className='fAQSection'>
<h2 className='fAQHeading'> FAQ's </h2>
<div className='qna'>
<b> Q. How can I transfer my coaching centre from Pathshala to Vidyapeeth? </b>
<p>There are clear instructions that you can not transfer coaching from Pathshala to Vidyapeeth or from 
Vidyapeeth to Pathshala. Pathshala is based on a hybrid classroom concept where the student learn 
from online lectures with a doubt clearing faculty at the centre. At the same time, Vidhyapeeth is a 
complete offline classroom system.</p>
<hr/>
<b> Q. How can I transfer my coaching centre from Pathshala to Vidyapeeth? </b>
<p>There are clear instructions that you can not transfer coaching from Pathshala to Vidyapeeth or from 
Vidyapeeth to Pathshala. Pathshala is based on a hybrid classroom concept where the student learn 
from online lectures with a doubt clearing faculty at the centre. At the same time, Vidhyapeeth is a 
complete offline classroom system.</p>
<hr/>
<b> Q. How can I transfer my coaching centre from Pathshala to Vidyapeeth? </b>
<p>There are clear instructions that you can not transfer coaching from Pathshala to Vidyapeeth or from 
Vidyapeeth to Pathshala. Pathshala is based on a hybrid classroom concept where the student learn 
from online lectures with a doubt clearing faculty at the centre. At the same time, Vidhyapeeth is a 
complete offline classroom system.</p>
<hr/>
<b> Q. How can I transfer my coaching centre from Pathshala to Vidyapeeth? </b>
<p>There are clear instructions that you can not transfer coaching from Pathshala to Vidyapeeth or from 
Vidyapeeth to Pathshala. Pathshala is based on a hybrid classroom concept where the student learn 
from online lectures with a doubt clearing faculty at the centre. At the same time, Vidhyapeeth is a 
complete offline classroom system.</p>
<hr/>
<b> Q. How can I transfer my coaching centre from Pathshala to Vidyapeeth? </b>
<p>There are clear instructions that you can not transfer coaching from Pathshala to Vidyapeeth or from 
Vidyapeeth to Pathshala. Pathshala is based on a hybrid classroom concept where the student learn 
from online lectures with a doubt clearing faculty at the centre. At the same time, Vidhyapeeth is a 
complete offline classroom system.</p>
</div>

<hr/>

</div>
{/* <Footer/> */}


    </div>
    </>
  )
}

export default ContactUs


