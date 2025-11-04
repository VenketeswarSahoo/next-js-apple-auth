// "use client";

// import { useAuth, useUser, useClerk, SignedIn, SignedOut } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function Dashboard() {
//   const { user } = useUser();
//   const { signOut } = useClerk();
//   const { getToken, isLoaded } = useAuth();
//   const router = useRouter();

//   const handleGetToken = async () => {
//     if (!isLoaded) return;
//     const token = await getToken();
//     console.log("JWT Token:", token);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen gap-4">
//       <SignedIn>
//         <h1 className="text-2xl font-semibold">
//           Welcome, {user?.firstName} 👋
//         </h1>

//         <div className="flex gap-4">
//           <button
//             onClick={handleGetToken}
//             className="px-6 py-2 rounded-sm bg-cyan-600 text-white hover:bg-cyan-700 transition cursor-pointer"
//           >
//             Get Token
//           </button>

//           <button
//             onClick={() => signOut(() => router.push("/"))}
//             className="px-6 py-2 rounded-sm bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
//           >
//             Sign Out
//           </button>
//         </div>
//       </SignedIn>

//       <SignedOut>
//         <h1 className="text-2xl font-semibold">
//           Hey there! 👋
//         </h1>
//         <div className="flex gap-4">
//           <button
//             onClick={() => router.push("/sign-in")}
//             className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition cursor-pointer"
//           >
//             Sign In
//           </button>

//           <button
//             onClick={() => router.push("/sign-up")}
//             className="px-6 py-2 rounded-md border border-black text-black hover:bg-gray-100 transition cursor-pointer"
//           >
//             Sign Up
//           </button>
//         </div>
//       </SignedOut>
//     </div>
//   );
// }

import { AppleSignIn } from "@/components/AppleSignIn";
import { GoogleSignIn } from "@/components/GoogleSignIn";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="flex flex-col items-center justify-center h-screen px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue to your account</p>
          </div>
          
          <div className="space-y-4">
            <GoogleSignIn />
            <AppleSignIn />
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              By continuing, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;