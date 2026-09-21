import Navbar from "../components/Navbar"
import robot from "../assets/images/robot.png"
import Footer from "../components/Footer";
import aboutlion2 from "../assets/images/aboutlion2.png"
import brainicon from "../assets/images/brainicon.png"
import Divider2 from "../components/Divider2";
import moderntech from "../assets/images/moderntech.png"
import shield from "../assets/images/shield.png"
import rocket from "../assets/images/rocket.png"
import teammember from "../assets/images/teammember.png"
import cube from "../assets/images/cube.png"
import globe from "../assets/images/globe.png"
import trophy from "../assets/images/trophy.png"

function About(){
    return(
        <>
        <Navbar/>
            <section className="h-auto w-full bg-black/95 grid grid-cols-1 md:grid-cols-[1fr_auto] px-5 md:px-15 lg:px-24 pb-10 lg:pb-40 pt-5 lg:pt-15">
             <div className="flex flex-col gap-1 pt-15 2xl:pt-20 pd-20 md:pb-30">
               <div>
               <span className="text-xl 2xl:text-4xl md:text-3xl xl:text-5xl text-secondary font-bold">WE BUILD TODAY,</span> <br />
               <span className="text-xl 2xl:text-4xl md:text-3xl xl:text-5xl bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent font-bold">FOR A SMARTER TOMORROW.</span>
               </div>
               <h1 className="text-sm 2xl:text-xl md:text-lg xl:text-2xl pr-2 lg:pr-20 bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent py-6">CyberLions is a next-generation software company powered by AI, driven by innovation, <br className="hidden md:block lg:hidden" /> and committed to building digital solutions that shape the future.</h1>
               <div className="flex flex-row flex-wrap 2xl:flex-unwrap md:w-xl lg:w-xl 2xl:w-auto gap-5 md:gap-8 py:10 xl:py-2">
                 <div className="w-35 md:w-50 flex flex-col gap-1 rounded-2xl p-3 items-center justify-center bg-white/2.5 shadow-[0_0_10px_#FF1744,0_0_5px_#FF1744] text-center">
                    <img src={brainicon} alt="" className="w-12 h-8 md:w-14 md:h-10"/>
                    <h4 className="text-secondary text-xs md:text-sm font-bold">AI-Powered</h4>
                    <h5 className="text-secondary text-left text-sm md:text-lg">Intelligent solution for real-world impact.</h5>
                 </div>
                 <div className="w-35 md:w-50 flex flex-col gap-1 rounded-2xl p-3 items-center justify-center bg-white/2.5 shadow-[0_0_10px_#FF1744,0_0_5px_#FF1744] text-center">
                    <img src={moderntech} alt="" className="w-12 h-8 md:w-14 md:h-10"/>
                    <h4 className="text-secondary text-xs md:text-sm font-bold">Modern Tech</h4>
                    <h5 className="text-secondary text-left text-sm md:text-lg">Built with the latest tools framework</h5>
                 </div>
                 <div className="w-35 md:w-50 flex flex-col gap-1 rounded-2xl p-3 items-center justify-center bg-white/2.5 shadow-[0_0_10px_#FF1744,0_0_5px_#FF1744] text-center">
                    <img src={shield} alt="" className="w-12 h-8 md:w-14 md:h-10"/>
                    <h4 className="text-secondary text-xs md:text-sm font-bold">AI-Powered</h4>
                    <h5 className="text-secondary text-left text-sm md:text-lg">Intelligent solution for real-world impact.</h5>
                 </div>
                 <div className="w-35 md:w-50 flex flex-col gap-1 rounded-2xl p-3 items-center justify-center bg-white/2.5 shadow-[0_0_10px_#FF1744,0_0_5px_#FF1744] text-center">
                    <img src={rocket} alt="" className="w-12 h-8 md:w-14 md:h-10"/>
                    <h4 className="text-secondary text-xs md:text-sm font-bold">Future Ready</h4>
                    <h5 className="text-secondary text-left text-sm md:text-lg">Scalable, adaptable and built to evolve.</h5>
                 </div>
               </div>
             </div>
              
              <div className="py-15">
               <img src={aboutlion2} alt="" className="xl:w-[400px] xl:h-[450px]  w-[300px] h-[800px]animate-lionGlow2 hidden lg:block"/>
              </div>

        </section>
        <Divider2/>
        <section className="py-16 bg-black/95 grid grid-cols-1 xl:grid-cols-[auto_1fr] px-5 xl:px-15 lg:px-24 pb-6">
        <div className="w-100 max-[430px]:w-80 md:w-180 xl:w-150 h-auto py-3 px-1 lg:px-3">
          <h3 className="text-primary font-bold pb-1 text-xl md:text-3xl lg:text-xl">WHO WE ARE</h3>
          <p className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm md:text-lg">We are a team of innovators, engineers, and dreamers building intelligent software that empowers businesses and transforms ideas into digital realities.</p>
          <p className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm md:text-lg">We combine creativity, modern technology, and thoughtful engineering to create solutions designed for a smarter, more connected future.</p>
        </div>
        <div className="pt-10 pb-20 flex flex-row flex-wrap 2xl:no-wrap gap-10 pl-2 xl:pl-12">
         <div className="p-3 text-center flex flex-col border-1 border-primary rounded-2xl shadow-[0_0_12px_#FF1744,0_0_3px_#FF1744] bg-white/2">
            <img src={teammember} alt="" className="w-8 h-auto mx-auto pb-2 pt-2"/>
            <span className="text-secondary pb-1 text-3xl text-primary">25+</span>
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm mt-2">Team Members</span>
         </div>

         <div className="p-3 text-center flex flex-col border-1 border-primary rounded-2xl shadow-[0_0_12px_#FF1744,0_0_3px_#FF1744] bg-white/2">
            <img src={cube} alt="" className="w-8 h-auto mx-auto pb-2 pt-2"/>
            <span className="text-secondary pb-1 text-3xl text-primary">60+</span>
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm mt-2">Projects delivered</span>
         </div>

         <div className="p-3 text-center flex flex-col border-1 border-primary rounded-2xl shadow-[0_0_12px_#FF1744,0_0_3px_#FF1744] bg-white/2">
            <img src={globe} alt="" className="w-8 h-auto mx-auto pb-2 pt-2"/>
            <span className="text-secondary pb-1 text-3xl text-primary">10+</span>
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm mt-2">Countries served</span>
         </div>

         <div className="p-3 text-center flex flex-col border-1 border-primary rounded-2xl shadow-[0_0_12px_#FF1744,0_0_3px_#FF1744] bg-white/2">
            <img src={trophy} alt="" className="w-8 h-auto mx-auto pb-2 pt-2"/>
            <span className="text-secondary pb-1 text-3xl text-primary">5+</span>
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm mt-2">Industry awards</span>
         </div>
        
        </div>

        <div></div>
        </section>


        <section className="bg-black/95 pt-16 h-auto px-5 lg:px-16 pb-30 flex flex-row flex-wrap lg:flex-nowrap justify-between items-stretch">
         <div className="w-4/5 lg:w-sm p-2 pb-2 lg:pb-0">
            <h2 className="text-primary text-xl lg:text-lg font-bold">Our mission</h2>
            <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm md:text-lg">To build intelligent, accessible, and reliable software solutions that transform ideas into meaningful digital products, solve real-world challenges, and help businesses innovate, grow, and achieve their goals.</h3>
         </div>
         <div className="w-4/5 lg:w-sm p-2 pb-2 lg:pb-0">
            <h2 className="text-primary text-xl lg:text-lg font-bold">Our approach</h2>
            <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm md:text-lg">We combine AI, modern technology, thoughtful design, and agile engineering to turn complex challenges into simple, scalable, and impactful solutions. We focus on creating technology that delivers real value.</h3>
         </div>
         
         <div className="w-4/5 lg:w-sm p-2 pb-2 lg:pb-0">
            <h2 className="text-primary text-xl lg:text-lg font-bold">Our vision</h2>
            <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm md:text-lg">To build intelligent, accessible, and reliable software solutions that transform ideas into meaningful digital products, solve real-world challenges, and help businesses innovate, grow, and achieve their goals.</h3>
          </div>

          
        </section>
        <Footer/>
        </>
    )
}

export default About