"use client";
import React, { useState } from 'react';
import { useFormik } from "formik";
import { LoginValidations } from '../../helpers/formvalidations';
import { LoginFormInterface } from '../../interface';
import { useRouter } from 'next/navigation';
import login from '../../firebase/auth/login';
import { SecondButtonLoader } from '../../components/Button/buttonload';

const Home = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: LoginValidations,
        onSubmit: async (values: LoginFormInterface) => {
          setLoading(true);
          const { result, error } = await login(values.email, values.password, router);
            // if(result) router.push(`/home`)
            if(error) {
              if(typeof error === "string") {
                setError(error);
                setLoading(false);
                return
              }
            }
            setError("");
            setLoading(false);
            return router.push(`/createblog`);
        },
      });
      const { values, errors, handleChange, handleSubmit, touched } = formik;
  return (
    <div className='h-screen w-full' >
        <div className='h-full flex justify-center items-center w-full' >
            <div className='w-full max-w-[600px] md:px-10 px-5' >
                <h1 className='text-[24px]' >Login</h1>
                <div className='w-full py-4' >
                    <p>Email Address</p>
                    <input onChange={handleChange} name="email" value={values.email} className='outline-none py-4 px-6 rounded-[15px] mt-2 h-[52px] border w-full border-[#000]' />
                    {errors.email && touched.email && (
                        <p className="text-[14px] text-red-500 pt-1">{errors.email}</p>
                    )}
                </div>
                <div className='w-full py-4' >
                    <p>Paasword</p>
                    <input onChange={handleChange} name="password" value={values.password} type='password' className='outline-none py-4 px-6 rounded-[15px] mt-2 h-[52px] border w-full border-[#000]' />
                    {errors.password && touched.password && (
                        <p className="text-[14px] text-red-500 pt-1">{errors.password}</p>
                    )}
                </div>
                {error && <p className="text-[14px] text-red-500 pt-1" >{error}</p>}
                <button type='submit' onClick={()=>handleSubmit()} disabled={loading} className='md:text-[20px] w-[177px] rounded-[1000px] bg-[#CC2630] h-[56px] text-white flex items-center justify-center mt-4' >
                    {loading ? <SecondButtonLoader /> : "Login"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home