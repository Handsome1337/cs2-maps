import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Nuke',
  description: 'Обозначения позиций и раскидки гранат на карте Nuke'
};

const IMAGES: SchemeImage[] = [
  { src: '/nuke-upper.webp', mapName: 'Nuke (сверху)' },
  { src: '/nuke-lower.webp', mapName: 'Nuke (снизу)' }
];

export default function Nuke() {
  return (
    <>
      <Header mapName="Nuke" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
