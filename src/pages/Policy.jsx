import Navbar from "../components/Navbar";
import Footer from "../components/Footer"

function Policy(){
    return(
        <>
        <Navbar/>
        <section className="pt-10 bg-black/95 pb-30">
            <div className="text-center py-6">
                <h1 className="text-secondary text-4xl font-extrabold">Privacy & Policy</h1>
                <h2 className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-2xl pt-2">Transparency. Security. Trust.</h2>
                {/* <p className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-2xl pt-2 w-3xl mx-auto">CyberLions is committed to protecting your information and providing transparent policies regarding our website and digital services.</p> */}
            </div>
            <div className="w-[80vw] h-[50vh] px-10 md:px-20 mx-auto py-20 bg-white/4 rounded-3xl overflow-y-auto custom-scrollbar">
                <div className="pb-18">
                    <h2 className="text-primary text-base font-bold pb-2">Privacy Policy</h2>
                    <p className="text-sm md:text-base  text-secondary/96 pb-2">CyberLions may collect information that you voluntarily provide when interacting with our website or contacting us.</p>
                    <details>
                        <summary className="text-secondary text-sm md:text-base pb-2">Click here to see more details</summary>
                        <p>
                            <ul className="list-disc pl-5 pb-2">
                                <li className="text-secondary text-sm md:text-base">Name</li>
                                <li className="text-secondary text-sm md:text-base">Email address</li>
                                <li className="text-secondary text-sm md:text-base">Phone number</li>
                                <li className="text-secondary text-sm md:text-base">Company or organization name</li>
                                <li className="text-secondary text-sm md:text-base">Project or service requirements</li>
                                <li className="text-secondary text-sm md:text-base">Messages or other information submitted through contact forms</li>
                            </ul>
                        </p>
                    </details>
                    <p className="text-sm md:text-base text-secondary/96 pb-2">We may also automatically receive limited technical information when you visit our website, such as your browser type, device type, IP address, and general information about how you interact with the website.</p>
                    <h3 className="text-sm md:text-base text-secondary pb-2">How We Use Your Information?</h3>
                    <details>
                        <summary className="text-secondary text-sm md:text-base pb-2">We may use the information we collect to:</summary>
                        <p>
                            <ul className="list-disc pl-5 pb-2">
                                <li className="text-secondary text-sm md:text-base">Respond to your inquiries and requests.</li>
                                <li className="text-secondary text-sm md:text-base">Understand your project requirements.</li>
                                <li className="text-secondary text-sm md:text-base">Provide and improve our services.</li>
                                <li className="text-secondary text-sm md:text-base">Communicate with you regarding projects or services.</li>
                                <li className="text-secondary text-sm md:text-base">Improve website functionality and user experience.</li>
                                <li className="text-secondarytext-sm md:text-base">Comply with applicable legal requirements.</li>
                            </ul>
                        </p>
                    </details>
                    <p className="text-sm md:text-base text-secondary/96 pb-2">We do not use personal information for purposes unrelated to the reason it was collected without appropriate notice or consent where required.</p>
                </div>

                <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Information Sharing</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">CyberLions does not sell or rent your personal information. We may share information with trusted third-party service providers when necessary to operate our website, provide services, communicate with users, or maintain our systems.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">We may also disclose information when required by law, legal proceedings, or to protect the rights, safety, and security of CyberLions, our users, or others.</p>
                  
                </div>
                
                <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Data Security</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">CyberLions takes reasonable technical and organizational measures to protect information against unauthorized access, alteration, disclosure, or destruction.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">However, no website, application, or method of transmitting information over the internet can be guaranteed to be completely secure. Therefore, while we work to protect your information, we cannot guarantee absolute security.</p>
                  
                </div>

                 <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Cookies Policy</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">CyberLions may use cookies and similar technologies to support website functionality and improve the user experience.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Cookies are small files stored on your device that can help websites remember information about your visit.</p>
                    <details>
                        <summary className="text-secondary text-sm md:text-base pb-2">Depending on the functionality implemented on our website, cookies may be used for:</summary>
                        <p>
                            <ul className="list-disc pl-5 pb-2">
                                <li className="text-secondary text-sm md:text-base">Essential website functionality</li>
                                <li className="text-secondary text-sm md:text-base">Remembering user preferences</li>
                                <li className="text-secondary text-sm md:text-base">Understanding website usage</li>
                                <li className="text-secondary text-sm md:text-base">Improving website performance</li>
                            </ul>
                        </p>
                    </details>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website functionality.</p>
                  
                </div>

                 <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Third-Party Services & Links</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Our website may use or link to third-party services, platforms, or websites.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">These may include hosting providers, analytics services, communication platforms, social media platforms, or other external services.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Third-party services operate according to their own terms and privacy policies. CyberLions is not responsible for the privacy practices, security, or content of external websites.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">We recommend reviewing the privacy policies of third-party services before providing them with personal information.</p>

                </div>


                <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Intellectual Property</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Unless otherwise stated, the CyberLions name, logo, branding, website design, graphics, written content, and other original materials displayed on this website are owned by or licensed to CyberLions.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">You may not reproduce, modify, distribute, republish, or commercially use our website content or branding without prior permission.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Third-party trademarks, logos, and brand names remain the property of their respective owners.</p>

                </div>

                <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Acceptable Use</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">You agree to use the CyberLions website and services responsibly and lawfully.</p>
                    <details>
                        <summary className="text-secondary text-sm md:text-base pb-2">You must not:</summary>
                        <p>
                            <ul className="list-disc pl-5 pb-2">
                                <li className="text-secondary text-sm md:text-base">Attempt to gain unauthorized access to our systems.</li>
                                <li className="text-secondary text-sm md:text-base">Introduce malicious software or harmful code.</li>
                                <li className="text-secondary text-sm md:text-base">Interfere with the operation or security of our website.</li>
                                <li className="text-secondary text-sm md:text-base">Use our website for unlawful activities.</li>
                                 <li className="text-secondary text-sm md:text-base">Copy or misuse our content without permission.</li>
                                <li className="text-secondary text-sm md:text-base">Attempt to obtain information that you are not authorized to access.</li>
                            </ul>
                        </p>
                    </details>
                    <p className="text-secondary/96 pb-1 text-sm md:text-base">CyberLions reserves the right to restrict access to users who misuse our website or services.</p>
                  
                </div>


                 <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Disclaimer</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">The information provided on this website is intended for general informational purposes.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">While we make reasonable efforts to keep our website information accurate and up to date, we do not guarantee that all information will always be complete, accurate, or current.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">Our website and its content are provided on an "as available" basis.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">CyberLions does not guarantee that the website will always operate without interruptions, errors, or security vulnerabilities.</p>

                </div>



                 <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Children's Privacy</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">CyberLions may update this Privacy & Policies page from time to time.</p>
                    <details>
                        <summary className="text-secondary text-sm md:text-base pb-2">Changes may be made to reflect:</summary>
                        <p>
                            <ul className="list-disc pl-5 pb-2">
                                <li className="text-secondary text-sm md:text-base">Changes to our services</li>
                                <li className="text-secondary text-sm md:text-base">Changes to our website</li>
                                <li className="text-secondary text-sm md:text-base">Changes in technology</li>
                                <li className="text-secondary text-sm md:text-base">Changes in legal or regulatory requirements</li>
                                <li className="text-secondary text-sm md:text-base">Changes in our business practices</li>
                            </ul>
                        </p>
                    </details>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">When we make changes, we will update the "Last Updated" date at the top of this page.</p>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">We encourage visitors to review this page periodically.</p>

                </div>

                 <div className="pb-18">
                    <h2 className="text-primary text-sm md:text-base font-bold pb-2">Contact Us</h2>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">If you have any questions, concerns, or requests regarding this Privacy & Policies page or the way CyberLions handles information, please contact us.</p>
                    <strong className="text-sm md:text-base text-secondary/96 pb-1">CyberLions</strong> <br />
                    <span className="text-sm md:text-base text-secondary/96 pb-1"><address>Email: your-email@example.com</address></span>
                    <span className="text-sm md:text-base text-secondary/96 pb-1"><address>Website: CyberLions</address></span>
                    <p className="text-sm md:text-base text-secondary/96 pb-1">We will make reasonable efforts to respond to legitimate inquiries in a timely manner.</p>

                </div>
                
            </div>
        </section>
        <Footer/>
        
        </>
    )
}

export default Policy;