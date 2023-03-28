import Link from "next/link";

import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
 

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <div>
      <nav class="bg-gray-700 p-4 flex justify-between">
        <Link href="/">
          <div className="flex items-center">
            {/* <img src={'../public/next.svg'} alt="Logo" class="h-8 mr-2"> */}
            <h1 className="text-white font-bold text-lg mt-2">Together</h1>
          </div>
        </Link>

        {user ? 
          <div className="flex items-center justify-end">
            <Link href="/post">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"> 
                Post
              </button>
            </Link>
            
            

            <Link href="/dashboard">
              <div className="rounded-full bg-slate-200">
                <img
                  className="w-12 rounded-full cursor-pointer"
                  src={user.photoURL}
                />
              </div>
            </Link>
          </div>
          :
          <div>
            <Link href={"/auth/login"}>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Log in
              </button>
            </Link>

          </div>
          
        }
      </nav>
    </div>
   
  );
}