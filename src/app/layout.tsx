import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${notoSans.variable} font-sans`}>
        <header className="bg-blue-600 text-2xl text-white p-4 font-bold">PORTFOLIO</header>
        {children}
        <p className="text-base text-gray-700"></p>
        <footer className="bg-gray-100 text-center p-4 text-sm">matsushitak-2417@school.ac.jp</footer>
      </body>
    </html>
  );
}


  
