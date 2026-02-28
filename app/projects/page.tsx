import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm text-gray-500">Projects</p>
        <h1 className="text-3xl font-bold tracking-tight text-black">開発プロジェクト一覧</h1>
        <p className="text-gray-700">個人開発・学習で作ったアプリをまとめています。</p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
