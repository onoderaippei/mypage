import Link from "next/link";
import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="space-y-12 py-24">
        <p className="text-sm text-gray-500">Portfolio</p>
        <h1 className="text-6xl font-semibold tracking-tight text-black">Ippei Onodera</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
          シンプルで使いやすいWebアプリを、設計から実装まで一貫して作るフロントエンドエンジニアです。
        </p>
        <div>
          <Link
            href="/projects"
            className="inline-block rounded-sm border border-gray-300 px-5 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
          >
            Projectsページへ
          </Link>
        </div>
      </section>

      <section className="space-y-12 py-24">
        <h2 className="text-2xl font-semibold text-black">技術スタック</h2>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech} className="rounded-sm border border-gray-200 px-3 py-1 text-sm text-gray-600">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-12 py-24">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-black">注目プロジェクト</h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-black"
          >
            すべて見る
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
