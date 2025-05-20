import Link from 'next/link';

export interface NavigationItem {
  data: {
    name: string;
    id: string;
  };
  children?: NavigationItem['data'][];
}

export default function Navigation({
  items
}: Readonly<{
  items: NavigationItem[];
}>) {
  return (
    <aside className="p-4">
      <nav>
        <ul>
          {items.map(({ data: { name, id }, children }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className="transition-colors text-foreground hover:text-green-700 focus:text-green-700 focus:outline-0 font-normal font-[family-name:var(--font-tektur-sans)] text-base"
              >
                {name}
              </Link>
              {children && (
                <ul className="ml-4">
                  {children.map(({ name, id }) => (
                    <li key={id}>
                      <Link
                        href={`#${id}`}
                        className="transition-colors text-foreground hover:text-green-700 focus:text-green-700 focus:outline-0 font-normal font-[family-name:var(--font-tektur-sans)] text-base"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
