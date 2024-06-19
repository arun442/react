import React, { useState,useRef,useEffect } from 'react';
import {useParams} from "react-router-dom";
import aboutumg from '../../Images/aboutimg.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa6";
import hcl from '../../Images/hclabout.png';
import techmahindra from '../../Images/techmahindraabout.png';
import cts from '../../Images/ctsabout.png';
import dxc from '../../Images/dxcabout.png';
import tata from '../../Images/tataabout.png';
import accenture from '../../Images/accentureabout.png';
import infosys from '../../Images/infosysabout.png';
import walmart from '../../Images/walmartabout.png';
import gbm from '../../Images/gbmabout.png';
import lowes from '../../Images/lowesabout.png';
import valeo from '../../Images/Valeoabout.png';
import twitter from '../../Images/twitterabout.png';
import redhat from '../../Images/Red_Hat_Logo.png'
import GCC from '../../Images/gcc.png'
import microsoft from '../../Images/microsoftlogo.png'
import tableau from '../../Images/tableau1.png'
import AiAlliance from '../../Images/aialliance.png'


function About(props) {
    const navigate=useNavigate();
    const [tabname,settabname]=useState('overview');
    useEffect(() => {
        window.scrollTo(0,0)
      },[]);
    const abouttab=(tab)=>{
settabname(tab);
console.log(tab);
    }
    const {id} = useParams();
    return (
        <div className='container' >
            <div className='row' style={{width:'90%',margin:'auto',paddingTop:'20px',}}>
                <div className='col-md-8 col-sm-8' style={{color:'white',display:'flex',justifyContent:"start",flexDirection:"column",alignItems:'start',gap:'10px'}}>
                  <span> <span style={{color:"#419CFD",cursor:'pointer'}} onClick={e=>{navigate("/")}} >Home</span> <span><MdKeyboardArrowRight/></span> <span style={{color:"aaadb0"}}>About Us</span></span>

                    <h3 style={{fontFamily:"Poppins SemiBold",paddingTop:'20px'}}>About Us</h3>
               <p style={{textAlign:'start'}}>GK Cloud Solutions has created a brand in the Cloud space with specialization on Cloud Trainings across multiple brands and focusing more towards AI with evocative approach as a Solution Provider supporting enterprises to consistently succeed in the evolving world space</p>
               <div className='row' style={{width:'fit-content',display:'flex',justifyContent:'start',alignItems:'center',fontSize:'16px',border:"1px solid #129DD6",borderRadius:"15px",padding:'10px',backgroundColor:'#101635',cursor:'pointer'}}>                
                               <FaRegFilePdf className='col-md-1' style={{fill:'#129DD6',padding:0,height:'30px'}}/>

                <p className='col-md-11' style={{textAlign:'start',display:'flex',gap:'25px',margin:0,paddingLeft:"10px"}}>Download Company Profile</p>
               </div>
                </div>
                <div className='col-md-4 col-sm-4'>
                    <img src={aboutumg} style={{width:"80%",padding:'20px'}}/>
                </div>
            </div>
            
            <div className='row' style={{width:'80%',color:'white',fontFamily:"Poppins SemiBold",padding:'80px 80px 30px 80px'}}>
                <div className='row' style={{border:"1px solid #419CFD",borderRadius:"50px",padding:0}}>
                <div className='col' onClick={e=>{abouttab("overview")}} style={{fontSize:"20px",backgroundColor:`${tabname=="overview"?"#101635":""}`,border:`${tabname=="overview"?"1px solid #419CFD":""}`,padding:'15px',borderRadius:"50px",cursor:'pointer'}}>Overview</div>
                <div className='col' onClick={e=>{abouttab("client")}} style={{fontSize:"20px",backgroundColor:`${tabname=="client"?"#101635":""}`,border:`${tabname=="client"?"1px solid #419CFD":""}`,padding:'15px',borderRadius:"50px",cursor:'pointer'}}>Our Client</div>
                <div className='col' onClick={e=>{abouttab("partner")}} style={{fontSize:"20px",backgroundColor:`${tabname=="partner"?"#101635":""}`,border:`${tabname=="partner"?"1px solid #419CFD":""}`,padding:'15px',borderRadius:"50px",cursor:'pointer'}}>Our Partner</div>
                </div>
                
            </div>
            <div className='row' style={{width:'100%',padding:'0px 80px',}}>
                {tabname=="overview"?
                <div style={{color:'white',textAlign:'start',fontSize:'14px'}}>
                GK Cloud Solutions established to fill the void in Technology Training, Services & Project Consulting.<br/>
                <p style={{paddingTop:'20px'}}> <b>Training:</b> We are a value-driven Tech Ed Company who strives to provide unrivalled Technology continuum of training’s to enable aspiring associates to exceed their potential. We offer an end-to-end Portfolio of training services spanning multiple technologies that can be customized, built, and digitized to suit the client’s need. Pioneer in transformative technologies like AI, ML, IoT, Cloud, Data Science, Blockchain & Analytics. Reach is not a restriction to educate.</p>
                    <p style={{paddingTop:'20px'}}> <b>Consulting:</b> We are an Agile solution provider for Projects from Development, Consultation & Infrastructure Support. Every emerging technology goes through the scrum process and build business-centric value propositions for enabling digital transformations. Our custom-built business offerings for Offshore & Onsite curtailing costs, risk & compliance management thus augmenting workforce productivity in industries across Insurance, Banking, Retails, and Manufacturing. We are aligned to bridge the visible existing gaps between the traditional technologies (Legacy systems) through digital transformation.</p>
                </div>:
                tabname=="client"?
                <>
              <div className='row' style={{display:'flex',paddingTop:'10px',width:'100%',gap:"10px"}}>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={hcl} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                    <div className='col-md'style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={techmahindra}style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={dxc} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={accenture}  style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                  
                    </div>
                    <div className='row' style={{display:'flex',paddingTop:'10px',width:'100%',gap:"10px"}}>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={infosys} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                    <div className='col-md'style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={valeo}style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={walmart} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'20px',backgroundColor:'#101635'}}>
                        <img src={cts}  style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                  
                    </div>
                    
                    <div className='row' style={{display:'flex',paddingTop:'10px',width:'100%',gap:"10px"}}>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'5px',backgroundColor:'#101635'}}>
                        <img src={lowes} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                    <div className='col-md'style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'5px',backgroundColor:'#101635'}}>
                        <img src={twitter}style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'5px',backgroundColor:'#101635'}}>
                        <img src={tata} style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}} />
                    </div>
                    <div className='col-md' style={{border:"1px solid #419CFD",borderRadius:"15px",display:'flex',justifyContent:'center',padding:'5px',backgroundColor:'#101635'}}>
                        <img src={gbm}  style={{objectFit:'contain',maxHeight:'100%',maxWidth:'100%'}}/>
                    </div>
                  
                    </div>
                    </>:
                     <div >
                     <div className='row' style={{display:'flex',justifyContent:'start',alignItems:'center',paddingTop:'30px'}}>
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
                     <div className='row' style={{display:'flex',justifyContent:"start",marginTop:'20px'}}>
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
                    }
                </div>
        </div>
    );
}

export default About;