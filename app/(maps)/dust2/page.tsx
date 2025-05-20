import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';
import Navigation, { type NavigationItem } from '@/app/ui/maps/navigation';
import { AnchorMap } from '@/app/lib/constants';

export const metadata: Metadata = {
  title: 'Dust2',
  description: 'Обозначения позиций и раскидки гранат на карте Dust2'
};

const NAVIGATION_ITEMS: NavigationItem[] = [
  { data: AnchorMap.RADAR },
  { data: AnchorMap.SMOKES },
  { data: AnchorMap.MOLOTOVS },
  { data: AnchorMap.GRENADES },
  { data: AnchorMap.FLASHES }
];
const IMAGES: SchemeImage[] = [{ src: '/dust2.jpg', mapName: 'Dust2' }];

export default function Dust2() {
  return (
    <>
      <Header mapName="Dust2" />
      <Navigation items={NAVIGATION_ITEMS} />
      <Main>
        <Scheme images={IMAGES} />
        <section id={AnchorMap.SMOKES.id}>
          <h2 className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
            {AnchorMap.SMOKES.name}
          </h2>
        </section>
        <section id={AnchorMap.MOLOTOVS.id}>
          <h2 className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
            {AnchorMap.MOLOTOVS.name}
          </h2>
        </section>
        <section id={AnchorMap.GRENADES.id}>
          <h2 className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
            {AnchorMap.GRENADES.name}
          </h2>
        </section>
        <section id={AnchorMap.FLASHES.id}>
          <h2 className="text-foreground font-[family-name:var(--font-tektur-sans)] text-lg">
            {AnchorMap.FLASHES.name}
          </h2>
        </section>
      </Main>
    </>
  );
}
