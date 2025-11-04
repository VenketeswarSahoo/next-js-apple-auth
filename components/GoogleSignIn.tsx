"use client";

import React, { useState } from "react";
import {jwtDecode} from "jwt-decode";
import { useGoogleAuth } from "@/hooks/useGoogleAuth";

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

export const GoogleSignIn = () => {
  const [user, setUser] = useState<GoogleUser | null>(null);

  const handleLoginSuccess = (token: string) => {
    const decodedUser: GoogleUser = jwtDecode(token);
    setUser(decodedUser);
  };

  useGoogleAuth(handleLoginSuccess);

  return (
    <div className="flex flex-col items-center">
      {!user ? (
        <div 
          id="googleSignInDiv" 
          className="w-full flex justify-center"
        ></div>
      ) : (
        <div className="text-center p-4 bg-gray-50 rounded-lg w-full">
          <img
            src={user.picture}
            alt={user.name}
            className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-white shadow-sm"
          />
          <p className="font-semibold text-gray-900">{user.name}</p>
          <p className="text-gray-600 text-sm">{user.email}</p>
        </div>
      )}
    </div>
  );
};