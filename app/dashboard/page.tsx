import MembersList from "@/components/dashboard/members_list";
import OverviewCards from "@/components/dashboard/overview_cards";
import { PlayersSummery } from "@/components/dashboard/players_summery";
import { SummeryChart } from "@/components/dashboard/summery_bar_chart";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-2">
      {/* <div className="w-full">
        <div className="bg-accent text-sm p-3 px-5 rounded-md text-foreground flex gap-3 items-center">
          <InfoIcon size="16" strokeWidth={2} />
          Welcome to GYM 28
        </div>
      </div> */}
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div>
          <OverviewCards />

          <div className="grid md:grid-cols-2 w-full gap-4 mt-4">
            <PlayersSummery />
            <SummeryChart />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <MembersList />
        </div>
      </div>
    </div>
  );
}
