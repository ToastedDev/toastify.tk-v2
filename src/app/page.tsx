import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Project({
  name,
  description,
  href,
}: {
  name: string;
  description: string;
  href: string;
}) {
  return (
    <li className="flex flex-col gap-1">
      <Link href={href}>
        <h1 className="flex items-center gap-0.5 font-medium underline underline-offset-4">
          {name} <ArrowTopRightIcon />
        </h1>
      </Link>
      <p className="text-sm text-muted-foreground">{description}</p>
    </li>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-light">projects</h1>
      <ul className="mt-2.5 flex flex-col gap-3">
        <Project
          name="yabcounts"
          description="livecounts, reimagined."
          href="https://yabcounts.com"
        />
        <Project
          name="statistical"
          description="tracking your favorite creators so you can see their growth."
          href="https://statistical.vercel.app"
        />
        <Project
          name="nickify"
          description="add your subscriber count to your nickname with ease."
          href="https://nickify.vercel.app"
        />
      </ul>
    </>
  );
}
