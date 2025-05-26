import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Anubis',
  description: 'Обозначения позиций и раскидки гранат на карте Anubis'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'T spawn на мид', id: 't-to-mid-smoke' },
      { name: 'В коннектор', id: 'street-to-connector-smoke' },
      { name: 'B plant (лонг и храм)', id: 'ruins-to-b-smoke' },
      { name: 'B heaven', id: 'boat-to-heaven-smoke' },
      { name: 'B камеру', id: 'palace-to-camera-smoke' }
    ]
  },
  {
    data: AnchorMap.FLASHES,
    children: [
      { name: 'В двери', id: 'top-mid-to-doors-flash' },
      { name: 'B plant', id: 'ruins-to-b-flash' },
      { name: 'A мэйн', id: 'palace-to-a-main-flash' }
    ]
  }
];
const IMAGES: SchemeImage[] = [{ src: '/anubis/map.jpg', mapName: 'Anubis' }];

export default function Anubis() {
  return (
    <>
      <Header mapName="Anubis" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-mid-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c T spawn на мид (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём около центрального столба забора:
              </figcaption>
              <Image
                src="/anubis/smoke-t-spawn-mid1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на mid"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правый нижний край простыни:
              </figcaption>
              <Image
                src="/anubis/smoke-t-spawn-mid2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на mid"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087073543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-t-to-mid-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="street-to-connector-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c улицы в коннектор (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол рядом с телефонами:
              </figcaption>
              <Image
                src="/anubis/smoke-street-connector1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с улицы в коннектор"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся во второй сверху выступ стены:
              </figcaption>
              <Image
                src="/anubis/smoke-street-connector2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с улицы в коннектор"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087074891?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-street-to-connector-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="ruins-to-b-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на B plant (закрывает лонг и храм) (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол руин перед выходом в B мэйн:
              </figcaption>
              <Image
                src="/anubis/smoke-ruins-b1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с руин на B plant"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр третьего слева выступа:
              </figcaption>
              <Image
                src="/anubis/smoke-ruins-b2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с руин на B plant"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087077488?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-ruins-to-b-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="boat-to-heaven-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на heaven (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол воды перед заходом в A мэйн:
              </figcaption>
              <Image
                src="/anubis/smoke-heaven1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с лодки на heaven"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в середину верхней части ближайшей грани ящика:
              </figcaption>
              <Image
                src="/anubis/smoke-heaven2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с лодки на heaven"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087081049?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-boat-to-heaven-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="palace-to-camera-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в камеру (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине дальнего края порога ковров:
              </figcaption>
              <Image
                src="/anubis/smoke-camera1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с ковров в камеру"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в середину левой стенки примерно по уровню начала скругления окна:
              </figcaption>
              <Image
                src="/anubis/smoke-camera2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с ковров в камеру"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087094211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-palace-to-camera-smoke"
              ></iframe>
            </div>
          </section>
        </section>
        <section id={AnchorMap.FLASHES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.FLASHES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="top-mid-to-doors-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в двери (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между топ мидом и улицей:
              </figcaption>
              <Image
                src="/anubis/flash-doors1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка в двери"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр низа правой верхней впуклой части двери:
              </figcaption>
              <Image
                src="/anubis/flash-doors2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки в двери"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087219066?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-top-mid-to-doors-flash"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="ruins-to-b-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в B plant (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём сверху лестницы между руинами и B мэйном на уровне между 2-й и 3-й
                ступенькой:
              </figcaption>
              <Image
                src="/anubis/flash-b1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка на B плэнт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в середину покосившегося камня:
              </figcaption>
              <Image
                src="/anubis/flash-b2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки на B плэнт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087121688?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-ruins-to-b-flash"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4">
            <h3
              id="palace-to-a-main-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в A мэйн (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине колонны начала ковров:
              </figcaption>
              <Image
                src="/anubis/flash-a-main1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с ковров в A мэйн"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в середину низа камня между дверью и ящиком:
              </figcaption>
              <Image
                src="/anubis/flash-a-main2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки с ковров в A мэйн"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087112812?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="anubis-palace-to-a-main-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
