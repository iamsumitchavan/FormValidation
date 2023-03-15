import React from "react";
import {Link} from 'react-router-dom'
import {Formik, Form, useFormik} from 'formik'
import * as Yup from 'yup';
import Input from "./Input";





function LogInPage() {


    function handleDataSent(values) {

        console.log("values are ",values.email,values.password)


    }

   const Schema =  Yup.object().shape( {

        email : Yup.string().email().required(),
        password : Yup.string().min(8,"password is too short").max(12,"password is too long"),
    });


    

    const initialValues =  {

        email : "",
        password : "",
    };









    return(

        <div>

           

            <Formik initialValues={initialValues}
                validationSchema = {Schema}
                onSubmit = {handleDataSent}
                validateOnMount = {true}>

                <div className="flex flex-col justify-center  items-center h-screen py-20 md:py-10 lg:py-20">
            <Form  className=" shadow-lg md:py-5 ">
              
                <h1 className="text-center text-3xl font-bold py-10 ">Log in CartApp</h1>
                
                    <Input label = "Eamil"
                    id = "email"
                    type = "email"
                    name = "email"
                    placeholder = "email"
                    autoComplete = "email"
                   required
                   
                    className=" border border-black p-2 rounded-lg w-60
                    lg:w-80 "/>
               
                  <Input
                  label = "password"
                  id="password" 
                  name = "password"
                  type = "password"
                    placeholder = "password"
                    autoComplete = "password"
                   required
                  
                   
                   
                    className=" border border-black p-2 rounded-lg w-60
                    lg:w-80 " />
               

                  
             

                <div className=" py-10 flex flex-col justify-center w-full gap-2 items-center px-10 md:gap-1 md:py-2
                lg:justify-end lg:items-end ">

                    <button  type="submit" className="hover:active:bg-indigo-400 p-2 w-60 bg-indigo-600 text-white rounded-lg lg:w-40">log in</button>
                    <button className="hover:active:bg-indigo-400 p-2 w-60 bg-indigo-600 text-white rounded-lg lg:w-40">Reset</button>
                     
                    <Link to = "/signup/" className="text-indigo-600 font-normal text-lg text-end">create an account ?</Link>
                
                </div>
             
                </Form>
            
            </div>
        </Formik>
        </div>
    )
}
export default LogInPage;