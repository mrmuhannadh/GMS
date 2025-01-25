import { AppSidebar } from "@/components/app-sidebar";
import TopNav from "@/components/common/topNav";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { createClient } from "@/utils/supabase/server";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";
import { BreadcrumbWithCustomSeparator } from "@/components/common/sidenav/customSeparator";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <SidebarProvider>
              {user && <AppSidebar />}
              <SidebarInset>
                <TopNav />

                <div className="w-full flex flex-col px-4 ">
                  {/* <div className="flex flex-col "> */}
                  {children}
                  {/* </div> */}
                </div>
              </SidebarInset>
            </SidebarProvider>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
