import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border border-gray-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-black">{project.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{project.technologies.join(" / ")}</p>
      <p className="mt-4 text-gray-700">{project.summary}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-block text-sm font-medium text-black underline-offset-4 hover:underline"
      >
        詳細を見る
      </Link>
    </article>
  );
}
