import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CustomButton from "../../components/CustomButton";

export const metadata = {
  icons:{
    icon:'images/icon.png'
  },
  title: '트레이딩 부스터! 차트지표와 페이백을 동시에',
  openGraph: {
    title: '트레이딩 부스터! 차트지표와 페이백을 동시에',
    url: 'https://www.tradingboost.io/',
    siteName: 'https://www.tradingboost.io/',
    images: [
      {
        url: 'https://wpcdjihluvirgbyqussd.supabase.co/storage/v1/object/public/images/ogImage.png', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'ko_Kr',
    type: 'website',
  },
}

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

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="animate-in flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ">
      <form
        className=" flex flex-col w-full justify-center gap-2 text-foreground"
        action={signIn}
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
        {/* <button className="bg-[rgb(255,0,155)] rounded-md px-4 py-2 text-foreground mb-2">
          로그인
        </button> */}

        {/* <button
          formAction={signUp}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2 bg-white"
        >
          회원가입
        </button> */}
        {/* <button className="bg-[rgb(255,0,155)] text-white font-bold ppx-4 py-2 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg text-md">
          로그인
        </button> */}
        <CustomButton title={"로그인"}></CustomButton>
        <Link href="/signin"></Link>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
      <div className="w-full">
        <Link href={"/signup"}>
          <button className="text-custom-pink border border-foreground/20 rounded-md px-4 py-2 w-full border-none underline">
            회원가입
          </button>
        </Link>
      </div>
    </div>
  );
}
