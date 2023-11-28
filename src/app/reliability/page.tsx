import Hero from '@/components/hero/Hero';
import reliabilityImage from 'public/images/reliability.jpg';

export default function Reliability() {
  return (
    <Hero
      imgData={reliabilityImage}
      imgAlt="Person in welding mask creating sparks by using soldering iron on metal."
      title="Super high reliability hosting"
    />
  );
}
