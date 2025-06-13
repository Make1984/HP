import Button from '@/components/topback';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-4xl font-bold mb-5">TOPページ</h1>
      <div className="text-3xl text-left">
        <div className='mb-5'>
          初めまして私は、<br />
          日本総合ビジネス専門学校に在籍している松下敬太と申します。<br/>
        </div>
        <div className='mb-5'>
          まず最初にこのサイトを閲覧していただきまして誠にありがとう<br/>
          ございます。
        </div>
        <div className='mb-5'>
          このサイトは私の自身のプロフィールを簡易的にまとめたものと<br/>
          なっております。
        </div>
        <div className='mb-5'>
          こちらのサイトを通じて少しでも私という人間がどの様な考え方<br/>
          をして生きている人間だと理解し、知っていただけると嬉しいで<br/>
          す！！
        </div>
        <h1 className="text-4xl font-bold mb-5 text-center">概要</h1>
      <div className="text-3xl text-left">
        <div
        className="
          bg-white border border-gray-400 
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <div className="space-y-3">
         <div className="mt-3 text-2xl">
          ・<Link href="/profile" className="text-blue-600 underline">
            プロフィールページへ
          </Link>
        </div>
        <div className="mt-3 text-2xl">
          ・<Link href="/skill" className="text-blue-600 underline">
            取得資格・勉強中の資格一覧へ
          </Link>
        </div>
        <div className="mt-3 text-2xl">
          ・<Link href="/item" className="text-blue-600 underline">
            制作した作品一覧へ
          </Link>
        </div>
        <div className="mt-3 text-2xl">
          ・<Link href="/pr" className="text-blue-600 underline">
            自己PRページへ
          </Link>
        </div>
        <div className="mt-3 text-2xl">
          ・<Link href="/answer" className="text-blue-600 underline">
            お問い合わせへ
          </Link>
        </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}