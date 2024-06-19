import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react';
import { Container ,Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoSearch } from "react-icons/io5";
import About from './Components/About/About'
import gkcloudlogo from './Images/GKcloudlogo.png'
import call from './Images/call.png'
import message from './Images/message.png'
import insta from './Images/insta.png'
import twitter from './Images/twitter.png'
import facebook from './Images/facebook.png'
import linkedin from './Images/linkedin.png'
import youtube from './Images/youtube.png'
import { useNavigate } from "react-router-dom";
import Courses from './Components/Courses/Courses';

function App() {
  const navigate=useNavigate();
  const [locationpath,setlocationpath]=useState('');
  let location = useLocation();
  useEffect(()=>{
setlocationpath(location.pathname.split("/")[1])
console.log(location.pathname.split("/")[1]);
  })
  const [courses,setcourses]=useState([{"courseid":1,"coursename":"Prompt Engineering for Generative AI"},
  {"courseid":2,"coursename":"Google Cloud Fundamentals: Core Infrastructure"},
  {"courseid":3,"coursename":"Infrastructure and Application Modernization with Google Cloud"},
  {"courseid":4,"coursename":"Understanding Google Cloud Security and Operations"},
  {"courseid":5,"coursename":"Deploy and Monitor in Google Cloud for Azure Professionals"}])
  return (
    <div className="App" >
     <div className='main' >
     <div className='row header' >
<div className='col-md-5  p-0' style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
<img src={gkcloudlogo} style={{height:'80px',marginLeft:'35px',cursor:'pointer'}} onClick={e=>{navigate("/")}}/>
<div className="group">
    <IoSearch className='icon'/>
  <input placeholder="What do you want to learn?" type="search" className="input"/>
</div>
</div>
<div className='col-md-7  p-0' style={{display:'flex',alignItems:'center',justifyContent:'start'}}>
<Navbar expand="md" style={{width:'100%'}}>
        <Navbar.Toggle  style={{backgroundColor:'white',position:'absolute',right:'7px',top:'-17px',padding:'0px'}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{width:'100%'}}>
          <Nav className="me-auto row" style={{width:'100%'}}>
          <div className='col abouttab'  style={{cursor:'pointer',color:`${locationpath=="about"?"#419CFD":""}`}} onClick={e=>{navigate('/about')}}>
About
</div>
<div className='col programtab' >
Programs
<div className='coursehover' id='coursehover'>
            {courses.map((item) =>
       <div className='row courseheading' style={{paddingTop:'10px'}}>
        <a  onClick={e=>{navigate("Courses/"+item.courseid)}} style={{color:'black',textDecoration:'none'}}>{item.coursename}</a>

       </div>
      )}
              
            </div>
</div>
<div className='col'>
Schedules
</div>
<div className='col'>
Webinars
</div>
<div className='col'>
    <Button style={{backgroundColor:'#FCDC30',color:'black',fontFamily:'Poppins SemiBold',width:'80%'}}>Login</Button>
</div>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

</div>
            </div>
            
            <div className='row line' >
            {/* <marquee direction="right" style={{position:'absolute',fontWeight:"bolder"}}>Get All Courses Upto <b style={{color:'red'}}>80%</b> Offer</marquee> */}
            <h5  style={{position:'absolute',fontWeight:"bolder",fontSize:'14px',paddingTop:'10px'}}>Get All Courses Upto <b style={{color:'red'}}>80%</b> Offer</h5>

            </div>
       <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route exact path="/Courses/:id" element={<Courses />}/>
         <Route exact path="/about" element={<About />}/>

       </Routes>
       <div className='footer'>
            <div className='row '>
<div className='col-md col-sm-12'style={{textAlign:'start',fontSize:'10px'}}>
<h6 style={{color:'#419CFD',fontFamily:'Poppins SemiBold'}}>Reach Us</h6>
    <p style={{color:'#ECF4FF',paddingTop:'10px',fontSize:'12px'}}>GK Cloud Solutions Pvt Ltd<br/> IndiQube Penta,<br/> New No. 51, Richmond Road,<br/> Bengaluru - 560025</p>

</div>

<div className='col-md col-sm-12' style={{textAlign:'start',fontSize:'12px'}}>
<h5 style={{color:'#5FEF5C',fontFamily:'Poppins '}}>Contact Us</h5>
<div style={{display:'flex',gap:'10px',paddingTop:'10px'}}>
    <img src={call} style={{height:'80%'}}/>
<p style={{color:'#ECF4FF',paddingTop:'3px'}}>+91 80430 03611</p>
    </div>

    <div style={{display:'flex',gap:'10px'}}>
    <img src={message} style={{height:'80%'}}/>
    <p style={{color:'#ECF4FF',paddingTop:'3px'}}>support@gkcloud.ai</p>
    </div>


</div>

<div className='col-md col-sm-12' style={{textAlign:'start'}}>
<h5 style={{color:'#FCDC30',fontFamily:'Poppins SemiBold'}}>Follow Us</h5>
<div className='row' style={{paddingTop:'10px'}}>
<div className='col-2 ' style={{height:'20px'}}>
<img src={twitter} style={{height:'100%'}}  />
</div>
<div className='col-2' style={{height:'20px'}}>
<img src={insta} style={{height:'100%'}} />
</div>
<div className='col-2' style={{height:'20px'}}>
<img src={youtube} style={{height:'100%'}}  />
</div>
</div>
<div className='row' style={{paddingTop:'20px'}}>
<div className='col-2' style={{height:'20px'}}>
<img src={linkedin} style={{height:'100%'}} />
</div>
<div className='col-2' style={{height:'20px'}}>
<img src={facebook} style={{height:'100%'}} />
</div>
</div>
</div>

<div className='col-md col-sm-12' style={{textAlign:'start',padding:'10px'}}>
<div className="group">
  <input placeholder="Email" type="search" className="input"/>
  <div className='icon1' style={{fontSize:"12px",padding:'9px'}}>Subscribe</div>

</div>
    <div className='row expheading' style={{color:'white',margin:'auto',width:'100%',fontSize:'10px',marginTop:'30px'}}>
<div className='col p-0'style={{textAlign:'center',cursor:'pointer'}} onClick={e=>{navigate('/about')}} >
Privacy Policy
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'1rem'}}>
</div>
<div className='col p-0' style={{textAlign:'center',cursor:'pointer'}} onClick={e=>{navigate('/about')}}>
Refund Policy
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'1rem'}}>
</div>
<div className='col p-0' style={{textAlign:'center',cursor:'pointer'}} onClick={e=>{navigate('/about')}}>
Terms of Use
</div>

                </div>
</div>
                </div>
            </div>
            <div className='footer2'>
<p style={{margin:0}}>© 2024 GK Cloud Solutions Pvt Ltd</p>
            </div>
       </div>
       </div>
  );
}

export default App;
