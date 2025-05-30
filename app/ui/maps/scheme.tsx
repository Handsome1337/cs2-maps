import Image from 'next/image';
import { AnchorMap } from '@/app/lib/constants';
import { capitalize } from '@/app/lib/utils';

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
    <details id={AnchorMap.RADAR.id} open>
      <summary className="text-foreground w-[960] text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-lg">
        Схема карты
      </summary>
      {images.map(({ src, mapName }) => (
        <Image
          key={src}
          src={src}
          width={960}
          height={960}
          loading="lazy"
          alt={`Схема карты ${mapName}`}
          title={capitalize(mapName.match(/\((.*)\)/)?.pop())}
        />
      ))}
    </details>
  );
}
