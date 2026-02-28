export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="text-sm text-gray-500">About</p>
        <h1 className="text-3xl font-bold tracking-tight text-black">自己紹介</h1>
        <p className="max-w-3xl text-gray-700">
          フロントエンド開発を中心に、ユーザーにとって分かりやすいUIと保守しやすいコード設計を重視して開発しています。
          要件整理から実装、改善まで一貫して進めるのが得意です。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">強み</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="list-disc ml-5">見通しの良いコンポーネント設計</li>
          <li className="list-disc ml-5">型安全な実装による品質担保</li>
          <li className="list-disc ml-5">小さく改善を重ねる開発スタイル</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-black">技術スタック</h2>
        <p className="text-gray-700">TypeScript / Next.js / React / Tailwind CSS / Node.js / PostgreSQL</p>
      </section>
    </div>
  );
}
