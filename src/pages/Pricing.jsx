import Navbar from "../components/Navbar"
import { FiCheck } from "react-icons/fi"
import Footer from "../components/Footer"
import { useState } from "react"

function Pricing(){
    const [selectedPackage, setSelectedPackage] = useState('medium');
    return(
        <>
        <Navbar/>
        <section className="py-10 h-auto bg-black/95 ">
           <div className="text-center pb-5">
            <h1 className="text-secondary text-2xl lg:text-4xl font-extrabold pb-2">PRICING</h1>
            <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-xl lg:text-3xl font-medium">Solutions Designed Around Your Needs</h3>
           </div>
           <div className="flex flex-row px-4 md:px-10 lg:px-30 xl:px-60 pt-13 pb-20 max-[900px]:overflow-x-auto max-[900px]:flex-nowrap gap-6">
            <div onClick={()=>setSelectedPackage('basic')} className={`w-xs max-[900px]:w-xs max-[900px]:shrink-0 border-1 border-primary h-[450px] lg:h-auto text-center rounded-xl p-2 pb-10 shadow-[0_0_5px_#FF1744] ${selectedPackage ==="basic"? "shadow-[0_0_15px_#FF1744]":""}`}>
              <h2 className="text-secondary text-xl font-bold pb-4 pt-4">Basic Packages</h2>
              <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-base font-medium text-left pl-4 pb-2">Starting from $1000</h3>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium"> 1–5 Pages </span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Responsive Design</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Modern UI</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Contact Form</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Basic SEO</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Deployment</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-21"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">7 Days Support</span></div>
              <button className="px-4 py-2 border-1 border-primary rounded-xl text-secondary">GET STARTED</button>
            </div>

            <div onClick={()=>setSelectedPackage('medium')} className={`w-xs max-[900px]:w-xs max-[900px]:shrink-0 border-1 border-primary h-[450px] lg:h-auto text-center rounded-xl p-2 pb-10 shadow-[0_0_5px_#FF1744] ${selectedPackage ==="medium"? "shadow-[0_0_15px_#FF1744]":""}`}>
              <h2 className="text-secondary text-xl font-bold pb-1 pt-4">Medium Package</h2>
              <h2 className="text-secondary text-sm font-bold pb-4">(Most Popular)</h2>
              <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-base font-medium text-left pl-4 pb-2">Starting from $2000</h3>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Everything in Basic</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Custom UI/UX</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">API Integration</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Database Integration</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Admin Dashboard</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Advanced SEO</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Analytics</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-7"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">30 Days Support</span></div>
              <button className="px-4 py-2 border-1 border-primary rounded-xl text-secondary">GET STARTED</button>
            </div>


            <div onClick={()=>setSelectedPackage('advance')} className={`w-xs max-[900px]:w-xs max-[900px]:shrink-0 border-1 border-primary h-[450px] lg:h-auto text-center rounded-xl p-2 pb-10 shadow-[0_0_5px_#FF1744] ${selectedPackage ==="advance"? "shadow-[0_0_15px_#FF1744]":""}`}>
              <h2 className="text-secondary text-xl font-bold pb-4 pt-4">Advanced Package</h2>
              <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-base font-medium text-left pl-4 pb-2">Starting from $3000</h3>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Everything in Medium</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Custom Web Application</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Advanced Backend</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Custom APIs</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Authentication</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">CI/CD Setup </span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-2"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Scalable Architecture</span></div>
              <div className="flex flex-row gap-2 items-center pl-4 pb-12"><FiCheck className="text-secondary" size={18}/><span className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-sm font-medium">Priority Support </span></div>
              <button className="px-4 py-2 border-1 border-primary rounded-xl text-secondary">GET STARTED</button>
            </div>
           </div>

        
        </section>
        <Footer/>
        </>
    )
}

export default Pricing