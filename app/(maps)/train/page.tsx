import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Train',
  description: 'Обозначения позиций и раскидки гранат на карте Train'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  {
    data: AnchorMap.SMOKES,
    children: [
      { name: 'В камеру', id: 't-to-camera-smoke' },
      { name: 'В коннектор (A plant)', id: 't-to-connector-a-smoke' },
      { name: 'В поп-дог', id: 't-to-pop-dog-smoke' },
      { name: 'Между красным и домом', id: 't-to-e-box-smoke' },
      { name: 'На синий (со стороны нижнего)', id: 'b-halls-to-blue-smoke' },
      { name: 'В коннектор (B plant)', id: 'b-halls-to-connector-smoke' }
    ]
  },
  {
    data: AnchorMap.MOLOTOVS,
    children: [
      { name: 'На дефолт B (с шорта)', id: 'short-to-default-molotov' },
      { name: 'На дефолт B (с лонга)', id: 'long-to-default-molotov' }
    ]
  }
];
const IMAGES: SchemeImage[] = [
  { src: '/train/map-lower.jpg', mapName: 'Train (снизу)' },
  { src: '/train/map-upper.jpg', mapName: 'Train (сверху)' }
];

export default function Train() {
  return (
    <>
      <Header mapName="Train" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.SMOKES.name}
          </h2>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-camera-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в камеру (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём между предпоследним столбиком и поездом:
              </figcaption>
              <Image
                src="/train/smoke-camera1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в камеру"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в нижний угол крыши:
              </figcaption>
              <Image
                src="/train/smoke-camera2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в камеру"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088856562?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-t-to-camera-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-connector-a-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в коннектор (со стороны A плэнта) (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём между предпоследним столбиком и поездом:
              </figcaption>
              <Image
                src="/train/smoke-camera1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в коннектор"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в пересечение шва крыши и второй поддерживающей её деревяшкой:
              </figcaption>
              <Image
                src="/train/smoke-connector-a.jpg"
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
                src="https://player.vimeo.com/video/1088859091?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-t-to-connector-a-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-pop-dog-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в поп-дог (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между локомотивом и проезжающим поездом:
              </figcaption>
              <Image
                src="/train/smoke-pop-dog1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn в поп-дог"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в нижний правый угол тёмного квадрата:
              </figcaption>
              <Image
                src="/train/smoke-pop-dog2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn в поп-дог"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088862065?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-t-to-pop-dog-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="t-to-e-box-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок между красным и домом (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между локомотивом и проезжающим поездом:
              </figcaption>
              <Image
                src="/train/smoke-pop-dog1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с T spawn между красным и домом"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в верх третьего справа прута:
              </figcaption>
              <Image
                src="/train/smoke-e-box.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с T spawn между красным и домом"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088864297?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-t-to-e-box-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="b-halls-to-blue-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок с дома B на синий (со стороны нижнего) (Regular throw из приседа)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём к балке в начале B дома:
              </figcaption>
              <Image
                src="/train/smoke-blue-lower1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с B дома на синий со стороны нижнего"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в правый нижний конец звезды:
              </figcaption>
              <Image
                src="/train/smoke-blue-lower2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с B дома на синий со стороны нижнего"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              <b>ПРИСЕДАЕМ!</b> и кидаем. Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088851520?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-b-halls-to-blue-lower-smoke"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4 border-b border-b-foreground border-solid">
            <h3
              id="b-halls-to-connector-smoke"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Смок в коннектор (со стороны B плэнта) (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между ящиком и помостом:
              </figcaption>
              <Image
                src="/train/smoke-connector-b1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается смоук с B дома в коннектор"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Справа от низа окна есть два следа от пуль. Целимся чуть ниже середины
                между ними:
              </figcaption>
              <Image
                src="/train/smoke-connector-b2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с B дома в коннектор"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088867625?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-b-halls-to-connector-smoke"
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
              id="short-to-default-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов в дефолт B плэнта (с шорта) (Jumpthrow)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между бочками и стеной перед коннектором:
              </figcaption>
              <Image
                src="/train/molotov-short-default1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов с шорта на дефолт B"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в центр балки:
              </figcaption>
              <Image
                src="/train/molotov-short-default2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с шорта на дефолт B"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088874557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-short-to-default-molotov"
              ></iframe>
            </div>
          </section>
          <section className="flex flex-col gap-1 py-4">
            <h3
              id="long-to-default-molotov"
              className="text-foreground font-[family-name:var(--font-tektur-sans)] font-medium text-lg"
            >
              Молотов в дефолт B плэнта (с лонга) (Regular throw)
            </h3>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Встаём в угол между бочками и лестницей:
              </figcaption>
              <Image
                src="/train/molotov-long-default1.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Позиция, из которой кидается молотов с лонга на дефолт B"
              />
            </figure>
            <figure>
              <figcaption className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
                Целимся в нижний правый угол ближайшего металлического загиба:
              </figcaption>
              <Image
                src="/train/molotov-long-default2.jpg"
                width={960}
                height={540}
                loading="lazy"
                alt="Прицеливание смоука с лонга на дефолт B"
              />
            </figure>
            <p className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
              Результат:
            </p>
            <div className="w-[960] h-[540] relative pt-[56.25%]">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://player.vimeo.com/video/1088877451?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="train-long-to-default-molotov"
              ></iframe>
            </div>
          </section>
        </section>
      </Main>
    </>
  );
}
