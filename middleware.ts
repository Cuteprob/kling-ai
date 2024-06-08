// import { NextResponse } from "next/server";
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // 更新1 只公开部分 route
// // const isPublicRoute = createRouteMatcher(["/sign-in", "/sign-up"]);
// // export default clerkMiddleware((auth, request) => {
// //   if (!isPublicRoute(request)) {
// //     auth().protect();
// //   }
// // });

// // 更新 2：只隐藏部分 route
// const isDashboardRoute = createRouteMatcher([
//   "/dashboard(.*)",
//   "/settings(.*)",
//   "/create(.*)",
// ]);

// const isProtectApiRoute = createRouteMatcher(["/api/summarise"]);

// export default clerkMiddleware((auth, request) => {
//   if (isDashboardRoute(request)) auth().protect();
//   if (isProtectApiRoute(request)) {
//     return NextResponse.json(
//       { code: -2, message: "invalid auth" },
//       {
//         status: 401,
//       }
//     );
//   }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/create", "/(api)(.*)"],
// };

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "fr", "es", "zh", "ja", "ru"],

  // Used when no locale matches
  defaultLocale: "en",

  localePrefix: "as-needed",

  alternateLinks: true,
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(de|en)/:path*"],
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)",
  ],
};
