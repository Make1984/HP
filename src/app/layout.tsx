import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Link from "next/link";

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
        <footer className="bg-gray-100 text-center p-4 text-sm">
          <nav className="mb-2 space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">TOP</Link>
            <Link href="/profile" className="text-blue-600 hover:underline">プロフィール</Link>
            <Link href="/skill" className="text-blue-600 hover:underline">資格</Link>
            <Link href="/item" className="text-blue-600 hover:underline">作品</Link>
            <Link href="/pr" className="text-blue-600 hover:underline">自己PR</Link>
            <Link href="/answer" className="text-blue-600 hover:underline">お問い合わせ</Link>
          </nav>
          <div>matsushitak-2417@school.ac.jp</div>
        </footer>
      </body>
    </html>
  );
}