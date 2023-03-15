import React from "react";





function SignUppage() {




    return(

        <div>
              <form action="">
                        <div className="  ">

                            <div className=" p-10 space-y-5 shadow-lg flex flex-col justify-center h-screen items-center">

                                <h1 className="text-3xl text-indigo-500">create an account</h1>
                                <div className="flex flex-col  space-y-4" >

                                <span className = "font-bold">User Name(can be Email Address)</span>
                                <input type="name" 
                             className="rounded-lg border border-black p-2 w-72" 
                             value=""
                              placeholder="Enter name" />
                              </div>

                              <div className="flex flex-col space-y-4">
                              <span className = "font-bold">Password</span>
                             <input type="name" 
                             className="rounded-lg border border-black p-2 w-72" 
                             value=""
                              placeholder="Enter Email" />

                              </div>
                            
                              <div className="flex flex-col space-y-4" >
                              <span className = "font-bold">ReEnter Password</span>
                              <input type="name" 
                             className="rounded-lg border border-black p-2 w-72" 
                             value=""
                              placeholder="Enter password" />
                              </div>
                              <div className="flex flex-col space-y-4" >
                                    <span className = "font-bolod">
                                        Email Address
                                    </span>

                                    <input type="name" 
                                    className="rounded-lg border border-black p-2 w-72" 
                                    value=""
                                     placeholder="Enter password" />
                                    
                              
                              </div>

                              <div className="flex flex-col space-y-4">
                              <span className = "font-bold">Re-Enter Email Address</span>
                             <input type="name" 
                             className="rounded-lg border border-black p-2 w-72" 
                             value=""
                              placeholder="Enter password" />
                              </div>
                            </div>
                             
                        </div>
              </form>
        </div>
    )
}

export default SignUppage