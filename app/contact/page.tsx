import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-12 py-24">
        <p className="text-sm text-gray-500">Contact</p>
        <h1 className="text-6xl font-semibold tracking-tight text-black">お問い合わせ</h1>
        <p className="text-lg leading-relaxed text-gray-500">ご連絡は以下からお願いします。</p>
      </section>

      <section className="space-y-3 py-24">
        <a
          href="https://github.com/onoderaippei"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-fit rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          GitHub
        </a>
        <a
          href="mailto:your-email@example.com"
          className="block w-fit rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          メールを送る
        </a>
      </section>
    </div>
  );
}
