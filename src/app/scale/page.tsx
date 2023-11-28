import Image from 'next/image';
import scaleImage from 'public/images/scale.jpg';

export default function Scale() {
  return (
    <>
      <p>Scale</p>
      <div className="absolute -z-10 inset-0">
        <Image
          alt="Empty warehouse with construction cranes in various places."
          src={scaleImage}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
