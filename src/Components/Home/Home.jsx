import React, { useState,useEffect } from 'react';
import { Container ,Button,Card } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Home/Home.css'
import gkcloudlogo from '../../Images/GKcloudlogo.png'
import redhat from '../../Images/Red_Hat_Logo.png'
import GCC from '../../Images/gcc.png'
import microsoft from '../../Images/microsoftlogo.png'
import tableau from '../../Images/tableau1.png'
import infosys from '../../Images/INFY.png'
import accenture from '../../Images/accenturre.png'
import HCL from '../../Images/HCL.png'
import techm from '../../Images/Tech mahindra.png'
import dxc from '../../Images/DXC_BIG.D-c9f61e6e.png'
import call from '../../Images/call.png'
import message from '../../Images/message.png'
import insta from '../../Images/insta.png'
import twitter from '../../Images/twitter.png'
import facebook from '../../Images/facebook.png'
import linkedin from '../../Images/linkedin.png'
import youtube from '../../Images/youtube.png'
import img1 from '../../Images/Group 320.png'
import img2 from '../../Images/Group 465.png'
import img3 from '../../Images/Group 467.png'

import AiAlliance from '../../Images/aialliance.png'
import classroom from '../../Images/classroom.png'
import onlinecourse from '../../Images/online-learning.png';
import degree from '../../Images/degree.png'
import certificate from '../../Images/certification.png'
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";
import TextLoop from "react-text-loop";

function Home() {

  const [courses,setcourses]=useState([{"courseid":1,"coursename":"Prompt Engineering for Generative AI"},
  {"courseid":2,"coursename":"Google Cloud Fundamentals: Core Infrastructure"},
  {"courseid":3,"coursename":"Infrastructure and Application Modernization with Google Cloud"},
  {"courseid":4,"coursename":"Understanding Google Cloud Security and Operations"},
  {"courseid":5,"coursename":"Deploy and Monitor in Google Cloud for Azure Professionals"}])
    const width=window.screen.width
    console.log(width); 
    useEffect(() => {
      // Focus the input element
      window.scrollTo(0,0)
    });
    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },

        ]
      };
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },

        ]
      };
      var settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        customPaging: i => (
          <div
            style={{
              color: "#FCDC30",
            }}
          >
            O
          </div>
        ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1
                }
              },
            {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },

        ]
      };
      const mouseenterfun=()=>{
        document.getElementById('coursehover').style.display='block';
      }
      const mouseleavefun=()=>{
        setTimeout(() => {
          document.getElementById('coursehover').style.display='none';

        }, 2000);
      }
    return (
        <Container className='container'>
            <div className='mainpage'>
                <div className='mainpagediv' style={{display:'flex',alignItems:'end',justifyContent:'end',width:'100%',gap:'30px'}}>
                <h1 style={{color:'white',fontFamily:'Poppins',fontWeight:'bolder',fontSize:'50px',textAlign:'start'}}>Level Up <br/>Your Skills</h1>
                {/* <h1 style={{color:'#5FEF5C',fontFamily:'Poppins',fontWeight:'bolder',fontSize:'50px'}}>Artificial Intelligence</h1> */}
                <div style={{color:'#5FEF5C',fontFamily:'Poppins',fontWeight:'bolder',fontSize:'50px',width:'50%',display:'flex',justifyContent:"start"}} ><TextLoop children={["Artificial Intelligence", "Multi Cloud", "Cyber Security", "Infrastructure","Tableau"]} interval={1500} noWrap={window.screen.width<700?false:true} /></div>

                </div>
            </div>
            <div className='explorecourse'>
                <div className='row' style={{width:'100%',color:'rgb(252 220 48)',fontFamily:'Poppins SemiBold',fontSize:'30px',display:'flex',justifyContent:'center'}}>
                    Explore Our Courses
                </div>
                <div className='row expheading' style={{color:'white',margin:'auto',width:'60%',fontSize:'16px',marginTop:'30px'}}>
<div className='col p-0' >
Partners
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'2rem'}}>
</div>
<div className='col p-0'>
Technologies
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'2rem'}}>
</div>
<div className='col p-0'>
Popular Courses
</div>

                </div>
                <div className='row' style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'30px'}}>
                    <div className='col-md-3 col-xs-12 mb-2' style={{display:"flex",justifyContent:'center'}}>
                        <div style={{height:"120px",width:'250px',border:'1px solid #FCDC3066',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC3096)',borderRadius:"10px"}}>
                        <img src={redhat} style={{height:'80%',width:'80%',objectFit:'contain'}}/>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12 mb-2' style={{display:"flex",justifyContent:'center'}}>
                        <div style={{height:"120px",width:'250px',border:'1px solid #FCDC3066',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC3096)',borderRadius:"10px"}}>
                        <img src={GCC} style={{height:'80%',width:'80%',objectFit:'contain'}}/>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12 mb-2' style={{display:"flex",justifyContent:'center'}}>
                        <div style={{height:"120px",width:'250px',border:'1px solid #FCDC3066',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC3096)',borderRadius:"10px"}}>
                        <img src={AiAlliance} style={{height:'80%',width:'80%',objectFit:'contain'}}/>
                        </div>
                    </div>

                </div>
                <div className='row' style={{display:'flex',justifyContent:"center",marginTop:'20px'}}>
                <div className='col-md-3 col-xs-12 mb-2' style={{display:"flex",justifyContent:'center'}}>
                        <div style={{height:"120px",width:'250px',border:'1px solid #FCDC3066',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC3096)',borderRadius:"10px"}}>
                        <img src={microsoft} style={{height:'80%',width:'80%',objectFit:'contain'}}/>
                        </div>
                    </div>
                    <div className='col-md-3 col-xs-12 mb-2' style={{display:"flex",justifyContent:'center'}}>
                        <div style={{height:"120px",width:'250px',border:'1px solid #FCDC3066',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC3096)',borderRadius:"10px"}}>
                        <img src={tableau} style={{height:'80%',width:'80%',objectFit:'contain'}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='trainingmode'>
                <div className='row modebox'>
<div className='col-md col-sm-12'style={{textAlign:'center'}}>
<h5 style={{color:'#419CFD',fontFamily:'Poppins SemiBold'}}>Classroom Training</h5>
    <p style={{color:'#ECF4FF',paddingTop:'30px'}}>Traditional, instructor-led learning in popular global destinations.</p>

</div>
{/* <hr  style={{color:'white',transform:'rotate(90deg)'}}/> */}
<div className='col-md-1' style={{borderRight:"2px solid #002C6D",padding:0,margin:0,width:0}}></div>

<div className='col-md col-sm-12' style={{textAlign:'center'}}>
<h5 style={{color:'#419CFD',fontFamily:'Poppins SemiBold'}}>Live Online Classes</h5>
    <p style={{color:'#ECF4FF',paddingTop:'30px'}}>Flexible virtual learning with expert instructors from the comfort of your own space.</p>

</div>
<div className='col-md-1' style={{borderRight:"2px solid #002C6D",padding:0,margin:0,width:0}}></div>

<div className='col-md col-sm-12' style={{textAlign:'center'}}>
<h5 style={{color:'#419CFD',fontFamily:'Poppins SemiBold'}}>Flexi</h5>
    <p style={{color:'#ECF4FF',paddingTop:'30px'}}>Self-paced learning with edited lectures, courseware, hands-on labs, and optional doubt clearning sessions</p>

</div>
<div className='col-md-1' style={{borderRight:"2px solid #002C6D",padding:0,margin:0,width:0}}></div>

<div className='col-md col-sm-12' style={{textAlign:'center'}}>
<h5 style={{color:'#419CFD',fontFamily:'Poppins SemiBold'}}>WBT</h5>
    <p style={{color:'#ECF4FF',paddingTop:'30px'}}>Master in-depth topics with interactive modules, branching scenarios, and adaptive learning paths.</p>

</div>
                </div>
            </div>
            <div className='whyus' >
            <div className='row' style={{color:"#5FEF5C",fontFamily:'Poppins SemiBold',fontSize:'30px',display:'flex',justifyContent:'center',padding:"20px 0px"}}>Why Us</div>

                <div className='row' style={{paddingTop:'30px'}}>
<div className='col-md col-sm-12'style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'20px'}}>
    <div className='circle' style={{textAlign:'center',backgroundColor:"#5FEF5C",borderRadius:"50%",height:'120px',width:'120px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={onlinecourse} style={{height:'60px'}}/>
    </div>
    <div className='row' style={{color:'white'}}>
    <h2 style={{fontFamily:"Poppins SemiBold"}}>50+</h2>
    <p style={{fontSize:"20px"}}>Online Courses</p>
    </div>
</div>

<div className='col-md col-sm-12'style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'20px'}}>
    <div className='circle' style={{textAlign:'center',backgroundColor:"#5FEF5C",borderRadius:"50%",height:'120px',width:'120px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={degree} style={{height:'60px'}}/>
    </div>
    <div className='row' style={{color:'white'}}>
    <h2 style={{fontFamily:"Poppins SemiBold"}}>1000+</h2>
    <p style={{fontSize:"20px"}}>Active Students</p>
    </div>
</div>

<div className='col-md col-sm-12'style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'20px'}}>
    <div className='circle' style={{textAlign:'center',backgroundColor:"#5FEF5C",borderRadius:"50%",height:'120px',width:'120px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={classroom} style={{height:'60px'}}/>
    </div>
    <div className='row' style={{color:'white'}}>
    <h2 style={{fontFamily:"Poppins SemiBold"}}>15+</h2>
    <p style={{fontSize:"20px"}}>Instructors</p>
    </div>
</div>

<div className='col-md col-sm-12'style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:"column",gap:'20px'}}>
    <div className='circle' style={{textAlign:'center',backgroundColor:"#5FEF5C",borderRadius:"50%",height:'120px',width:'120px',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <img src={certificate} style={{height:'60px'}}/>
    </div>
    <div className='row' style={{color:'white'}}>
    <h2 style={{fontFamily:"Poppins SemiBold"}}>50+</h2>
    <p style={{fontSize:"20px"}}>Certification</p>
    </div>
</div>
                </div>
            </div>
            <div className='offer'>
                <div className='row' style={{color:'#419CFD',fontFamily:'Poppins SemiBold',fontSize:'30px',display:'flex',justifyContent:'center',padding:"10px 0px"}}>GKCS Unique Offerings</div>
            <Slider {...settings} style={{margin:"auto",paddingTop:"30px"}}>
      <div style={{width:'fit-content'}}>
      <Card style={{border:'1px solid #419CFD',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #419CFD)',borderRadius:"10px",color:'white',width:'250px',height:'350px'}} >
      <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'end'}}>
      <Card.Title style={{backgroundColor:'#419CFD',borderRadius:"15px",width:'fit-content',padding:'5px',margin:'auto',fontSize:"16px"}}>1-on-1 Training</Card.Title>
        <Card.Img variant="top" src={img1}  style={{padding:'20px'}}/>
        <Card.Text style={{fontSize:"14px"}}>
          Schedule personalized sessions based upon your availability
        </Card.Text>
      </Card.Body>
    </Card>    
      </div>
      <div>
      <Card style={{border:'1px solid #419CFD',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #419CFD)',borderRadius:"10px",color:'white',width:'250px',height:'350px'}} >
      <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'end'}}>
      <Card.Title style={{backgroundColor:'#419CFD',borderRadius:"15px",width:'fit-content',padding:'5px',margin:'auto',fontSize:"16px"}}>Customized Training</Card.Title>
        <Card.Img variant="top" src={img2}  style={{padding:'20px'}}/>
        <Card.Text style={{fontSize:"14px"}}>
          Tailor your learning experience.Dive deeper in topics of greater interest to you.
        </Card.Text>
      </Card.Body>
    </Card> 
      </div>
      <div>
      <Card style={{border:'1px solid #419CFD',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #419CFD)',borderRadius:"10px",color:'white',width:'250px',height:'350px'}} >
      <Card.Body style={{display:'flex',flexDirection:'column',alignItems:'end'}}>
        <Card.Title style={{backgroundColor:'#419CFD',borderRadius:"15px",width:'fit-content',padding:'5px',margin:'auto',fontSize:"16px"}}>AI Learning</Card.Title>
        <Card.Img variant="top" src={img3} style={{padding:'20px'}}/>
        <Card.Text style={{fontSize:"14px"}}>
        Optimize learning with AI Project learning programs , balancing knowledge retention and time constraints.

</Card.Text>
      </Card.Body>
    </Card>       </div>
     
    </Slider>
            </div>
            <div className='client'>
<div className='row'  style={{color:'#5FEF5C',fontFamily:'Poppins SemiBold',fontSize:'30px',display:'flex',justifyContent:'center',padding:"30px 0px"}}>Our Clientele</div>
<div className='row' style={{width:'80%',border:'1px solid #0B9009',padding:'25px',backgroundImage:'linear-gradient(#000520 40%, #5FEF5C80)',borderRadius:"10px",color:'white'}}>
<Slider {...settings1} style={{margin:"auto",paddingTop:"20px"}}>
      <div>
     <img src={HCL} style={{height:'30px'}}/>
      </div>
      <div>
     <img src={techm} style={{height:'30px'}}/>
      </div>
      <div>
     <img src={dxc} style={{height:'30px'}}/>
      </div>
      <div>
     <img src={accenture} style={{height:'30px'}}/>
      </div>
      <div>
     <img src={infosys} style={{height:'30px'}}/>
      </div>
    </Slider>
</div>
            </div>
            <div className='peoplesays'>
            <div className='row'  style={{color:'#FCDC30',fontFamily:'Poppins SemiBold',fontSize:'30px',display:'flex',justifyContent:'center',padding:"30px 0px"}}>What They Says About Courses</div>
<div className='row' style={{width:'82%'}}>
<Slider {...settings2} style={{margin:"auto",paddingTop:"30px"}}>
      <div>
      <Card style={{border:'1px solid #FCDC30',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC30)',borderRadius:"10px",color:'white',width:'250px',height:'330px'}} >
      <Card.Body>
        <Card.Text style={{fontSize:'12px'}}>
        " The Tableau training that was delivered in Global Knowledge Technologies has been extremely helpful. The hands-on training with the support from the trainer went a long way in making me understand the nuances in what I learnt through self-learning and official curriculum. Thank"        </Card.Text>
      </Card.Body>
      <div style={{textAlign:'end',color:'black',fontFamily:"Poppins SemiBold"}}>- Peter Park</div>
      <div style={{textAlign:'end',color:'black'}}>Tableau</div>

    </Card>    
      </div>
      <div>
      <Card style={{border:'1px solid #FCDC30',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC30)',borderRadius:"10px",color:'white',width:'250px',height:'330px'}} >
      <Card.Body>
        <Card.Text style={{fontSize:'12px'}}>
        " The Tableau training that was delivered in Global Knowledge Technologies has been extremely helpful. The hands-on training with the support from the trainer went a long way in making me understand the nuances in what I learnt through self-learning and official curriculum. Thank"        </Card.Text>
      </Card.Body>
      <div style={{textAlign:'end',color:'black',fontFamily:"Poppins SemiBold"}}>- Peter Park</div>
      <div style={{textAlign:'end',color:'black'}}>Tableau</div>

    </Card> 
      </div>
      <div>
      <Card style={{border:'1px solid #FCDC30',padding:'10px',backgroundImage:'linear-gradient(#000520 40%, #FCDC30)',borderRadius:"10px",color:'white',width:'250px',height:'330px'}} >
      <Card.Body>
        <Card.Text style={{fontSize:'12px'}}>
        " The Tableau training that was delivered in Global Knowledge Technologies has been extremely helpful. The hands-on training with the support from the trainer went a long way in making me understand the nuances in what I learnt through self-learning and official curriculum. Thank"
</Card.Text>
      </Card.Body>
      <div style={{textAlign:'end',color:'black',fontFamily:"Poppins SemiBold"}}>- Peter Park</div>
      <div style={{textAlign:'end',color:'black'}}>Tableau</div>

    </Card>       </div>
     
    </Slider>
</div>
            </div>
            {/* <div className='footer'>
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
<div className='col p-0'style={{textAlign:'center'}} >
Privacy Policy
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'1rem'}}>
</div>
<div className='col p-0' style={{textAlign:'center'}} >
Refund Policy
</div>
<div className='col-md-1 p-1' style={{borderRight:'2px solid',width:'1px',color:'rgb(252 220 48)',height:'1rem'}}>
</div>
<div className='col p-0' style={{textAlign:'center'}} >
Terms of Use
</div>

                </div>
</div>
                </div>
            </div>
            <div className='footer2'>
<p>© 2024 GK Cloud Solutions Pvt Ltd</p>
            </div> */}
            <>.</>
        </Container>
    );
}

export default Home;