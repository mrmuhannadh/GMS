import { signOutAction } from "@/app/actions";
import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from "../ui/button";
import { BreadcrumbWithCustomSeparator } from "./sidenav/customSeparator";
import { ThemeSwitcher } from "../theme-switcher";

const TopNav: React.FC = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      {user ? (
        <div className="flex  w-full items-center gap-2 px-4 justify-between">
          <SidebarTrigger className="-ml-1" />

          <div className="flex w-full items-center justify-between gap-4 ">
            <NavigationMenu>
              <NavigationMenuItem>GYM 28</NavigationMenuItem>
            </NavigationMenu>
            <div>
              <ThemeSwitcher />
              <Button type="submit" variant={"outline"} onClick={signOutAction}>
                Sign out
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-4 w-full items-end justify-end mr-2 pt-2">
          <ThemeSwitcher />
          <Button asChild size="sm" variant={"outline"}>
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild size="sm" variant={"default"}>
            <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      )}
    </header>
  );
};

export default TopNav;
