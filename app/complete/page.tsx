import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@mui/material";
import Ask from "@/components/Ask";
export default function Complete({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex flex-col w-full justify-center items-center text-white space-y-5">
      <h1>출금신청이 완료되었습니다!</h1>
      <p>빠른 시일내에 조치하겠습니다.</p>
    </div>
  );
}
