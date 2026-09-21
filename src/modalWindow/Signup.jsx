import { createPortal } from "react-dom";

function Signup(){
    const modal = (
        <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">

            <div className="w-xl h-auto p-10 bg-black/95 border border-primary/20 rounded-3xl">
                
                <h1 className="text-secondary text-3xl font-bold text-center mb-3">
                    Sign Up
                </h1>
        
                <p className="text-secondary text-base font-light text-center mb-8">
                   Join Cyberlion and unlock the power of innovation.
                </p>             

                <form action="" className="flex flex-col gap-2 mb-5">

                    <label htmlFor="email" className="text-secondary">
                        Name
                    </label>

                    <input
                        type="name"
                        id="name"
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your name"
                    />

                    <label htmlFor="tel" className="text-secondary">
                        Phone number
                    </label>

                    <input
                        type="phone"
                        id="phone"
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your phone number"
                    />

                    <label htmlFor="email" className="text-secondary">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your email"
                    />

                    <label htmlFor="password" className="text-secondary">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your password"
                    />

                </form>

                <p className="text-secondary">
                    Not created account?{" "}
                    <span className="text-primary cursor-pointer">
                        Sign Up
                    </span>
                </p>

            </div>

        </section>
    );
    return createPortal(modal, document.body);
}

export default Signup