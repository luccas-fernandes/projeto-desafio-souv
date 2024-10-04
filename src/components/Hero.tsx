import Image from 'next/image';
import codingImage from '../assets/images/imageHeroSection.png';
import arrowIcon from '../assets/images/arrow-right.svg';
const Hero = () => (
  <section className="relative flex flex-col lg:flex-row justify-between items-center p-8 pt-2 text-white h-auto lg:h-[513.75px]">
    <div className="max-w-[570px] relative z-10 mb-6 lg:mb-0">
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-secondary-pink leading-[40px] lg:leading-[54px]">
        Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
      </h2>
      <p className="w-full lg:w-2/3 mt-4 leading-7 text-gray-300 text-base lg:text-lg">
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit.
      </p>
      <a href="#" className="mt-4 inline-flex items-center text-secondary-pink py-2 rounded font-bold">

        Veja mais
        <Image
          src={arrowIcon}
          alt="Seta"
          width={24}
          height={24}
          className="ml-2 text-primary-green"
        />

      </a>
    </div>

    <div className="relative w-full lg:w-[570px] h-[300px] lg:h-[346px]">
      <Image
        src={codingImage}
        alt="coding"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-custom-gradient z-10 rounded-xl" />
    </div>
  </section>
);

export default Hero;
