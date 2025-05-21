import Image from 'next/image';
import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Ancient',
  description: 'Обозначения позиций и раскидки гранат на карте Ancient'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'T spawn на мид', id: 't-to-mid-smoke' },
      { name: 'T spawn на пончик', id: 't-to-donut-smoke' },
      { name: 'На хелпу', id: 't-to-ct-help-smoke' },
      { name: 'На пончик (плэнт A)', id: 't-to-a-donut-smoke' },
      { name: 'С пончика на хелпу', id: 'donut-to-ct-help-smoke' },
      { name: 'На раскопки', id: 't-to-excavations-smoke' },
      { name: 'В кейв', id: 'water-to-cave-smoke' },
      { name: 'На тёмную', id: 'ruins-to-dark-smoke' },
      { name: 'На светлую', id: 'ruins-to-light-smoke' }
    ]
  },
  {
    data: AnchorMap.MOLOTOVS,
    children: [{ name: 'На рампу', id: 'dark-to-ramp-molotov' }]
  },
  {
    data: AnchorMap.FLASHES,
    children: [
      { name: 'На x-box и бэксайт A', id: 'a-main-to-x-box-and-backsite-flash' },
      { name: 'На рампу', id: 'light-to-ramp-flash' }
    ]
  }
];
const IMAGES: SchemeImage[] = [{ src: '/ancient/map.jpg', mapName: 'Ancient' }];

export default function Ancient() {
  return (
    <>
      <Header mapName="Ancient" />
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
                Встаём около заднего правого угла опоры моста:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-mid1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на mid"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правый край самого верхнего полного пересечения камней:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-mid2.jpg"
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
                src="https://player.vimeo.com/video/1086390360?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-t-to-mid-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-donut-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок c T spawn на пончик (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём вплотную между камнем и стеной:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-donut1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на пончик"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в маленькое отверстие между парапетом и стенами:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-donut2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на пончик"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086412100?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-t-to-donut-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-ct-help-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на хелпу (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол слева перед заходом на штаны:
              </figcaption>
              <Image
                src="/ancient/smoke-help1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук на хелпу"
              />
            </figure>
            <figure>
              <figcaption className="w-[960] text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                На левой колонне перед входом отчётливо видны вертикальные выступы.
                Целимся в середину левого верхнего выступа:
              </figcaption>
              <Image
                src="/ancient/smoke-help2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука на хелпу"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086435918?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-ct-help-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-a-donut-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок на пончик со стороны плэнта (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине левой стенки лестницы перед заходом на штаны:
              </figcaption>
              <Image
                src="/ancient/smoke-a-donut1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук на пончик со стороны плэнта"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр крестика во втором ряду снизу слева:
              </figcaption>
              <Image
                src="/ancient/smoke-a-donut2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука на пончик со стороны плэнта"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086445861?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-a-donut-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="donut-to-ct-help-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с пончика на хелпу (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в маленький угол перед входом в пончик:
              </figcaption>
              <Image
                src="/ancient/smoke-donut-to-help1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с пончика на хелпу"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся посередине между выступом левой стены и верхом передней стены:
              </figcaption>
              <Image
                src="/ancient/smoke-donut-to-help2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с пончика на хелпу"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086494491?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-donut-to-ct-help-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-excavations-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn на раскопки (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в левый задний угол T spawn:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-excavations1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn на раскопки"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в угол башни на уровне между первым и вторым кирпичом крыши:
              </figcaption>
              <Image
                src="/ancient/smoke-t-spawn-excavations2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn на раскопки"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086469400?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-t-to-excavations-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="water-to-cave-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с воды в кейв (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Поднимаемся в угол воды перед руинами:
              </figcaption>
              <Image
                src="/ancient/smoke-water-cave1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с воды в кейв"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в нижний угол свисающего листа растения:
              </figcaption>
              <Image
                src="/ancient/smoke-water-cave2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с воды в кейв"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086511737?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-water-to-cave-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="ruins-to-dark-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn на тёмную (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Поднимаемся на камни в углу руин:
              </figcaption>
              <Image
                src="/ancient/smoke-ruins-dark1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с руин на тёмную"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр наибольшей щели между камнями:
              </figcaption>
              <Image
                src="/ancient/smoke-ruins-dark2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с руин на тёмную"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086479316?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-ruins-to-dark-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="ruins-to-light-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с T spawn на светлую (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Поднимаемся на камни в углу руин:
              </figcaption>
              <Image
                src="/ancient/smoke-ruins-dark1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с руин на светлую"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правую верхнюю грань крестика на уровне низа трёх маленьких
                колонн:
              </figcaption>
              <Image
                src="/ancient/smoke-ruins-light.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с руин на светлую"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086483041?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-ruins-to-light-smoke"
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
              id="dark-to-ramp-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов на рампу (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём на угол между аллеей и тёмной:
              </figcaption>
              <Image
                src="/ancient/molotov-ramp1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов на рампу"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся примерно посередине дальнего кирпича:
              </figcaption>
              <Image
                src="/ancient/molotov-ramp2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание молотова на рампу"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086506258?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-dark-to-ramp-molotov"
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
              id="a-main-to-x-box-and-backsite-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка на x-box и бэксайт A (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём посередине левой стенки в начале штанов:
              </figcaption>
              <Image
                src="/ancient/flash-a-xbox-backsite1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка на x-box и бэксайт A"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся посередине отверстия на уровне середины третьего кирпича:
              </figcaption>
              <Image
                src="/ancient/flash-a-xbox-backsite2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки на x-box и бэксайт A"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086454211?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-a-xbox-backsite-flash"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4">
            <h3
              id="light-to-ramp-flash"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Флэшка на рампу (ЛКМ + ПКМ Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём к дальнему углу на светлой:
              </figcaption>
              <Image
                src="/ancient/flash-ramp1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается флэшка рампу"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в стык между первым нижним и верхним к нему камнем:
              </figcaption>
              <Image
                src="/ancient/flash-ramp2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание флэшки рампу"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1086500705?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="ancient-ramp-flash"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
