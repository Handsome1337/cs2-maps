import Link from 'next/link';

export default function Header({ mapName }: { mapName: string }) {
  return (
    <header className="flex items-center p-4 border-b border-b-foreground border-solid">
      <Link
        href="/"
        className="transition-colors text-foreground hover:text-green-700 focus:text-green-700 focus:outline-0 font-normal font-[family-name:var(--font-tektur-sans)] text-base"
      >
        Назад
      </Link>
      <h1 className="text-foreground mx-auto font-bold font-[family-name:var(--font-tektur-sans)] text-xl">
        {mapName}
      </h1>
    </header>
  );
}
