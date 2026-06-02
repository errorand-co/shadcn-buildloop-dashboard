import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "BuildLoop Dashboard | Shadcn Design System",
  description: "Modern Shadcn/UI Dashboard Design System inspired by BuildLoop",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-zinc-950 text-white">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
