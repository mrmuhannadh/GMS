import Hero from "@/components/hero";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data: user } = await supabase.auth.getUser();

  console.log(user);
  return (
    <div>
      <main
        className="flex-1 flex flex-col gap-6 px-4"
        suppressHydrationWarning
      ></main>
    </div>
  );
}
