import { USER_ROLES, USER_STATUS } from "@/lib/utils";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value),
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options),
            );
          },
        },
      },
    );

    const user = await supabase.auth.getUser();

    const { data: regUser, error: regError } = await supabase
    .from("registered_user")
    .select("*")
    .eq("user_id", user?.data.user?.id)
    .single();

  if (regUser.status !== USER_STATUS.ACTIVE || regUser.user_role === USER_ROLES.MEMBER) {
    //navigate to forbidden
    await supabase.auth.signOut()
    return;
  }

    // protected routes
    if (request.nextUrl.pathname.startsWith("/dashboard") && user.error) {
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }

    if (request.nextUrl.pathname === "/" && !user.error) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return response;
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
