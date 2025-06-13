import Topback from '@/components/topback';
import Button from '@/components/topback';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center">制作作品</h1>
      <div className="text-3xl text-left">
      <div
        className="
          bg-white border border-gray-400
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">制作作品</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
         <div>・モグラ叩きゲーム</div>
         <div>・シューティングゲーム</div>
         <div>・ゲームの格闘家のプロフィール</div>
         <div>・ワードプレスでの擬似的なパン屋のホームページ</div>
         <div>・HTMLの例文ホームページ</div>
         <div>・MAYAによる3DSキャラ制作</div>
         <div>・MAYAでの3DS観覧車</div>
        </div>
      </div>
      </div>
      <div className="p-6 text-2xl">
      <Topback/>
      </div>
    </div>
  );
}