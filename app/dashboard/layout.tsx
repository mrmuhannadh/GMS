import { BreadcrumbWithCustomSeparator } from "@/components/common/sidenav/customSeparator";
import { USER_STATUS } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  const { data: regUser, error: regError } = await supabase
    .from("registered_user")
    .select("*")
    .eq("user_id", user?.id)
    .single();

  if (regUser.status !== USER_STATUS.ACTIVE) {
    return;
  }

  return (
    <main className="flex overflow-x-hidden min-h-screen items-start">
      <div className="w-full">
        <BreadcrumbWithCustomSeparator />

        {children}
      </div>
    </main>
  );
}
