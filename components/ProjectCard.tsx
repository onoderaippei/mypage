import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-sm border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-black">
      <h2 className="text-xl font-semibold text-black">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{project.technologies.join(" / ")}</p>
      <p className="mt-4 leading-relaxed text-gray-500">{project.summary}</p>
      <div className="mt-6 flex items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-sm border border-gray-300 px-3 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          詳細を見る
        </Link>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-gray-300 px-3 py-2 text-sm text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          デモを開く
        </a>
      </div>
    </article>
  );
}
