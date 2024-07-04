import type { Metadata } from "next";
import { Montserrat } from "@next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/shared/left-sidebar";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Quartz",
  description: "Decentralized Peer-to-Peer Application Based on Matrix Chat Protocol",
  icons: {
    icon: [
      '/favicon.ico?v=4',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${`${montserrat.variable} font-sans`} flex items-start justify-between`}>
        <main>
          <LeftSidebar/>
          <section className="main-container">
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
