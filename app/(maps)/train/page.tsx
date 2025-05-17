import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Train',
  description: 'Обозначения позиций и раскидки гранат на карте Train'
};

const IMAGES: SchemeImage[] = [
  { src: '/train-upper.jpg', mapName: 'Train (сверху)' },
  { src: '/train-lower.jpg', mapName: 'Train (снизу)' }
];

export default function Train() {
  return (
    <>
      <Header mapName="Train" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
