// // proxy.ts
// import { clerkMiddleware, createRouteMatcher, auth } from "@clerk/nextjs/server";

// const publicRoutes = createRouteMatcher([
//   "/",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
// ]);

// export default clerkMiddleware(async (authCtx, req) => {
//   // if it's *not* a public route, protect it
//   if (!publicRoutes(req)) {
//     await authCtx.protect();  // note: async usage
//   }
  
//   // You can add additional logic here if needed
// });

// export const config = {
//   matcher: [
//     // adapt these as needed:
//     '/((?!_next|[^?]*\\.(?:html?|css|js|png|jpg|svg)).*)',
//     '/api/(.*)'
//   ],
// };


// proxy.ts (disabled)
export const config = {
  matcher: [],
};
export default function noop() {}
