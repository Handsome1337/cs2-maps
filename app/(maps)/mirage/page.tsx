import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Mirage',
  description: 'Обозначения позиций и раскидки гранат на карте Mirage'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'В окно', id: 't-to-window-smoke' },
      { name: 'На CT', id: 't-to-ct-smoke' },
      { name: 'В джангл', id: 't-to-jungle-smoke' },
      { name: 'На лестницу', id: 't-to-stairs-smoke' },
      { name: 'В коннектор', id: 't-to-connector-smoke' },
      { name: 'В окно кухни', id: 'apartments-to-kitchen-window-smoke' },
      { name: 'На шорт (B plant)', id: 'apartments-to-short-smoke' }
    ]
  },
  {
    data: AnchorMap.FLASHES,
    children: [
      { name: 'A plant (со стороны T)', id: 't-to-a-flash' },
      { name: 'A plant (со стороны CT)', id: 'ct-to-a-flash' }
    ]
  }
];
const IMAGES: SchemeImage[] = [{ src: '/mirage/map.jpg', mapName: 'Mirage' }];

export default function Mirage() {
  return (
    <>
      <Header mapName="Mirage" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-window-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в окно (Зажать &#34;D&#34; + Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между мусоркой и левой стеной:
              </figcaption>
              <Image
                src="/mirage/smoke-t-window1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в окно"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в пересечение верха перил и белых камней:
              </figcaption>
              <Image
                src="/mirage/smoke-t-window2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в окно"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088328747?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-to-window-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-ct-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на CT (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в центр правой половины угла стены между T spawn и ямой:
              </figcaption>
              <Image
                src="/mirage/smoke-t-ct1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на CT"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр (по высоте) выпирающей балки по линии правого края крыши:
              </figcaption>
              <Image
                src="/mirage/smoke-t-ct2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на CT"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088333559?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-to-ct-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-jungle-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в джангл (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём у средней балки на балконе перед ямой:
              </figcaption>
              <Image
                src="/mirage/smoke-t-jungle1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в джангл"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся ниже и левее левого верхнего края камня на четверть от его высоты:
              </figcaption>
              <Image
                src="/mirage/smoke-t-jungle2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в джангл"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088338224?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-to-jungle-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-stairs-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на лестницу (ЛКМ + ПКМ Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между стеной балкона перед ямой и последней балкой,
                подпирающей palace:
              </figcaption>
              <Image
                src="/mirage/smoke-t-stairs1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на лестницу"
              />
            </figure>
            <figure>
              <figcaption className="w-[960] text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правый верхний край камня, находящегося прямо перед нами (у
                этого камня слева самый большой шов):
              </figcaption>
              <Image
                src="/mirage/smoke-t-stairs2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на лестницу"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088342752?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-to-stairs-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-connector-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в коннектор (Jumpthrow из приседа)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём <b>в приседе</b> в угол на мусорке:
              </figcaption>
              <Image
                src="/mirage/smoke-t-connector1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в коннектор"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в угол между ковром и полом балкона:
              </figcaption>
              <Image
                src="/mirage/smoke-t-connector2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в коннектор"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088349084?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-to-connector-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="apartments-to-kitchen-window-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в окно кухни (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между выходом из прохода с телевизором и правой стеной:
              </figcaption>
              <Image
                src="/mirage/smoke-apartments-short1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с апартаментов в окно кухни"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в верхний угол ближайшего зубца на крыше башни:
              </figcaption>
              <Image
                src="/mirage/smoke-apartments-kitchen-window.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с апартаментов в окно кухни"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088354997?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-apartments-to-short-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="apartments-to-short-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на шорт (со стороны B плэнта) (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между выходом из прохода с телевизором и правой стеной:
              </figcaption>
              <Image
                src="/mirage/smoke-apartments-short1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с апартаментов на шорт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в левый верхний край башни:
              </figcaption>
              <Image
                src="/mirage/smoke-apartments-short2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с апартаментов на шорт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088320552?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-apartments-to-short-smoke"
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
              id="t-to-a-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в A plant со стороны T spawn (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём к наличнику слева от двери:
              </figcaption>
              <Image
                src="/mirage/flash-t-a1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с T на A плэнт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в верхний кончик фонаря:
              </figcaption>
              <Image
                src="/mirage/flash-t-a2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки T на A плэнт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088472404?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-t-a-flash"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4">
            <h3
              id="ct-to-a-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка в A plant со стороны CT spawn (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём у мусорки со стороны плэнта:
              </figcaption>
              <Image
                src="/mirage/flash-ct-a1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с CT на A плэнт"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся правее сгиба карниза в его середину по высоте:
              </figcaption>
              <Image
                src="/mirage/flash-ct-a2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки CT на A плэнт"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088474546?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="mirage-ct-a-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
