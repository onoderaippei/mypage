import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-12 py-24">
        <p className="text-sm text-gray-500">About</p>
        <h1 className="text-6xl font-semibold tracking-tight text-black">自己紹介</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-gray-500">
          フロントエンド開発を中心に、ユーザーにとって分かりやすいUIと保守しやすいコード設計を重視して開発しています。
          要件整理から実装、改善まで一貫して進めるのが得意です。
        </p>
      </section>

      <section className="space-y-12 py-24">
        <h2 className="text-xl font-semibold text-black">強み</h2>
        <ul className="space-y-3 leading-relaxed text-gray-500">
          <li className="list-disc ml-5">見通しの良いコンポーネント設計</li>
          <li className="list-disc ml-5">型安全な実装による品質担保</li>
          <li className="list-disc ml-5">小さく改善を重ねる開発スタイル</li>
        </ul>
      </section>

      <section className="space-y-12 py-24">
        <h2 className="text-xl font-semibold text-black">技術スタック</h2>
        <p className="text-lg leading-relaxed text-gray-500">
          TypeScript / Next.js / React / Tailwind CSS / Node.js / PostgreSQL
        </p>
      </section>
    </div>
  );
}
