import Hero from '@/components/hero/Hero';
import performanceImage from 'public/images/performance.jpg';

export default function Performance() {
  return (
    <Hero
      imgData={performanceImage}
      imgAlt="Person in welding mask creating sparks by using soldering iron on metal."
      title="We serve high performance applications"
    />
  );
}
