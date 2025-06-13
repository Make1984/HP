import Topback from '@/components/topback';
import Button from '@/components/topback';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center">プロフィール</h1>
      <div className="text-3xl text-left">
        <div
        className="
          bg-white border border-gray-400 
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">基本プロフィール</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
         <div>・名　　前：松下　敬太</div>
         <div>・生年月日：2004年10月18日</div>
         <div>・年　　齢：20歳</div>
         <div>・出身地域：岐阜県瑞穂市生まれ</div>
         <div>・趣　　味：ゲーム・漫画で特にドラゴンクエストの様なRPGが好きです。</div>
         <div>・座右の銘：七転び八起き</div>
        </div>
      </div>
      </div>
      <div className="p-6 text-2xl">
      <Topback/>
      </div>
    </div>
  );
}