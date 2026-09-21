import instaa from "../assets/images/instaa.png"
import twiterr from "../assets/images/twiterr.png"
import facebookk from "../assets/images/facebookk.png"
import linkedinn from "../assets/images/linkedinn.png"
import upwardarrow from "../assets/images/upwardarrow.png"
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
        <footer className="hidden lg:block py-8 px-10 w-full h-auto bg-black/92">
        <section className="flex flex-row justify-between">
           <div className="flex flex-row gap-5">
              <span className="-translate-y-2"><a href=""><img src={upwardarrow} width="70px" height="70px" alt="" className="drop-shadow-[0_0_95px_#FF1744]"/></a></span>
              <span><Link to="/policy" className="text-lg bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent group-hover:bg-gradient-to-b group-hover:from-black via-primary to-black bg-clip-text text-transparent">Policy</Link></span>
              <span><Link to="/about" className="text-lg bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent group-hover:bg-gradient-to-b group-hover:from-black via-primary to-black bg-clip-text text-transparent">About</Link></span>
              <span><Link to="/services" className="text-lg bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent group-hover:bg-gradient-to-b group-hover:from-black via-primary to-black bg-clip-text text-transparent">Services</Link></span>
              <span><Link to="/Pricing" className="text-lg bg-gradient-to-b from-primary via-primary to-black bg-clip-text text-transparent group-hover:bg-gradient-to-b group-hover:from-black via-primary to-black bg-clip-text text-transparent">Pricing</Link></span>
              
           </div>
           <div>
            <div>
            <span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-xs lg:text-sm">© 2026 CyberLions Powered by Akash Nair</span>
            <div className="flex flex-row gap-2 pt-2 justify-center items-center">
            <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><img src={instaa} width="26" height="26" alt="" /></a>
            <a href="https://www.facebook.com/" target="_blank"><img src={facebookk} width="24" height="24" alt="" /></a>
            <a href="https://www.linkedin.com/feed/"><img src={linkedinn} width="20" height="20" alt="" /></a>
            <a href="https://x.com/" target="_blank"><img src={twiterr} width="20" height="20" alt="" /></a>
            </div>
            </div>
           </div>
        </section> 
        </footer>
        </>
    )
}

export default Footer;