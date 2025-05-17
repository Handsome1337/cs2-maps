import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Dust2',
  description: 'Обозначения позиций и раскидки гранат на карте Dust2'
};

const IMAGES: SchemeImage[] = [{ src: '/dust2.jpg', mapName: 'Dust2' }];

export default function Dust2() {
  return (
    <>
      <Header mapName="Dust2" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
