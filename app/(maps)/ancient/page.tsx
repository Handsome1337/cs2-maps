import type { Metadata } from 'next';
import Header from '@/app/ui/maps/header';
import Main from '@/app/ui/maps/main';
import Scheme, { type SchemeImage } from '@/app/ui/maps/scheme';

export const metadata: Metadata = {
  title: 'Ancient',
  description: 'Обозначения позиций и раскидки гранат на карте Ancient'
};

const IMAGES: SchemeImage[] = [{ src: '/ancient.jpg', mapName: 'Ancient' }];

export default function Ancient() {
  return (
    <>
      <Header mapName="Ancient" />
      <Main>
        <Scheme images={IMAGES} />
      </Main>
    </>
  );
}
