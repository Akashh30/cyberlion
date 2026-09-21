import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useActionState } from "react";


const initialState = {
        success:false,
        message:"",
        errors: {},
};


function validateForm(formData){
      const name = formData.get("name")?.trim() || "";
      const password = formData.get("password")?.trim() || "";
      const email =formData.get("email")?.trim() || "";
      const phone = formData.get("phone")?.trim() || ""
      const errors = {};
      if(!name){
        errors.name = "Name is required."
      } else if(name.length < 3){
        errors.name = "Name must contain at least 3 characters."
      } else if (!/^[a-zA-Z ]+$/.test(name)){
        errors.name = "Name can contain only letters and spaces."
      }
      
      if(!email){
        errors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        errors.email = "Please enter a valid email address."
      }

      if(!phone){
        errors.phone = "Phone number is required."
      } else if (!/^\d{10}$/.test(phone)){
        errors.phone = "Phone number must contain exactly 10 digits."
      }
      
      if (!password){
        errors.password = "Password is required."
      } else if(password.length < 8){
        errors.password = "Password must contain at least 8 characters."
      } else if(!/[A-Z]/.test(password)){
        errors.password = "Password must contain at least one uppercase letter."
      } else if(!/[a-z]/.test(password)){
        errors.password = "Password must contain at least one lowercase letter."
      } else if(!/\d/.test(password)){
        errors.password = "Password must contain at least one number."
      }

      return errors;
}


async function signupAction(previousState, formData) {
   const errors = validateForm(formData);
   
   if(Object.keys(errors).length > 0){
    return{
        success: false,
        message: "Please correct the errors below",
        errors,
    }
   }

   return {
    success: true,
    message: "Account created sucessfully!",
    errors: {},
   };
}

async function loginAction(previousState, formData) {
    const email = formData.get("email")?.trim() || "";
    const password = formData.get("password")?.trim() || "";

    const errors = {};

    if (!email) {
        errors.email = "Email is required.";
    }

    if (!password) {
        errors.password = "Password is required.";
    }

    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "",
            errors: errors,
        };
    }

    return {
        success: true,
        message: "Logged in successfully!",
        errors: {},
    };
}


function Login({onClose}) {
    const [signupState, signupActionDispatch, isSignupPending] = useActionState(
    signupAction,
    initialState
    );

    const [loginState, loginActionDispatch, isLoginPending] = useActionState(
    loginAction,
    initialState
    );
    const [signup,setSignup] = useState(false)
    const [login, setLogin] = useState(true)
    const toggle1 =()=>{
        setLogin(false);
        setSignup(true);  
    }
    const toggle2 =()=>{
        setLogin(true);
        setSignup(false);
    }

    const [values, setValues] = useState({
        name: "",
        phone:"",
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({});

    const [touched, setTouched] = useState({})

    const [step, setStep] = useState(1);

    function validateField(name,value){
        const error = "";

        switch (name){
            case "name":
                if(!value.trim()){
                    return "Name is required.";
                }
                if(value.trim().length < 3){
                    return "Name must contain at least 3 characters.";
                }
                if(!/^[a-zA-Z]+$/.test(value.trim())){
                    return "Name can contain only letters and spaces."
                }
                return "";

            case "phone":
                if(!value.trim()){
                    return "Phone number is required.";
                }
                if(!/^\d+$/.test(value)){
                    return "Phone number can contain only digits.";
                }
                if(value.length !== 10){
                    return "Phone umber must contain exactly 10 digits.";
                }
                return "";

            case "email":
                if(!value.trim()){
                   return "Email is required." 
                }
                if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())){
                    return "Please enter a valid email address."
                }
                return "";

            case "password":
                if(!value){
                    return "Password is required.";
                }

                if (value.length < 8) {
                    return "Password must contain at least 8 characters.";
                }
                
                if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter.";
                }
                
                if (!/[a-z]/.test(value)) {
                    return "Password must contain at least one lowercase letter.";
                }
                
                if (!/\d/.test(value)) {
                    return "Password must contain at least one number.";
                }
                return "";
            default:
                return "";
            }
        }


    const handleNext =()=>{
        const fields = ["name", "phone", "email", "password"];
        const currentField = fields[step-1];
        const error = validateField(currentField, values[currentField]);

        setTouched((previousTouched) => ({
            ...previousTouched,
            [currentField]: true,
        }));

        setErrors((previousErrors)=> ({
            ...previousErrors,
            [currentField]: error,
        }));

        if (error){
            return;
        }

        if(step<4){
            setStep(step+1);
        }
    }
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((previousValues) => ({
            ...previousValues,
            [name]: value,
        }));
        
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors((previousErrors) => ({
                ...previousErrors,
                [name]: error,
            }));
        }
    };

    const handleBlur =(e)=>{
        const {name,value} = e.target;
        setTouched((previousTouched)=>({
            ...previousTouched,
            [name]:true,
        }))

        const error = validateField(name, value)

        setErrors((previousErrors)=>({
            ...previousErrors,
            [name]:error,
        }))

    }
    
    useEffect(()=>{
        if(loginState.success){
            alert(loginState.message)
            window.location.href="/"
        }

        if(signupState.success){
            alert(signupState.message)
            window.location.href="/"
        }
    },[loginState,signupState])

    
    const modal = (
        <>
        {login && ( 
        <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">

            <div className="w-[90vw] max-w-sm h-auto py-10 px-15 bg-black/95 border border-primary rounded-3xl relative shadow-[0_0_5px_var(--color-primary)]">
                
                <button className="absolute top-5 right-5 text-secondary hover:text-primary text-xl cursor-pointer" onClick={onClose}>
                 <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1 className="text-secondary text-3xl font-bold text-center mb-3">
                    Sign In
                </h1>
        
                <p className="bg-gradient-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent text-base font-light text-center mb-8">
                   Welcome back, Unleash the <br/> power of technology.
                </p>             
                
                <form action={loginActionDispatch} className="flex flex-col gap-2 mb-5">
                  
                    <label htmlFor="email" className="text-secondary">
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your email"
                        name="email"
                    />
                    {(errors.email || loginState.errors.email)&&(<span className="text-primary">{errors.email || loginState.errors.email}</span>)}
                    
                    <label htmlFor="password" className="text-secondary">
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your password"
                        name="password"
                    />

                    {(errors.password || loginState.errors.password)&&(<span className="text-primary">{errors.password || loginState.errors.password}</span>)}
                    <div className="font-medium text-secondary underline absolute right-16 bottom-40 text-xs">Forgot Password?</div>
                   <div className="mt-6">
                    <button  className="py-4 px-4 border-1 border-primary/40 w-full border-primary text-secondary rounded-2xl text-lg bg-white/6 font-extrabold shadow-[0_0_5px_var(--color-primary)]" disabled={isLoginPending}>{ isLoginPending? "Submitting":"Log In"}</button>
                    {/* {loginState.success && (<p>{loginState.message}</p>)} */}
                   </div>

                </form>

                <p className="text-secondary">
                    Not created account?{" "}
                    <span className="text-primary cursor-pointer" onClick={toggle1}>
                        Sign Up
                    </span>
                </p>

            </div>

        </section>
        )}

        { signup && ( 
          <section className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">

            <div className="w-[90vw] max-w-sm h-auto py-10 px-5 md:px-10 bg-black/95 border border-primary shadow-[0_0_5px_var(--color-primary)] rounded-3xl relative">
                <button className="absolute top-5 right-5 text-secondary hover:text-primary text-xl cursor-pointer" onClick={onClose}>
                 <FontAwesomeIcon icon={faXmark} />
                </button>
                <h1 className="text-secondary text-2xl md:text-3xl font-bold text-center mb-3">
                    Sign Up
                </h1>
        
                <p className="text-secondary text-base font-light text-center mb-8">
                   Join Cyberlion and unlock the <br/> power of innovation.
                </p>             

                <form action={signupActionDispatch} className="flex flex-col gap-2 mb-5">
                    <input type="hidden" name="name" value={values.name} />
                    <input type="hidden" name="phone" value={values.phone} />
                    <input type="hidden" name="email" value={values.email} />

                    {step === 1 && (
                      <>
                        <label htmlFor="email" className="text-secondary">
                        Name
                        </label>

                        <input
                        type="name"
                        id="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your name"
                        name="name"
                        />
                        {(errors.name || signupState.errors.name)&&(<span className="text-primary">{errors.name || signupState.errors.name}</span>)}
                      </>
                    )}

                    {step === 2 && (
                        <>
                        <label htmlFor="tel" className="text-secondary">
                        Phone number
                        </label>
                        
                        <input
                        type="phone"
                        id="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your phone number"
                        name="phone"
                        />

                        {(errors.phone || signupState.errors.phone)&&(<span className="text-primary">{errors.phone || signupState.errors.phone}</span>)}

                        </>
                    )}
                    
                    {step ===3 && (
                        <>
                        <label htmlFor="email" className="text-secondary">
                        Email
                        </label>
                        
                        <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your email"
                        name="email"
                        />
                        {(errors.email || signupState.errors.email)&&(<span className="text-primary">{errors.email || signupState.errors.email}</span>)}
                        </>
                    )}

                    {step === 4 && (
                        <>
                        <label htmlFor="password" className="text-secondary">
                        Password
                        </label>

                        <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-4 py-3 bg-white/5 border border-secondary/20 rounded-xl text-secondary outline-none focus:border-primary"
                        placeholder="Enter your password"
                        name="password"
                        />

                        {(errors.password || signupState.errors.password)&&(<span className="text-primary">{errors.password || signupState.errors.password}</span>)}
                        </>
                    )}
                    
                    <div className="mt-6">
                        {step < 4 ? (
                            <button  type="button" className="py-4 px-4 border-1 border-primary/40 w-full border-primary text-secondary rounded-2xl text-lg bg-white/6 font-extrabold shadow-[0_0_5px_var(--color-primary)]" disabled={isSignupPending} onClick={handleNext}>{ isSignupPending? "Submitting":"Next"}</button>
                        ): (
                            <button  type="submit" className="py-4 px-4 border-1 border-primary/40 w-full border-primary text-secondary rounded-2xl text-lg bg-white/6 font-extrabold shadow-[0_0_5px_var(--color-primary)]" disabled={isSignupPending}>{ isSignupPending? "Submitting":"Sign Up"}</button>
                            
                        )}
                        {/* {signupState.success && (
                                <p className="text-gren-500 text-center mt-3">{signupState.message}</p>
                        )} */}
                    
                   </div>
                </form>

                <p className="text-secondary">
                    Already created account?{" "}
                    <span className="text-primary cursor-pointer" onClick={toggle2}>
                        Sign in
                    </span>
                </p> 


            </div>

        </section>
        )}
   </>
)

return createPortal(modal, document.body);
};

export default Login;