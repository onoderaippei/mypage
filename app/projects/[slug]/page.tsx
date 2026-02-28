import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-12 py-24">
      <header className="space-y-12">
        <p className="text-sm text-gray-500">Project Detail</p>
        <h1 className="text-6xl font-semibold tracking-tight text-black">{project.title}</h1>
        <p className="text-lg leading-relaxed text-gray-500">{project.description}</p>
      </header>

      <section className="space-y-12 py-24">
        <h2 className="text-xl font-semibold text-black">使用技術</h2>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="rounded-sm border border-gray-200 px-3 py-1 text-sm text-gray-600">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-12 py-24">
        <h2 className="text-xl font-semibold text-black">工夫した点</h2>
        <ul className="space-y-3 leading-relaxed text-gray-500">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="list-disc pl-1 ml-5">
              {highlight}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-wrap gap-4 py-24">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-gray-300 px-4 py-2 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          Demo
        </a>
        <Link
          href="/projects"
          className="rounded-sm border border-gray-300 px-4 py-2 text-sm text-black transition-colors duration-200 hover:bg-black hover:text-white"
        >
          一覧に戻る
        </Link>
      </section>
    </article>
  );
}
