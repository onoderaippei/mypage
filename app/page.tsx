import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";

const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="space-y-6">
        <p className="text-sm text-gray-500">Portfolio</p>
        <h1 className="text-4xl font-bold tracking-tight text-black">Ippei Onodera</h1>
        <p className="max-w-2xl text-xl text-gray-700">
          シンプルで使いやすいWebアプリを、設計から実装まで一貫して作るフロントエンドエンジニアです。
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-black">技術スタック</h2>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech} className="border border-gray-200 px-3 py-1 text-sm text-gray-700">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-black">注目プロジェクト</h2>
          <Link href="/projects" className="text-sm font-medium text-black underline-offset-4 hover:underline">
            すべて見る
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section>
        <Link
          href="/projects"
          className="inline-block border border-gray-300 px-5 py-3 text-sm font-medium text-black hover:bg-gray-50"
        >
          Projectsページへ
        </Link>
      </section>
    </div>
  );
}
