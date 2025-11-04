import { useEffect } from "react";

declare global {
  interface Window {
    google?: any;
  }
}

export function useGoogleAuth(onSuccess: (token: string) => void) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google?.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        callback: (response: any) => {
          onSuccess(response.credential);
        },
      });
      window.google?.accounts.id.renderButton(
        document.getElementById("googleSignInDiv"),
        { 
          theme: "outline", 
          size: "large",
          width: 320,
          shape: "pill"
        }
      );
    };
    document.body.appendChild(script);
  }, [onSuccess]);
}