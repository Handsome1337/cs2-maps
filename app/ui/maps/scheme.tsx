import Image from 'next/image';

export interface SchemeImage {
  src: string;
  mapName: string;
}

export default function Scheme({
  images
}: Readonly<{
  images: SchemeImage[];
}>) {
  return (
    <details open>
      <summary className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
        Схема карты
      </summary>
      {images.map(({ src, mapName }) => (
        <Image
          key={src}
          src={src}
          width={600}
          height={600}
          placeholder="blur"
          alt={`Схема карты ${mapName}`}
        />
      ))}
    </details>
  );
}
