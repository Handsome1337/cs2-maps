import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Inferno',
  description: 'Обозначения позиций и раскидки гранат на карте Inferno'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'На рёбра', id: 't-to-top-mid-smoke' },
      { name: 'На CT (B plant)', id: 'banana-to-ct-smoke' },
      { name: 'На гробы', id: 'banana-to-coffins-smoke' },
      { name: 'Из-под окна на лонг', id: 'under-window-to-long-smoke' },
      { name: 'С рёбер на лонг (глубокий)', id: 'top-mid-to-long-deep-smoke' }
    ]
  },
  {
    data: AnchorMap.MOLOTOVS,
    children: [
      { name: 'На первый', id: 'banana-to-first-molotov' },
      { name: 'За третий', id: 'banana-to-triple-molotov' }
    ]
  },
  {
    data: AnchorMap.FLASHES,
    children: [{ name: 'На банан', id: 't-to-banana-flash' }]
  }
];
const IMAGES: SchemeImage[] = [{ src: '/inferno/map.jpg', mapName: 'Inferno' }];

export default function Inferno() {
  return (
    <>
      <Header mapName="Inferno" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-top-mid-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на рёбра (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между стеной и аркой:
              </figcaption>
              <Image
                src="/inferno/smoke-top-mid1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на рёбра"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся чуть-чуть выше окна между средним и правым от неё прутом решётки:
              </figcaption>
              <Image
                src="/inferno/smoke-top-mid2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на рёбра"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087998454?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-t-to-top-mid-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="banana-to-ct-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на CT (B plant) (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине левой половины ящика GAS:
              </figcaption>
              <Image
                src="/inferno/smoke-ct1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с банана на CT"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в левый угол крыши башни:
              </figcaption>
              <Image
                src="/inferno/smoke-ct2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с банана на CT"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088000940?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-banana-to-ct-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="banana-to-coffins-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на гробы (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между стенками:
              </figcaption>
              <Image
                src="/inferno/smoke-coffins1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с банана на гробы"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся чуть-чуть левее лампы на уровне дальней грани её основания:
              </figcaption>
              <Image
                src="/inferno/smoke-coffins2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с банана на гробы"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088002713?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-banana-to-coffins-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="under-window-to-long-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок из-под окна на лонг (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между лестницей и стенкой:
              </figcaption>
              <Image
                src="/inferno/smoke-long1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук из-под окна на лонг"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся чуть-чуть правее середины ливнёвки по линии подпирающей балки:
              </figcaption>
              <Image
                src="/inferno/smoke-long2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука из-под окна на лонг"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088004451?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-under-window-to-long-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="top-mid-to-long-deep-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с рёбер на лонг (глубокий) (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в самый левый угол рёбер:
              </figcaption>
              <Image
                src="/inferno/smoke-long-deep1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с рёбер на лонг (глубокий)"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в левый нижний угол окна:
              </figcaption>
              <Image
                src="/inferno/smoke-long-deep2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука из-под окна с рёбер на лонг (глубокий)"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088005804?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-top-mid-to-long-deep-smoke"
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
              id="banana-to-first-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов на первый (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём вплотную к ящику между бочками:
              </figcaption>
              <Image
                src="/inferno/molotov-first1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов с банана на первый"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся между четвёртым и пятым куском крыши:
              </figcaption>
              <Image
                src="/inferno/molotov-first2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание молотова с банана на первый"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087995480?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-banana-to-first-molotov"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="banana-to-triple-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов за третий (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между бочкой и фанерой:
              </figcaption>
              <Image
                src="/inferno/molotov-triple1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов с банана за третий"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в левый верхний угол выпирающей от ливнёвки железки:
              </figcaption>
              <Image
                src="/inferno/molotov-triple2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание молотова с банана за третий"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087996473?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-banana-to-triple-molotov"
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
              id="t-to-banana-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка на банан (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между перил:
              </figcaption>
              <Image
                src="/inferno/flash-banana1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка с T spawn на банан"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр знака:
              </figcaption>
              <Image
                src="/inferno/flash-banana2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки с T spawn на банан"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1087993519?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;dnt=1"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="inferno-t-to-banana-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
