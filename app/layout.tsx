import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vichitra Mohan | Frontend Developer",
  description: "Portfolio of Vichitra Mohan - Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern web technologies",
  keywords: "Frontend Developer, React, Next.js, Tailwind CSS, Web Development, JavaScript",
  authors: [{ name: "Vichitra Mohan", url: "https://linkedin.com/in/vichitra-mohan-933811255/" }],
  creator: "Vichitra Mohan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vichitra-mohan.com",
    title: "Vichitra Mohan | Frontend Developer",
    description: "Portfolio showcasing projects and experience in frontend development",
    siteName: "Vichitra Mohan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vichitra Mohan | Frontend Developer",
    description: "Portfolio showcasing projects and experience in frontend development",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
