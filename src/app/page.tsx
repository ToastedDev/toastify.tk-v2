import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface Project {
  name: string;
  description: string;
  href: string;
  tags?: string[];
}

function Project(project: Project) {
  return (
    <li>
      <Link
        href={project.href}
        target="_blank"
        className="flex flex-col gap-1 rounded-lg p-2 outline-none transition-all hover:bg-muted/80 focus-visible:ring-1 focus-visible:ring-ring"
      >
        <div className="flex items-center gap-1">
          <h1 className="flex items-center gap-0.5 font-medium">
            {project.name}
            <ArrowTopRightIcon />
          </h1>
          {project.tags?.map((tag) => (
            <div key={tag} className="rounded-full bg-primary px-2 text-sm">
              {tag}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </Link>
    </li>
  );
}

const projects: Project[] = [
  {
    name: "yab ?! counts",
    description: "reimagining the concept of live counters.",
    href: "https://yabcounts.com",
    tags: ["work", "statistics"],
  },
  {
    name: "color battles",
    description: "comparing different colors because it's fun.",
    href: "https://colorbattles.imtca.repl.co",
    tags: ["side project", "statistics"],
  },
  {
    name: "dreamcord",
    description: "the discord package of your dreams.",
    href: "https://dreamcord.js.org",
    tags: ["side project", "discord"],
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
    <li>
      <Link
        href={experience.href}
        target="_blank"
        className="flex flex-col gap-1 rounded-lg p-2 outline-none transition-all hover:bg-muted/80 focus-visible:ring-1 focus-visible:ring-ring sm:flex-row sm:items-start sm:gap-2"
      >
        <p className='relative text-muted-foreground after:invisible after:content-["0000_—_0000"]'>
          <span className="absolute">
            {experience.years.started} — {experience.years.ended ?? "now"}
          </span>
        </p>
        <div className="flex flex-col gap-1">
          <h1 className="flex items-center gap-0.5 font-medium">
            {experience.title} at {experience.company}
            <ArrowTopRightIcon />
          </h1>
          <p className="text-sm text-muted-foreground">
            {experience.description}
          </p>
        </div>
      </Link>
    </li>
  );
}

const experiences: Experience[] = [
  {
    title: "frontend developer",
    company: "yab ?! counts llc",
    description: "reimagining the concept of live counters.",
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
    title: "co-founder",
    company: "statistics assembly",
    description: "the server that connects the statistics community.",
    href: "https://discord.gg/HARDDqsEdQ",
    years: {
      started: 2023,
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

export default function Home() {
  return (
    <>
      <h1 className="text-lg" id="projects">
        projects
      </h1>
      <ul className="mt-2.5 flex flex-col gap-3">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </ul>
      <h1 className="mt-6 text-lg" id="experience">
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
