import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../utils/firebase";

import { useRouter } from 'next/router';
import { useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react';

const Login = () =>
{
    
    const route = useRouter();
    const [user, loading] = useAuthState(auth)

    //Sign in with google
    const googleProvider = new GoogleAuthProvider();

    const GoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            route.push("/");
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (user)
        {
            route.push('/');
        } else
        {
            console.log('login')
        }
    }, [user])
    

    return (
    <div className="flex flex-col items-center justify-center h-screen">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/12 min-w-fit">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
            <div
                    onClick={GoogleLogin}
                    className="text-white bg-gray-700 w-full font-bold rounded flex align-middle p-4 gap-2 mt-2 items-center">
                    <button className='flex'>
                        <FcGoogle className='text-2xl pr-2'/>
                        Sign in with Google
                    </button>
            </div>
        </form>
    </div>
    );
    
    
}

export default Login