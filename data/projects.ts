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
    slug: "taskflow",
    title: "TaskFlow",
    summary: "チームの進捗を可視化するタスク管理アプリ",
    description:
      "日次業務を整理し、担当者ごとのステータスを一目で確認できるタスク管理アプリです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    highlights: [
      "フィルター付きボードUIでタスク探索を高速化",
      "権限ごとに表示を切り替えるシンプルなアクセス制御",
      "再利用しやすいフォームコンポーネントで機能追加を容易に設計",
    ],
    githubUrl: "https://github.com/onoderaippei/taskflow",
    demoUrl: "https://taskflow-demo.example.com",
    featured: true,
  },
  {
    slug: "snippet-stock",
    title: "Snippet Stock",
    summary: "開発メモをタグで整理できるコードスニペット管理ツール",
    description:
      "日々の実装で使うコード断片を保存し、タグ検索で必要な情報にすぐアクセスできるツールです。",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: [
      "全文検索とタグ検索を組み合わせた軽量検索体験",
      "Markdown対応エディタでメモとコードを一元管理",
      "データモデルを分離しやすい構成で将来の機能拡張に対応",
    ],
    githubUrl: "https://github.com/onoderaippei/snippet-stock",
    demoUrl: "https://snippet-stock.example.com",
    featured: true,
  },
  {
    slug: "focus-timer",
    title: "Focus Timer",
    summary: "集中時間を記録して振り返るポモドーロアプリ",
    description:
      "作業セッションを計測し、週次の集中時間を可視化して習慣化を支援するアプリです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    highlights: [
      "セッション履歴をグラフで確認できるダッシュボード",
      "必要最小限のUIで迷わず使える操作性",
      "描画ロジックとUIを分離し保守しやすい構造を採用",
    ],
    githubUrl: "https://github.com/onoderaippei/focus-timer",
    demoUrl: "https://focus-timer.example.com",
    featured: true,
  },
  {
    slug: "habit-note",
    title: "Habit Note",
    summary: "習慣トラッキングと日次メモを統合した記録アプリ",
    description:
      "毎日の行動をチェックリストで管理し、簡単なメモと合わせて継続状況を振り返れるアプリです。",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    highlights: [
      "入力を最短化した1画面完結の記録フロー",
      "データ取得をカスタムフック化してUIから分離",
      "将来的な通知機能追加を見据えた責務分割",
    ],
    githubUrl: "https://github.com/onoderaippei/habit-note",
    demoUrl: "https://habit-note.example.com",
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
