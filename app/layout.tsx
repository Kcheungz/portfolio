import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Kevin — Portfolio",
  description: "IT Generalist • Networking • Automation • Troubleshooting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-zinc-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
