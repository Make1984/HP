import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold mb-8">TOPページ</h1>
      <div className="text-3xl text-left max-w-xl w-full mb-8">
        <p className="mb-6">
          初めまして、私は日本総合ビジネス専門学校に在籍している松下敬太と申します。
        </p>
        <p className="mb-6">
          このサイトは私のプロフィールを簡単にまとめたものです。
        </p>
        <p className="mb-4">
          サイトを通じて少しでも私の考え方や人柄を知っていただけると嬉しいです！
        </p>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-center w-full">概要</h2>
      <div className="bg-white border border-gray-400 rounded-lg p-6 shadow-sm w-full max-w-xl">
        <ul className="space-y-2 text-3xl">
          <li>
            ・<Link href="/profile" className="text-blue-600 underline">プロフィールページへ</Link>
          </li>
          <li>
            ・<Link href="/skill" className="text-blue-600 underline">取得資格・勉強中の資格一覧へ</Link>
          </li>
          <li>
            ・<Link href="/item" className="text-blue-600 underline">制作した作品一覧へ</Link>
          </li>
          <li>
            ・<Link href="/pr" className="text-blue-600 underline">自己PRページへ</Link>
          </li>
          <li>
            ・<Link href="/answer" className="text-blue-600 underline">お問い合わせへ</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}