import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="text-sm text-gray-500">Project Detail</p>
        <h1 className="text-3xl font-bold tracking-tight text-black">{project.title}</h1>
        <p className="text-gray-700">{project.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-black">使用技術</h2>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="border border-gray-200 px-3 py-1 text-sm text-gray-700">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-black">工夫した点</h2>
        <ul className="space-y-2 text-gray-700">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="list-disc pl-1 ml-5">
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-4 py-2 text-sm font-medium text-black hover:bg-gray-50"
        >
          Demo
        </a>
        <Link href="/projects" className="px-4 py-2 text-sm text-gray-700 hover:text-black">
          一覧に戻る
        </Link>
      </section>
    </article>
  );
}
