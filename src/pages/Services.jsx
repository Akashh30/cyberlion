import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Services(){
    const [view,setView] = useState(null)
    const services = [
  {
    title: "AI & Machine Learning",
    description:
      "We build intelligent software solutions that use AI and machine learning to automate repetitive tasks, analyze information, and create smarter digital experiences.",
    services: [
      "AI-powered applications",
      "Intelligent automation",
      "AI chatbots",
      "Recommendation systems",
      "Data analysis",
      "AI integrations",
      "Custom AI solutions"
    ]
  },

  {
    title: "Web Development",
    description:
      "We create fast, responsive, and scalable web applications designed to deliver seamless experiences across devices and support evolving business needs.",
    services: [
      "React applications",
      "Business websites",
      "Admin dashboards",
      "E-commerce platforms",
      "REST API integration",
      "Responsive UI/UX",
      "Full-stack web applications"
    ]
  },

  {
    title: "Cloud & Scalable Solutions",
    description:
      "We build reliable cloud-based systems designed to improve performance, simplify deployment, and support applications as they designed to improve performance,",
    services: [
      "Cloud deployment",
      "AWS solutions",
      "Application hosting",
      "Docker containerization",
      "CI/CD pipelines",
      "Infrastructure automation",
      "Scalable architecture"
    ]
  },

  {
    title: "Software Development",
    description:
      "We transform business requirements and ideas into reliable software applications designed around specific operational needs.",
    services: [
      "Custom business applications",
      "Backend development",
      "API development",
      "Database systems",
      "Internal tools",
      "Automation software",
      "Enterprise applications"
    ]
  },

  {
    title: "Quality Assurance & Testing",
    description:
      "We help ensure software remains reliable, secure, and consistent through systematic testing and quality assurance practices.",
    services: [
      "Manual testing",
      "Automated testing",
      "Selenium testing",
      "Pytest",
      "Functional testing",
      "Regression testing",
      "API testing"
    ]
  },

  {
    title: "Cloud & Scalable Solutions",
    description:
      "We build reliable cloud-based systems designed to improve performance, simplify deployment, and support applications as they",
    services: [
      "Cloud deployment",
      "AWS solutions",
      "Application hosting",
      "Docker containerization",
      "CI/CD pipelines",
      "Infrastructure automation",
      "Scalable architecture"
    ]
  }
    ];
    return(
        <>
         <section className="h-auto bg-black/95">
        <Navbar/>
        <div className="text-center py-14">
            <h2 className="text-secondary text-4xl font-extrabold pb-2">Our Services</h2>
            <h3 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-2xl md:text-3xl font-medium">Technology Solutions Built for the Future</h3>
        </div>
         
         <div className="px-5 lg:px-30 pt-6 pb-30">

        <div className="flex flex-row flex-wrap gap-15 justify-center">
          {services.map((service, index)=> (
            <div key={index} className="w-[350px] h-xs border-1 border-primary rounded-xl py-4 shadow-[0_0_2px_#FF1744,0_0_5px_#FF1744] bg-white/2">
            <div className="text-center">
              <h3 className="text-xl text-secondary pb-5">{service.title}</h3>
              <h4 className="text-base bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-left pl-3 pr-3">{service.description}</h4>
            </div>
            
            <h4 className="text-sm bg-gradient-to-r from-secondary via-primary to-primary bg-clip-text text-transparent pl-3 pt-1 font-bold">Services:-</h4>
        
              <ul className="px-10 py-2 list-disc marker:text-secondary/50">
              {service.services.slice(0, view === index ? service.services.length:2).map
              ((item,serviceIndex)=>(
                <li key={serviceIndex} className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent font-medium">{item}</li>
              )
              )}
              </ul>  
              <div className="px-10 text-left">
              <button className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-bold" onClick={()=>setView(view === index? null: index)}>{ view ? <h1>View Less</h1>:<h1>View More</h1>}</button>
              </div>
           </div>

          ))}
           

        </div>
          </div>
         </section>
         <Footer/>
        </>
    )
}

export default Services;