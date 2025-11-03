"use client";

import { useAuth, useUser, useClerk, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();
  const { getToken, isLoaded } = useAuth();
  const router = useRouter();

  const handleGetToken = async () => {
    if (!isLoaded) return;
    const token = await getToken();
    console.log("JWT Token:", token);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <SignedIn>
        <h1 className="text-2xl font-semibold">
          Welcome, {user?.firstName} 👋
        </h1>

        <div className="flex gap-4">
          <button
            onClick={handleGetToken}
            className="px-6 py-2 rounded-sm bg-cyan-600 text-white hover:bg-cyan-700 transition cursor-pointer"
          >
            Get Token
          </button>

          <button
            onClick={() => signOut(() => router.push("/"))}
            className="px-6 py-2 rounded-sm bg-red-600 text-white hover:bg-red-700 transition cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </SignedIn>

      <SignedOut>
        <h1 className="text-2xl font-semibold">
          Hey there! 👋
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/sign-in")}
            className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition cursor-pointer"
          >
            Sign In
          </button>

          <button
            onClick={() => router.push("/sign-up")}
            className="px-6 py-2 rounded-md border border-black text-black hover:bg-gray-100 transition cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </SignedOut>
    </div>
  );
}
