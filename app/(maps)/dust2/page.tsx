import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Dust2',
  description: 'Обозначения позиций и раскидки гранат на карте Dust2'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'T spawn в двери', id: 't-to-doors-smoke' },
      { name: 'T spawn на старт', id: 't-to-start-smoke' },
      { name: 'CT', id: 'catwalk-to-ct-smoke' },
      { name: 'Двери на B', id: 'tunnel-to-b-doors-smoke' }
    ]
  },
  {
    data: AnchorMap.MOLOTOVS,
    children: [{ name: 'С окна в B plant', id: 'window-to-b-molotov' }]
  },
  {
    data: AnchorMap.FLASHES,
    children: [{ name: 'T spawn на старт', id: 't-to-start-flash' }]
  }
];
const IMAGES: SchemeImage[] = [{ src: '/dust2/map.jpg', mapName: 'Dust2' }];

export default function Dust2() {
  return (
    <>
      <Header mapName="Dust2" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-doors-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c T spawn в двери (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между перилами:
              </figcaption>
              <Image
                src="/dust2/smoke-t-doors1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в двери"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в верхний левый край серого квадрата:
              </figcaption>
              <Image
                src="/dust2/smoke-t-doors2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в двери"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087817321?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-t-to-doors-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-start-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c T spawn на старт (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём между стеной и спуском:
              </figcaption>
              <Image
                src="/dust2/smoke-t-start1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на старт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в конец выпирающей трубы:
              </figcaption>
              <Image
                src="/dust2/smoke-t-start2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на старт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087818447?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-t-to-start-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="catwalk-to-ct-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c парапета на CT (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине кирпичей, обрамляющих решётку справа:
              </figcaption>
              <Image
                src="/dust2/smoke-catwalk-ct1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с парапета в CT"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся по левому краю сена на дверях на уровне нижнего правого угла
                балки:
              </figcaption>
              <Image
                src="/dust2/smoke-catwalk-ct2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с парапета в CT"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087820196?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-catwalk-to-ct-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="tunnel-to-b-doors-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок из тёмки в двери B (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём на край коробки посередине:
              </figcaption>
              <Image
                src="/dust2/smoke-tunnel-b-doors1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук из тёмки в двери B"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                <b>ПРИСЕДАЕМ!</b> Целимся в угол между стеной и доской:
              </figcaption>
              <Image
                src="/dust2/smoke-tunnel-b-doors2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука из тёмки в двери B"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Затем <b>ВСТАЁМ!</b> и кидаем. Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087822445?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-tunnel-to-b-doors-smoke"
              ></iframe>
            </div>
          </section>
        </section>
        <section id={AnchorMap.MOLOTOVS.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.MOLOTOVS.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="window-to-b-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов из окна в B плэнт (ЛКМ + ПКМ Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между сеном и стеной:
              </figcaption>
              <Image
                src="/dust2/molotov-window-b1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов из окна в плэнт B"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в угол между стеной и колонной:
              </figcaption>
              <Image
                src="/dust2/molotov-window-b2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание молотова из окна в плэнт B"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087825843?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-window-to-b-molotov"
              ></iframe>
            </div>
          </section>
        </section>
        <section id={AnchorMap.FLASHES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.FLASHES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4">
            <h3
              id="t-to-start-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка на старт (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём у края стены перед машиной:
              </figcaption>
              <Image
                src="/dust2/flash-t-start1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с T spawn на старт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в выпирающую часть стены на уровне стыка капота и лобового стекла:
              </figcaption>
              <Image
                src="/dust2/flash-t-start2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки с T spawn на старт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087824324?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="dust2-t-to-start-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
