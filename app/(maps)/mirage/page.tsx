import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Mirage',
  description: 'Обозначения позиций и раскидки гранат на карте Mirage'
};

const IMAGES: SchemeImage[] = [{ src: '/mirage.webp', mapName: 'Mirage' }];

export default function Mirage() {
  return (
    <>
      <Header mapName="Mirage" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
