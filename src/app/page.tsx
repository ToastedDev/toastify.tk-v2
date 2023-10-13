import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  href: string;
}

function Project(project: Project) {
  return (
    <li className="flex flex-col gap-1">
      <Link href={project.href} className="w-fit">
        <h1 className="flex items-center gap-0.5 font-medium underline underline-offset-4">
          {project.name} <ArrowTopRightIcon />
        </h1>
      </Link>
      <p className="text-sm text-muted-foreground">{project.description}</p>
    </li>
  );
}

const projects: Project[] = [
  {
    name: "yabcounts",
    description: "live counts, reimagined.",
    href: "https://yabcounts.com",
  },
  {
    name: "statistical",
    description: "tracking your favorite creators so you can see their growth.",
    href: "https://statistical.vercel.app",
  },
  {
    name: "nickify",
    description: "add your subscriber count to your nickname with ease.",
    href: "https://nickify.vercel.app",
  },
];

interface Experience {
  title: string;
  company: string;
  description: string;
  href: string;
  years: {
    started: number;
    ended?: number;
  };
}

function Experience(experience: Experience) {
  return (
    <li className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-2">
      <p className='relative text-muted-foreground after:invisible after:content-["0000_—_0000"]'>
        <span className="absolute">
          {experience.years.started} — {experience.years.ended ?? "now"}
        </span>
      </p>
      <div className="flex flex-col gap-1">
        <Link href={experience.href} className="w-fit">
          <h1 className="flex items-center gap-0.5 font-medium underline underline-offset-4">
            {experience.title} at {experience.company} <ArrowTopRightIcon />
          </h1>
        </Link>
        <p className="text-sm text-muted-foreground">
          {experience.description}
        </p>
      </div>
    </li>
  );
}

const experiences: Experience[] = [
  {
    title: "frontend developer",
    company: "yab ?! counts llc",
    description: "live counts, reimagined.",
    href: "https://yabcounts.com",
    years: {
      started: 2023,
    },
  },
  {
    title: "founder",
    company: "graphify studios",
    description: "a team dedicated to tracking and visualizing statistics.",
    href: "https://youtube.com/@graphifystatistics",
    years: {
      started: 2021,
    },
  },
  {
    title: "co-owner",
    company: "united statistics",
    description: "uniting all statistics servers into one.",
    href: "https://discord.gg/jKQc3YJsjf",
    years: {
      started: 2022,
    },
  },
  {
    title: "ceo",
    company: "scvisualized",
    description: "visualizing the stats community.",
    href: "https://youtube.com/@scvisualized",
    years: {
      started: 2023,
    },
  },
];

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-light" id="projects">
        projects
      </h1>
      <ul className="mt-2.5 flex flex-col gap-3">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </ul>
      <h1 className="mt-6 text-lg font-light" id="experience">
        experience
      </h1>
      <ul className="mt-2.5 flex flex-col gap-3">
        {experiences.map((experience) => (
          <Experience key={experience.company} {...experience} />
        ))}
      </ul>
    </>
  );
}
