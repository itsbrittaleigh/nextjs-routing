import Hero from '@/components/hero/Hero';
import Image from 'next/image';
import scaleImage from 'public/images/scale.jpg';

export default function Scale() {
  return (
    <Hero
      imgData={scaleImage}
      imgAlt="Empty warehouse with construction cranes in various places."
      title="Scale your app to infinity"
    />
  );
}
