import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/signin?message=Check email to continue sign in process");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
        action={signUp}
      >
        <label className="text-md text-white" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />

        <label className="text-md text-white" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <label className="text-md text-white" htmlFor="email">
          UID
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          name="email"
          placeholder="UID를 입력해주세요"
          required
        />
        <button
          className="bg-[rgb(255,0,155)] rounded-md px-4 py-2 text-foreground mb-2 mt-6"
          formAction={signUp}
        >
          회원가입
        </button>
        {searchParams?.message && (
          <div>
          <p className="mt-4 p-4 bg-foreground/10 text-white text-center font-bold">
            가입하신 이메일을 확인해주세요
          </p>
          <Link href='/login'><p className="text-white underline text-center">로그인창으로 이동하기</p></Link>
          </div>
        )}
      </form>
    </div>
  );
}
