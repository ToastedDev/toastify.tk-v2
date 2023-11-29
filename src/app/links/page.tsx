import Image from "next/image";
import NextLink from "next/link";

interface Link {
  name: string;
  links: {
    name: string;
    href: string;
  }[];
}

function Link(link: Link) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold">{link.name}</h1>
      {link.links.map((link) => (
        <NextLink
          key={link.name}
          href={link.href}
          className="text-xl text-primary hover:underline"
        >
          {link.name}
        </NextLink>
      ))}
    </div>
  );
}

const links: Link[] = [
  {
    name: "Social Media",
    links: [
      {
        name: "YouTube",
        href: "https://youtube.com/@ToastedDev",
      },
      {
        name: "X/Twitter",
        href: "https://twitter.com/ToastedDev",
      },
      {
        name: "Twitch",
        href: "https://twitch.tv/Toasted_Dev",
      },
      {
        name: "GitHub",
        href: "https://github.com/ToastedDev",
      },
    ],
  },
  {
    name: "Some things I've made",
    links: [
      {
        name: "Graphify",
        href: "https://youtube.com/@GraphifyStatistics",
      },
      {
        name: "YAB ?! Counts",
        href: "https://yabcounts.com",
      },
      {
        name: "My website",
        href: "/",
      },
    ],
  },
];

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <Image
          src="/avatar.jpg"
          alt="ToastedToast Avatar"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-4xl font-bold">
          ToastedToast{" "}
          <span className="font-normal text-foreground/30">(a.k.a TCA)</span>
        </h1>
        <p className="text-[1.15em] leading-7">
          A piece of toast that&apos;s a developer somehow.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        {links.map((link) => (
          <Link key={link.name} {...link} />
        ))}
      </div>
    </div>
  );
}
