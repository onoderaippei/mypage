export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  demoUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nomige-main",
    title: "Nomige",
    summary: "飲み会向けのWebアプリ",
    description:
      "これまで開発してきたアプリの1つです。シンプルなUIで使いやすさを重視しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "白ベースで見やすいレイアウト",
      "必要機能に絞ったミニマル設計",
      "コンポーネント分割で保守性を向上",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://nomige-uzva.vercel.app/",
    featured: true,
  },
  {
    slug: "nomige-sub",
    title: "Nomige (Variant)",
    summary: "Nomigeの別バージョン",
    description:
      "同系統の構成で開発したバリエーションです。UIと導線を継続的に改善しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "レイアウトと操作導線の改善",
      "再利用可能なUIパーツで実装",
      "軽量な構成で高速表示",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://nomige-uzva.vercel.app/",
    featured: true,
  },
  {
    slug: "syukatukyara",
    title: "Syukatukyara",
    summary: "就活向け支援アプリ",
    description:
      "情報整理と入力体験を重視し、必要な操作をスムーズに行えるよう設計しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "必要情報に集中できる画面設計",
      "フォーム中心のシンプルな体験",
      "拡張しやすいページ構成",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://syukatukyara.vercel.app/",
    featured: true,
  },
  {
    slug: "iza-weld",
    title: "Iza Weld",
    summary: "業務系ユースケースを想定したWebアプリ",
    description:
      "シンプルなUIで、主要フローを短い操作で完結できるように作成しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "ミニマルなコンポーネント設計",
      "操作ステップを最小化",
      "保守しやすい責務分離",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://iza-weld.vercel.app/",
  },
  {
    slug: "izakaya",
    title: "Izakaya",
    summary: "店舗向けユースケースを想定したWebアプリ",
    description:
      "見やすいUIで情報を整理し、操作しやすさを重視して実装したアプリです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "見出しと余白を活かした可読性",
      "要素の再利用を前提とした設計",
      "軽量でスムーズな表示",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://izakaya-cm52.vercel.app/",
  },
  {
    slug: "one-six-bay",
    title: "One Six Bay",
    summary: "シンプルな構成で実装したWebアプリ",
    description:
      "白ベースのUIで情報を整理し、直感的に使えるよう構築したアプリです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "ミニマルなデザイン",
      "画面遷移が分かりやすい情報設計",
      "今後の機能追加を想定した構成",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://1-six-bay-57.vercel.app/",
  },
  {
    slug: "docomo",
    title: "Docomo App",
    summary: "実験的に作成したWebアプリ",
    description:
      "UIの一貫性と保守性を意識しながら、機能を段階的に追加できる設計で作成しています。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "統一感のあるUIルール",
      "拡張前提のディレクトリ構成",
      "再利用しやすいコンポーネント分割",
    ],
    githubUrl: "https://github.com/onoderaippei",
    demoUrl: "https://docomo-u9oi.vercel.app/",
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
