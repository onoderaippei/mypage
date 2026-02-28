export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <p className="text-sm text-gray-500">Contact</p>
        <h1 className="text-3xl font-bold tracking-tight text-black">お問い合わせ</h1>
        <p className="text-gray-700">ご連絡は以下からお願いします。</p>
      </section>

      <section className="space-y-3">
        <a
          href="https://github.com/onoderaippei"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-fit border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          GitHub
        </a>
        <a
          href="mailto:your-email@example.com"
          className="block w-fit border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          メールを送る
        </a>
      </section>
    </div>
  );
}
