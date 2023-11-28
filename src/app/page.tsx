import Image from 'next/image';
import homeImage from 'public/images/home.jpg';

export default function Home() {
  return (
    <>
      <p>Home page</p>
      <div className="absolute -z-10 inset-0">
        <Image
          alt="Machines assembling car body shells."
          src={homeImage}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
