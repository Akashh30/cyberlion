import Navbar from "../components/Navbar"
import homelogo from "../assets/images/homelogo.png"
import { FiUser } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import Divider from "../components/Divider";
import bullet from "../assets/images/bullet.png"
import Divider2 from "../components/Divider2";
import howtobuild from "../assets/images/howtobuild.png"
import Footer from "../components/Footer";

import aimachinelearning from "../assets/images/ai&machinelearning.png"
import digitalproducts from "../assets/images/digitalproducts.png"
import cloudscalablesystems from "../assets/images/cloud&scalablesystems.png"
import modernwebplatform from "../assets/images/modernwebplatform.png"
import cybersecuritydataprotection from "../assets/images/cybersecurity&dataprotection.png"
import automationintegration from "../assets/images/automation&integration.png"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import bulletpoint from "../assets/images/bulletpoint.png"
import iands from "../assets/images/I&S.png"
import futureisready from "../assets/images/futureisready.png"
import meaningful from "../assets/images/meaningful.png"
import business from "../assets/images/business.png"

function Home(){
    const images = [
        aimachinelearning,
        digitalproducts,
        cloudscalablesystems,
        modernwebplatform,
        cybersecuritydataprotection,
        automationintegration
    ];

    const [currentImage, setCurrentImage] = useState(0)
    const [isFading, setIsFading] = useState(false);

    useEffect(()=>{
     const interval = setInterval(()=>{
      setIsFading(true)
      
      setTimeout(()=>{
       setCurrentImage((prev)=>(prev+1)%images.length)
       setIsFading(false)
      },500)
      
      
     },4000);
     
     return ()=> clearInterval(interval)
    },[])
    return(
        <>
        <Navbar/>
        <div>
        <section id="home" className="h-auto bg-black/95 grid grid-cols-1 xl:grid-cols-[1fr_auto]">
            <div className="pt-20 md:pt-35 pb-40 md:pb-60 px-8 md:px-14">
                <h2 className="text-xl md:text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl">Build the Future</h2>
                <h2 className="text-xl md:text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl pb-5 md:pb-10">with Intelligent Software Solutions</h2> 
                <h3 className="text-lg md:text-xl bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent pb-8 lg:text-xl">CyberLions is a next-generation software company delivering AI-powered applications, <br /> modern web platforms, cloud solutions, and scalable digital products that help businesses innovate faster.</h3>
                
                <div className="flex flex-row gap-6 md:gap-12">
                <button className="relative px-4 py-1 md:py-2 border-1 border-primary rounded-lg hover:shadow-[0_0_15px_var(--color-primary),inset_0_0_15px_var(--color-primary)] flex flex-row group items-center gap-0.5 overflow-hidden">
                      <div className="absolute bottom-0 left-1 h-[0.1px] w-full rounded-full bg-primary shadow-[0_0_8px_white,0_0_20px_#FF1744,0_0_40px_#FF1744]"></div>
                      <div className="absolute bottom-0 right-1 h-[0.1px] w-10 rounded-full bg-primary shadow-[0_0_8px_white,0_0_20px_#FF1744,0_0_40px_#FF1744]"></div>
                       <FiSearch size={24} className="text-primary"/>
                       <span className="text-3xl -translate-y-0.5 bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent group-hover:from-black via-primary to-black bg-clip-text text-transparent">|</span>
                      <a href="#home3" className="text-2xl px-1.5 font-bold bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent group-hover:from-black via-primary to-black bg-clip-text text-transparent text-xs md:text-lg">Explore now</a>
                    </button>
                  <button className="relative px-4 py-1 md:py-2 border-1 border-primary rounded-lg hover:shadow-[0_0_15px_var(--color-primary),inset_0_0_15px_var(--color-primary)] flex flex-row group items-center gap-0.5 overflow-hidden">
                      <div className="absolute bottom-0 left-1 h-[0.1px] w-full rounded-full bg-primary shadow-[0_0_8px_white,0_0_20px_#FF1744,0_0_40px_#FF1744]"></div>
                      <div className="absolute bottom-0 right-1 h-[0.1px] w-10 rounded-full bg-primary shadow-[0_0_8px_white,0_0_20px_#FF1744,0_0_40px_#FF1744]"></div>
                      <FiTag size={24} className="text-primary"/>
                      <span className="text-3xl -translate-y-0.5 bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent group-hover:from-black via-primary to-black bg-clip-text text-transparent">|</span>
                      <NavLink to="/Pricing" className="text-2xl px-1.5 font-bold bg-gradient-to-b from-primary via-primary to-black/20 bg-clip-text text-transparent group-hover:from-black via-primary to-black bg-clip-text text-transparent text-xs md:text-lg">View pricing</NavLink>
                    </button>
                    </div>
            </div>

            <div className="pt-35 pb-60 pl-16 relative hidden xl:block">
                {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4 w-120 h-120"></div> */}
                <img src={homelogo} alt="Lions Logo" className="w-lg animate-lionGlow"/>
            </div>         
        </section>
        <Divider2/>

        
       <section id ="home2" className="w-full min-w-0 grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-0 h-auto pt-30 bg-black/95 overflow-hidden pb-40">
           <div id="home3" className="pb-2 w-2xl pl-6 md:pl-14">
             <h2 className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-secondary pb-10">FROM IDEA TO <span className="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-primary">IMPACT</span></h2>
            <div className="bg-white/2 px-4 md:px-6 py-4 rounded-xl relative z-10 w-xs md:w-sm lg:w-lg border-2 border-primary/20 overflow-visible shadow-[inset_0_0_8px_var(--color-primary)] xl:w-sm" style={{clipPath: "polygon(0 0,calc(100% - 25px) 0,100% 25px,100% 100%,25px 100%,0 calc(100% - 25px),0 0)"}}>
            <div className="flex flex-row gap-1">
                <span><img src={bulletpoint} className="w-[35px]" alt="" /></span>
               <h2 className="text-left text-lg md:text-xl lg:text-2xl font-bold text-secondary pb-2">WHAT WE BUILD</h2>
            </div>  
              <p className="text-left pl-10 text-xs md:text-sm bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We build modern digital solutions that combine <span className="text-xs md:text-sm text-primary/75">intelligent technology</span>,<span className="text-xs md:text-sm text-primary/75">thoughtful design</span>, and <span className="text-xs md:text-sm text-primary/75">scalable architecture</span> to transform ideas into products that create real impact.</p>
            </div>
            
            <div className="bg-white/2 px-3 md:px-8 py-4 rounded-xl relative left-30 max-[500px]:left-0 md:left-20 top-1 z-10 border-2 border-primary/20 overflow-visible shadow-[inset_0_0_8px_var(--color-primary)] w-xs md:w-lg lg:w-2xl xl:w-sm" style={{clipPath: "polygon(0 0,calc(100% - 25px) 0,100% 25px,100% 100%,25px 100%,0 calc(100% - 25px),0 0)"}}>
            <div className="flex flex-row gap-1 relative right-4">
                <span><img src={howtobuild} className="w-[40px] md:w-[50px]" alt="" /></span>
               <h2 className="text-left text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-secondary pb-2">HOW WE BUILD</h2>
            </div>
             <div className="flex flex-row gap-1 py-3">
               <div>
                <img src={iands} className="w-[60px]" alt="" />  
               </div> 
              <div>
              <h1 className="text-xs md:text-sm font-extrabold md:font-bold text-secondary">Intelligent & Scalable</h1>  
              <p className="text-xs md:text-sm bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We combine <span className="text-xs md:text-sm text-primary/75">intelligent technology</span>, modern engineerin, and thoughful design.</p>
              </div>
             </div>

             <div className="flex flex-row gap-1 py-3">
               <div>
                <img src={futureisready} className="w-[75px]" alt="" />  
               </div> 
              <div>
              <h1 className="text-xs md:text-sm font-extrabold md:font-bold text-secondary">Future-Ready Systems</h1>  
              <p className="text-xs md:text-sm bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We build with the <span className="text-xs md:text-sm text-primary/75">future in mind</span>, creating flexible systems that evolve and grow with your business.</p>
              </div>
             </div>

             <div className="flex flex-row gap-1.5 py-3">
               <div>
                <img src={meaningful} className="w-[70px]" alt="" />  
               </div> 
              <div>
              <h1 className="text-xs md:text-sm font-extrabold md:font-bold text-secondary">Meaningful Digital Experiences</h1>  
              <p className="text-xs md:text-sm bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We turn ideas into <span className="text-xs md:text-sm text-primary/75">reliable digital experiences</span> that deliver measurable impact and lasting value.</p>
              </div>
             </div>

             <div className="flex flex-row gap-1 py-3">
               <div>
                <img src={business} className="w-[80px]" alt="" />  
               </div> 
              <div>
              <h1 className="text-xs md:text-sm font-extrabold md:font-bold text-secondary">Business-Focused Solutions</h1>  
              <p className="text-xs md:text-sm bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We create practical technology solutions that solve real business challenges and <span className="text-xs md:text-sm text-primary/75">drive sustainable growth</span></p>
              </div>
             </div>
            </div>

            </div>

            <div className="w-full md:w-1/2 h-auto pt-10 md:pt-2 flex justify-start md:w-full md:px-10 md:pt-10">
               <img src={images[currentImage]} alt="" className={`image-fade bg-cover transition-opacity duration-500 ease-in-out ${isFading ? "opacity-0":"opacity-100"}`} />
            </div>

        </section>
       
        {/* <section className="h-auto pt-20 pb-40 bg-black/95">
           <div className="w-full pb-22 text-center">
            <h2 className="text-5xl font-bold text-secondary pb-4">Why CyberLions?</h2>
            <h3 className="text-xl bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We combine modern technology, creative thinking, and scalable engineering <br /> to build digital solutions that are designed for real-world impact.</h3>
           </div>
           <div className="w-full flex flex-row gap-8 items-center justify-center">
            <div className="p-4 w-75 h-auto bg-white/2 border border-primary/20 backdrop-blur-md rounded-2xl shadow shadow-[0_0_3px_var(--color-primary)]">
            <div className="flex flex-row gap-1 justify-center">
             <h4 className="relative text-center text-lg text-secondary pb-3">Innovation First</h4>
            </div>
             <h5 className="text-left text-base bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We use modern technologies and intelligent solutions to turn complex ideas into powerful digital experience. Our approach focuses on creating scalable, efficient.</h5>
            </div>

            <div className="p-4 w-75 h-auto bg-white/2 border border-primary/20 backdrop-blur-md rounded-2xl shadow shadow-[0_0_3px_var(--color-primary)]">
            <div className="flex flex-row gap-1 justify-center">
             <h4 className="text-center text-lg text-secondary pb-3">Built to Scale</h4>
             </div>
             <h5 className="text-left text-base bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">Our solutions are designed to grow with your business, users, and evolving requirements. We build flexible systems that adapt seamlessly to new opportunities.</h5>
            </div>

            <div className="p-4 w-75 h-auto bg-white/2 border border-primary/20 backdrop-blur-md rounded-2xl shadow shadow-[0_0_3px_var(--color-primary)]">
            <div className="flex flex-row gap-1 justify-center">
             <h4 className="text-center text-lg text-secondary pb-3">User Focused</h4>
             </div>
             <h5 className="text-left text-base bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We create intuitive experiences that balance performance, usability, and real business needs.Every solution is thoughtfully designed to make interactions simple, engaging.</h5>
            </div>

            
            <div className="p-4 w-75 h-auto bg-white/2 border border-primary/20 backdrop-blur-md rounded-2xl shadow shadow-[0_0_3px_var(--color-primary)]">
            <div className="flex flex-row gap-1 justify-center">
             <h4 className="text-center text-lg text-secondary pb-3">Reliable & Secure</h4>
             </div>
             <h5 className="text-left text-base bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent">We follow modern development and practices to build dependable, maintainable, and secure apps. Our solutions are built with clean architecture and scalable code.</h5>
            </div>
           </div>
          
        </section> 
{/*          
         <div className="py-1 bg-black/95"></div> */}

         <Divider/>
         <Footer/>
        </div>
        </>
    )
}

export default Home;










