import Hero from '@/components/hero/Hero';
import Image from 'next/image';
import homeImage from 'public/images/home.jpg';

export default function Home() {
  return (
    <Hero
      imgData={homeImage}
      imgAlt="Machines assembling car body shells."
      title="Professional Cloud Hosting"
    />
  );
}
