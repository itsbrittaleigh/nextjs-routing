import Image from 'next/image';
import reliabilityImage from 'public/images/reliability.jpg';

export default function Reliability() {
  return (
    <>
      <p>Reliability</p>
      <div className="absolute -z-10 inset-0">
        <Image
          alt="Person in welding mask creating sparks by using soldering iron on metal."
          src={reliabilityImage}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
