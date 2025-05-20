import Link from 'next/link';

const MAPS = ['ancient', 'anubis', 'dust2', 'inferno', 'mirage', 'nuke', 'train'];

export default function Home() {
  return (
    <main className="col-span-full min-h-screen content-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-tektur-sans)]">
      <ul className="flex flex-col items-center gap-1">
        {MAPS.map((map) => (
          <li key={map}>
            <Link
              href={`/${map}`}
              className="capitalize transition-colors text-foreground hover:text-green-700 focus:text-green-700 focus:outline-0 font-medium text-lg"
            >
              {map}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
