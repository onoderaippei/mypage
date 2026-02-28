import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-12 py-24">
        <p className="text-sm text-gray-500">Projects</p>
        <h1 className="text-6xl font-semibold tracking-tight text-black">開発プロジェクト一覧</h1>
        <p className="text-lg leading-relaxed text-gray-500">個人開発・学習で作ったアプリをまとめています。</p>
      </section>

      <section className="grid gap-6 py-24 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
