import Link from 'next/link';

export default function About() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Aboutページ</h1>
      <Link href="/" className="text-blue-600 underline">
        トップページへ戻る
      </Link>
    </div>
  );
}