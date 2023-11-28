import Image, { StaticImageData } from 'next/image';

interface IHeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: IHeroProps) {
  const { imgData, imgAlt, title } = props;

  return (
    <section className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          alt={imgAlt}
          src={imgData}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}
