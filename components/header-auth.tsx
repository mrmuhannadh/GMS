import { signOutAction } from "@/app/actions";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";
import { Button } from "./ui/button";

export default async function AuthButton() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user ? (
    <div className="flex w-full items-center justify-between gap-4 ">
      <NavigationMenu>
        <NavigationMenuItem>GYM 28
          
        </NavigationMenuItem>
      </NavigationMenu>
      <div>
        <ThemeSwitcher />
        <Button type="submit" variant={"outline"} onClick={signOutAction}>
          Sign out
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"outline"}>
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild size="sm" variant={"default"}>
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
