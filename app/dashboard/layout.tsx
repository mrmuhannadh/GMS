import AdminSideNav from "@/components/common/sidenav/adminSideNav";
import { BreadcrumbWithCustomSeparator } from "@/components/common/sidenav/customSeparator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { USER_STATUS } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { Separator } from "@radix-ui/react-separator";
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
    <main className="flex overflow-x-hidden min-h-screen">
      <SidebarProvider className="flex flex-row items-start w-full">
        <AdminSideNav />
        <div className="flex flex-col items-start flex-1">
          <div className="flex items-center">
            <SidebarTrigger className="m-1" />
            <Separator orientation="vertical" className="my-4" />
            <BreadcrumbWithCustomSeparator />
          </div>
          <div className="p-4 w-full">{children}</div>
        </div>
      </SidebarProvider>
    </main>
  );
}
