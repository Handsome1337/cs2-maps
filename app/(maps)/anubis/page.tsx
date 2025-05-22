import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Anubis',
  description: 'Обозначения позиций и раскидки гранат на карте Anubis'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  { data: AnchorMap.SMOKES },
  { data: AnchorMap.MOLOTOVS },
  { data: AnchorMap.GRENADES },
  { data: AnchorMap.FLASHES }
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
        </section>
        <section id={AnchorMap.MOLOTOVS.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.MOLOTOVS.name}
          </h2>
        </section>
        <section id={AnchorMap.GRENADES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.GRENADES.name}
          </h2>
        </section>
        <section id={AnchorMap.FLASHES.id} className="mt-4">
          <h2 className="text-foreground text-center font-[family-name:var(--font-tektur-sans)] font-semibold text-xl">
            {AnchorMap.FLASHES.name}
          </h2>
        </section>
      </Main>
    </>
  );
}
