import Topback from '@/components/topback';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center">お問いわせ</h1>
      <form className="bg-white border border-gray-300 rounded-lg p-8 shadow-md w-full max-w-md mb-8">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="message">お問い合わせ内容</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          送信
        </button>
      </form>
      <div className="p-6 text-2xl">
        <Topback />
      </div>
    </div>
  );
}