import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Inferno',
  description: 'Обозначения позиций и раскидки гранат на карте Inferno'
};

const IMAGES: SchemeImage[] = [{ src: '/inferno.webp', mapName: 'Inferno' }];

export default function Inferno() {
  return (
    <>
      <Header mapName="Inferno" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
