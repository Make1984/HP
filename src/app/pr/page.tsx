import Topback from '@/components/topback';
import Button from '@/components/topback';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl font-bold mb-8 text-center">自己PR</h1>
      <div className="text-3xl text-left">
      <div
        className="
          bg-white border border-gray-400 mb-8
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">長所</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
        <div>私はの長所は向上心です。</div>
        <div>例えば、私はコンビニエンスストアでのアルバイトを５年間続けてお</div>
        <div>りますが仕事を初めた頃は中々業務を覚える事ができずに、周囲の方</div>
        <div>に比べると業務が遅れておりました。</div>
        <div>私はこのことを改善するために、上司や先輩方のアドバイスと自身の</div>
        <div>行動をメモに取ることを心掛けて内容を見比べることによって自身の</div>
        <div>改善点や実行すべき行動を調べ実行してまいりました。</div>
        <div>このことを繰り返すうち仕事を覚える事ができ今では私の方から後輩</div>
        <div>の方々にアドアイスや指示を送れるほどとなりました。</div>
        <div>私はこのことで目標を達成するために自己研鑽を重ねる向上心を身に</div>
        <div>付ける事ができました。</div>
        </div>
      </div>
      <div
        className="
          bg-white border border-gray-400 mb-8
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">強み</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
        <div>私はの強みは困難にぶつかっても止まらない粘り強さだと考えており</div>
        <div>ます。</div>
        <div>例えば、私は学生時代剣道をしておりましたが、初めた時期が小学校</div>
        <div>４年生で初めたこともあり、周囲の方々が有段者や経験者の方々ばか</div>
        <div>りで練習についていくのも大変でした。</div>
        <div>しかし、自身の粘り強さを活かし必死に合同練習について行ったり、</div>
        <div>家での自己練習をすることにより少しずつ体力をつけて周囲の方々に</div>
        <div>ついていける様になりまして、試合の方にも出させていただき何度か</div>
        <div>勝利する事ができる様になりました。</div>
        <div>私はこのことで自身の強みの粘り強さに気づく事ができまいした。</div>
        </div>
      </div>
      <div
        className="
          bg-white border border-gray-400 mb-8
          rounded-lg p-6 shadow-sm transition-all duration-300 
        ">
        <h2 className="text-3xl font-semibold mb-2">学生時代力を入れたこと</h2>
        <hr className="border-t border-gray-300 mb-1" />
        <div className="space-y-3">
        <div>学生時代に力を入れたことは資格取得に力を入れました。</div>
        <div>私は、専門学校に入学するまでITに関する勉強をしておらず何も目標</div>
        <div>として勉強をしていくのか悩んでおりました。</div>
        <div>そこで、先生方に薦めていただいた情報活用試験３級に合格すること</div>
        <div>を目標として勉強を初めました。</div>
        <div>勉強方法といたしましては、日に１時間ほどは過去問題や参考書など</div>
        <div>を繰り返し行うことを心がけて勉強をしていきました。</div>
        <div>このことを繰り返していくことで、入学してから３ヶ月ほどで情報活</div>
        <div>用試験に合格する事ができました。さらには、その半年後には情報活</div>
        <div>用試験２級にも合格する事ができました。</div>
        <div>私はこの事で、未経験の分野にも臆せず挑戦するチャレンジ精神を身</div>
        <div>に付ける事ができました。</div>
        <div>私の今後の目標としては、基本情報技術者試験に在学中に合格するこ</div>
        <div>とをです。</div>
        </div>
      </div>
      </div>
      <div className="p-6 text-2xl">
      <Topback/>
      </div>
    </div>
  );
}