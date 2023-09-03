import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-lg font-light">projects</h1>
      <ul className="mt-2.5 flex flex-col gap-3">
        <li>
          <Link href="https://yabcounts.com" className="flex flex-col gap-1.5">
            <h1 className="font-medium underline underline-offset-4">
              yabcounts
            </h1>
            <p className="text-sm text-muted-foreground">
              live counters, reimagined.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="https://statistical.vercel.app"
            className="flex flex-col gap-1.5"
          >
            <h1 className="font-medium underline underline-offset-4">
              statistical
            </h1>
            <p className="text-sm text-muted-foreground">
              tracking your favorite creator&apos;s statistics so you can see
              their growth.
            </p>
          </Link>
        </li>
        <li>
          <Link
            href="https://nickify.vercel.app"
            className="flex flex-col gap-1.5"
          >
            <h1 className="font-medium underline underline-offset-4">
              nickify
            </h1>
            <p className="text-sm text-muted-foreground">
              in one command, you can make your subscriber count visible in your
              nickname.
            </p>
          </Link>
        </li>
      </ul>
    </>
  );
}
