import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  
  console.log('code:',code)
  if (code) {
    try{
      const cookieStore = cookies();
      const supabase = createClient(cookieStore);
      await supabase.auth.exchangeCodeForSession(code);
      return NextResponse.redirect(requestUrl.origin)
    } catch(error){
      return NextResponse.redirect(requestUrl.origin)
    }   
  }
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
