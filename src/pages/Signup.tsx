import { useFormik } from "formik";
import { SignupValidationSchema } from "../utils/validationScheme";
import { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

function Signup() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setSubmitted(true);
      resetForm();
    },
    validationSchema: SignupValidationSchema
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors
  } = formik;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FF7979]">
      
  
      

        {submitted ? (
      <div className="text-center">
      <p className="text-white text-3xl mt-[-150px] font-extrabold mx-auto">Thank you!</p>
    </div>
    
        ) : (  
        <>
        <div className="w-[327px] text-center h-[88px] bg-[#5E54A4] rounded-lg flex flex-col justify-center items-center  md:w-[540px] md:h-[60px] ">
            <h1 className="w-[194px] h-[52px] text-white text-lg md:w-[368px] md:pt-[12px]">Try it free 7 days then $20/mo. thereafter</h1>
          </div><div className="w-[327px] mt-[20px] h-[532px] bg-white  rounded-xl md:w-[540px] md:h-[495px]">
              <form className="w-80" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4 pt-[20px]">
                  <input
                    value={values.firstName}
                    name="firstName"
                    id="firstName"
                    className={`bg-white border-2 ml-[20px] md:w-[460px] md:h-[56px] md:ml-[36px] text-black text-lg border-gray-200 py-2 px-3 rounded-lg w-[279px] h-[56px]  ${errors.firstName ? 'border-red-500 bg-red-100' : ''}`}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="First Name" />
                  {errors.firstName && <p className="text-red-700   md:ml-[50px] ml-[110px]">{errors.firstName}</p>}
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    value={values.lastName}
                    name="lastName"
                    id="lastName"
                    className={`bg-white border-2 ml-[20px] md:w-[460px] md:h-[56px] md:ml-[36px]  text-black text-lg border-gray-200 py-2 px-3 rounded-lg w-[279px] h-[56px] ${errors.lastName ? 'border-red-500 bg-red-100' : ''}`}
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Last Name" />
                  {errors.lastName && <p className="text-red-700  md:ml-[50px] ml-[110px]">{errors.lastName}</p>}
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    value={values.email}
                    id="email"
                    name="email"
                    className={`bg-white border-2 text- md:w-[460px] md:h-[56px] md:ml-[36px] text-lg ml-[20px] mt-[15px] border-gray-200 py-2 px-3 rounded-lg w-[279px] h-[56px] ${errors.email ? 'border-red-500 bg-red-100' : ''}`}
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email Address" />
                  {errors.email && <p className="text-red-700  md:ml-[50px]  ml-[110px]">{errors.email}</p>}
                </div>
                <div className="flex flex-col mb-4">
                  <input
                    id="password"
                    name="password"
                    value={values.password}
                    className={`bg-white border-2 border-gray-200 md:w-[460px] md:h-[56px] md:ml-[36px] text-black text-lg ml-[20px] mt-[15px] py-2 px-3 rounded-lg w-[279px] h-[56px] ${errors.password ? 'border-red-500 bg-red-100' : ''}`}
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password" />
                  {errors.password && <p className="text-red-700  ml-[110px] md:ml-[50px]" >{errors.password}</p>}
                </div>
                <button type="submit" className="bg-[#38CC8B] w-[279px]  md:w-[460px] md:ml-[33px] h-[56px] ml-[20px] rounded-xl  text-white font-bold py-2 px-4 ">
                  CLAIM YOUR FREE TRIAL
                </button>
              </form>
            </div></>
        )}
      </div>
  );
}

export default Signup;
