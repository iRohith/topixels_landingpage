import { ThemeProvider } from "@/components/theme-provider";
import { APP_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${APP_NAME} | Create Images and Videos using AI`,
  description: "Create Images and Videos using generative AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "w-full h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextTopLoader color="BlueViolet" showSpinner={false} />
          <Navbar />
          <h1 className="text-destructive text-6xl font-bold text-center">
            [UNDER DEVELOPMENT]
          </h1>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
