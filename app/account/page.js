import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import CustomButton from "../../components/CustomButton";
import { userInfo } from "os";

export default async function Login({ searchParams }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const update = await supabase
    .from("profiles")
    .select()
    .eq("email", user?.email);

  const okxuid = update?.data[0]?.okxuid;

  const changeProfile = async (formData) => {
    "use server";

    const email = formData.get("email");
    const okxuid = formData.get("okxuid");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    
    const  data = await supabase
    .from('profiles')
    .update({ okxuid: okxuid })
    .eq('email', user?.email)

    if (data.error) {
      return redirect("/");
    }
    return redirect("/");
      
    
  };

  console.log("userinfo:", user);
  console.log("okxuid:", okxuid);

  return (
    <div className="animate-in flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 ">
      <form
        className=" flex flex-col w-full justify-center gap-2 text-foreground"
        action={changeProfile}
      >
        <label className="text-md text-white" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          name="email"
          placeholder="you@example.com"
          value={user?.email}
          disabled
        />
        <label className="text-md text-white" htmlFor="password">
          UID
        </label>
        <input
          className="rounded-md px-4 py-2 bg-white border mb-6"
          type="okxuid"
          name="okxuid"
          placeholder="UID"
          defaultValue={okxuid}
          required
        />
        <CustomButton title={"수정하기"}></CustomButton>
        <Link href="/"></Link>

        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
