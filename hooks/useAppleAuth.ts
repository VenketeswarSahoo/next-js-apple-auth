import { useEffect } from "react";

declare global {
  interface Window {
    AppleID: any;
  }
}

export function useAppleAuth(clientId: string) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
    script.async = true;
    script.onload = () => {
      try {
        window.AppleID.auth.init({
          clientId,
          scope: "name email",
          redirectURI: "https://eye-scan.synapsismedical.com/api/auth/apple/callback",
          usePopup: true,
        });
      } catch (err) {
        console.warn("Apple SDK not initialized (developer access required).", err);
      }
    };
    document.body.appendChild(script);
  }, [clientId]);
}
