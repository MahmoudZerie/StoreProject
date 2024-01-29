import { ChangeEvent, FormEvent, useState } from "react";
import { LoginValidation } from "../validation/indexLogin";
import ErrorMessage from "../components/errors/ErrorMessage";
import { useNavigate } from "react-router-dom";
  
  const HomePage = () => {
    const navigate = useNavigate();
	const defaultLogin={userName:"",password:""}
	const [loginInfo,setLoginInfo]=useState(defaultLogin);
  const [errors,setErrors]=useState({ userName:"",  password:""})
	const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
		const {value,name}=event.target;
		setLoginInfo({
			...loginInfo,
			[name]:value
		  })
		setErrors({
		  ...errors,
		  [name]:"",
		})
	  } 
     const submitHandler=(event: FormEvent<HTMLFormElement>): void=>{
      event.preventDefault();
	  const {userName,password}=loginInfo;
	  const validationErrors = LoginValidation({ userName, password });
    const Error = Object.values(validationErrors).some(error => error !== "");
        if(Error){
         setErrors(validationErrors);
          return;
        }
         else{
          navigate("/main");
        }
        }

  return (
    <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* Logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://cdn.pixabay.com/photo/2017/08/22/22/11/monogram-2670684_1280.png"
                        alt="logo"
                      />
                        <h4 className="mb-6 mt-5 pb-1 text-2xl font-semibold text-center text-neutral-800 dark:text-neutral-200 border-b-2 border-neutral-500">
  						         Welcom In The MZ Company
						           </h4>
                    </div>

                    <form onSubmit={submitHandler}>
                  <p className="mb-4 font-semibold text-gray-400 dark:text-neutral-200">
                    Please login to your account
                  </p>
                     {/* Username input */}
                        <div className="relative mb-4">
                        <input
                          type="text"
                          name="userName" 
                          className="peer block w-full rounded border text-smt text-gray-400 border-gray-300 bg-transparent px-3 py-3 outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:pt-4 focus:pb-2 dark:placeholder:text-neutral-200 placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder=" "
                          value={loginInfo.userName}
                        onChange={onChangeHandler}
                          />
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="pointer-events-none absolute -mt-1.5 left-3 top-1 text-neutral-500 transition-all duration-200 ease-out peer-focus:top-2 peer-focus:text-blue-500 peer-focus:-translate-y-1 peer-focus:scale-[0.8] dark:text-neutral-200"
                        >
                          Username
                        </label>
                        <ErrorMessage msg={errors.userName}/>
                        </div>

                        {/* Password input */}
                        <div className="relative mb-4">
                        <input
                        type="password"
                        name="password" 
                        className="peer block w-full rounded border text-sm text-gray-400 border-gray-300 bg-transparent px-3 py-3 outline-none transition-all duration-200 ease-linear focus:border-blue-500 focus:pt-4 focus:pb-2 dark:placeholder:text-neutral-200 placeholder:opacity-0"
                        id="exampleFormControlInput11"
                        placeholder=" "
                        value={loginInfo.password}
                        onChange={onChangeHandler}
                        />
                        <label
                          htmlFor="exampleFormControlInput11"
                          className="pointer-events-none absolute -mt-1.5 left-3 top-1 text-neutral-500 transition-all duration-200 ease-out peer-focus:top-2 peer-focus:text-blue-500 peer-focus:-translate-y-1 peer-focus:scale-[0.8] dark:text-neutral-200"
                        >
                          Password
                        </label>
                        <ErrorMessage msg={errors.password}/>
                        </div>
                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center"> 
                        <button type="submit" style={{
                          background:
                          'linear-gradient(to right, #0F0F0F, #232D3F, #005B41, #008170)',
                          }}  className="mb-3 inline-block w-full focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]  active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                          
                          Log in	  
						  				</button>
                        {/* Forgot password link */}
                        <a className="text-blue-500 font-semibold" style={{color:"#005B41"}}>
                          Forgot password?
                        </a>
                      </div>

                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 font-semibold">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded  bg-gradient-to-r from-green-950 to-green-900 px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 active:bg-green-700"
                          >
                          Register
                          </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      'linear-gradient(to right, #0F0F0F, #232D3F, #005B41, #008170)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm ">
                    MZ is a leading programming company at the forefront of technological advancement,
                    specializing in crafting robust software solutions tailored to meet the unique needs of clients.
                    With a passion for innovation, MZ consistently transforms ideas into efficient and scalable code,
                       driving success in the digital realm.<span className="font-semibold">(Zerie)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
