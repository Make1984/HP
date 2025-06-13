import Link from 'next/link';

export default function Topback() {
  return (
    <div className="text-right">
      <Link href="/" className="text-blue-600 ">
       -TOPページに戻る-
      </Link>
    </div>
  );
}