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
          bg-white border border-gray-400 mb-8
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">取得資格</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
         <div>・全国商業高等学校協会主催 情報処理検定 ２級</div>
         <div>・全国商業高等学校協会主催 ビジネス文書実務検定 １級</div>
         <div>・全国商業高等学校協会主催 簿記実務検定 ３級</div>
         <div>・Microsoft Office Specialist Word 2019 Expert</div>
         <div>・Microsoft Office Specialist Excel 2019 Expert</div>
         <div>・情報検定 情報活用試験 ２級</div>
        </div>
      </div>
      <div
        className="
          bg-white border border-gray-400 
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">勉強中の資格</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
        <div>私はただ今、基本情報情報技術者試験取得のため勉強しております。</div>
        <div>私はこちらの基本情報の科目A試験の免除制度に合格しておりますの</div>
        <div>で後はもう１つの科目B試験に合格する事ができれば基本情報を取得</div>
        <div>できるので今はアルゴリズムの勉強に力を入れております。</div>
        </div>
      </div>
      </div>
      <div className="p-6 text-2xl">
      <Topback/>
      </div>
    </div>
  );
}