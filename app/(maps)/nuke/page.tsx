import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Nuke',
  description: 'Обозначения позиций и раскидки гранат на карте Nuke'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'На улицу за красным', id: 't-to-red-smoke' },
      { name: 'На улицу перед сикретом', id: 't-to-secret-smoke' },
      { name: 'В дверь', id: 't-to-squeaky-smoke' }
    ]
  },
  {
    data: AnchorMap.MOLOTOVS,
    children: [{ name: 'На будку', id: 'roof-to-hut-molotov' }]
  },
  {
    data: AnchorMap.FLASHES,
    children: [{ name: 'На A plant из девятки', id: 'heaven-to-a-flash' }]
  }
];
const IMAGES: SchemeImage[] = [
  { src: '/nuke/map-upper.jpg', mapName: 'Nuke (сверху)' },
  { src: '/nuke/map-lower.jpg', mapName: 'Nuke (снизу)' }
];

export default function Nuke() {
  return (
    <>
      <Header mapName="Nuke" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-red-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn за красный (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём сзади левого борта кузова машины:
              </figcaption>
              <Image
                src="/nuke/smoke-t-red1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn за красный"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правый верхний край левого окна:
              </figcaption>
              <Image
                src="/nuke/smoke-t-red2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn за красный"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088741103?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="nuke-t-to-red-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-secret-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn на сикрет (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём перед началом контейнера на машине:
              </figcaption>
              <Image
                src="/nuke/smoke-t-secret1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на сикрет"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в угол здания:
              </figcaption>
              <Image
                src="/nuke/smoke-t-secret2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на сикрет"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088741638?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="nuke-t-to-secret-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-squeaky-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn в дверь (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между забором и стеной:
              </figcaption>
              <Image
                src="/nuke/smoke-t-squeaky1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в дверь"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                <b>ПРИСЕДАЕМ!</b> Целимся в низ второго справа от лампы шва:
              </figcaption>
              <Image
                src="/nuke/smoke-t-squeaky2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в дверь"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Затем <b>ВСТАЁМ!</b> и кидаем. Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088742980?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="nuke-t-to-squeaky-smoke"
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
              id="roof-to-hut-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов на будку (Runthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём на край металлической крышки примерно на 10 часов со стороны T
                spawn:
              </figcaption>
              <Image
                src="/nuke/molotov-hut1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов на будку"
              />
            </figure>
            <figure>
              <figcaption className="w-[960] text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся во второй справа шов из тех, вверх которых видно в окне, примерно
                на уровне четверти от его высоты:
              </figcaption>
              <Image
                src="/nuke/molotov-hut2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание молотова на будку"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Кидаем <b>на бегу</b>. Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088737625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="nuke-roof-to-squeaky-molotov"
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
              id="heaven-to-a-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в A из девятки (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между балкой и левой стеной:
              </figcaption>
              <Image
                src="/nuke/flash-heaven-a1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с девятки в A плэнт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся вниз таблички на уровне центра фигуры человека:
              </figcaption>
              <Image
                src="/nuke/flash-heaven-a2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки с девятки в A плэнт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088731920?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="nuke-heaven-to-a-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
