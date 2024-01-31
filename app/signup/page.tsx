import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SupabaseClient } from "@supabase/supabase-js";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "../../components/Checkbox";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    "use server";
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const okxuid = formData.get("okxuid") as string;
    const nickname = formData.get("nickname") as string;
    const checkbox = formData.get("checkbox")==="on";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const register: any = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    const myuid = register.data.user.id;
    console.log("myuid:", myuid);

    const update = await supabase
      .from("profiles")
      .update({
        email: email,
        okxuid: okxuid,
        updated_at: new Date(),
        nickname: nickname,
        checkbox:checkbox
      })
      .eq("id", myuid);

    console.log("update:", update);

    if (register.error) {
      return redirect("/signup?message=Could not authenticate user");
    }
    return redirect("/login");
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
        <div className="flex justify-center w-full gap-x-2">
          <input
            className="w-1/3 rounded-md  px-4 py-2 bg-white border mb-6"
            name="okxuid"
            value="OKX"
            disabled
          />

          <input
            className="w-2/3 rounded-md px-4 py-2 bg-white border mb-6"
            name="okxuid"
            placeholder="UID를 입력해주세요"
            required
          />
        </div>
        <label className="text-md text-white" htmlFor="email">
          닉네임
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          name="nickname"
          placeholder="OKX 닉네임"
          required
        />
        <div className="flex items-center">
          <input
            id="checkbox"
            name="checkbox"
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
          />
          <label
            htmlFor="checkbox"
            className="ml-2 text-md text-red-500 font-bold"
          >
            자동매매 지표를 무료로 이용하시겠습니까? 자동매매를 이용할 경우는 40%, 수수료 페이백만 이용할 경우 55%의 수수료가 지급됩니다.(변경불가)
          </label>
        </div>
        <button
          className="bg-[rgb(255,0,155)] text-white font-bold mt-6 px-4 py-2 border border-transparent hover:bg-black hover:border-[rgb(255,0,155)] rounded-lg text-md"
          formAction={signUp}
        >
          회원가입
        </button>
        {/* {searchParams?.message && (
          <div>
            <p className="mt-4 p-4 bg-foreground/10 text-white text-center font-bold">
              가입하신 이메일을 확인해주세요
            </p>
            <Link href="/login">
              <p className="text-white underline text-center">
                로그인창으로 이동하기
              </p>
            </Link>
          </div>
        )} */}
      </form>
    </div>
  );
}
