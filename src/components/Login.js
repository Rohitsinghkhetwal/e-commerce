import React from "react";

const Login = () => {
  return (
    <div>
        <h1 className="flex flex-col items-center pt-10 text-4xl font-bold">Sign in to your account</h1>
   
    <div className="flex flex-wrap justify-center shadow-2xl mx-52 mt-5">
        
        <div className="w-full max-w-sm">
            <form className="shadown-md bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-5">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email address
                    </label>
                    <input type='text' className="shadow appearance-none border rounded w-full py-2 px-2" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input type='password' className="shadow appearance-none border rounded w-full py-2 px-2" />
                </div>
                <div className="flex item-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 rounded font-bold py-2 px-4 w-56">Sign in</button>

                </div>

            </form>
        </div>
      
    </div>
    </div>
  
  );
 
};

export default Login;
