import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Anubis',
  description: 'Обозначения позиций и раскидки гранат на карте Anubis'
};

const IMAGES: SchemeImage[] = [{ src: '/anubis.webp', mapName: 'Anubis' }];

export default function Anubis() {
  return (
    <>
      <Header mapName="Anubis" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
