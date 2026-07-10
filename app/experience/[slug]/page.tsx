import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/experience-detail";
import { experiences, getExperience } from "@/data/experiences";

interface ExperiencePageProps {
  params: {
    slug: string;
  };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export function generateMetadata({ params }: ExperiencePageProps): Metadata {
  const experience = getExperience(params.slug);

  if (!experience) {
    return {};
  }

  return {
    title: `${experience.company} | Alan Liu`,
    description: experience.summary.en
  };
}

export default function ExperiencePage({ params }: ExperiencePageProps) {
  const experience = getExperience(params.slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetail experience={experience} />;
}
