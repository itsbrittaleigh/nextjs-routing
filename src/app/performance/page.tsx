import Image from 'next/image';
import performanceImage from 'public/images/performance.jpg';

export default function Performance() {
  return (
    <>
      <p>Performance</p>
      <div className="absolute -z-10 inset-0">
        <Image
          alt="A power saw grinding on metal, causing sparks to fly."
          src={performanceImage}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
