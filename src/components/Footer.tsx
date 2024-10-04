import Image from "next/image";
import Link from "next/link"; // Importando o Link do Next.js
import logo from '../assets/images/logo.svg';
import facebookIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import instagramIcon from '../assets/images/instagram.svg';

const Footer = () => (
  <footer className="bg-primary-purple text-white py-10">
    <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
        <Image src={logo} alt="The Blog" width={150} height={75} className="mb-4" />
        <p className="text-sm text-gray-400">
          © 2024 The Blog. Todos os direitos reservados.
        </p>
      </div>

      <nav>
        <ul className="flex flex-col md:flex-row md:space-x-8 text-center md:text-left space-y-4 md:space-y-0">
          <li>
            <Link href="/" className="text-lg hover:text-secondary-pink transition duration-200">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-secondary-pink transition duration-200">Sobre</Link>
          </li>
          <li>
            <Link href="/categories" className="text-lg hover:text-secondary-pink transition duration-200">Categorias</Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-secondary-pink transition duration-200">Contato</Link>
          </li>
        </ul>
      </nav>

      <div className="flex space-x-4 mt-6 md:mt-0">
        <a href="#" aria-label="Facebook" className="transition duration-200 transform hover:scale-110">
          <Image
            src={facebookIcon} 
            alt="facebook-icon"
            width={32} 
            height={32}
            className="filter invert transition duration-200"
          />
        </a>
        <a href="#" aria-label="Twitter" className="transition duration-200 transform hover:scale-110">
          <Image
            src={twitterIcon} 
            alt="twitter-icon"
            width={32} 
            height={32}
            className="filter invert transition duration-200"
          />
        </a>
        <a href="#" aria-label="Instagram" className="transition duration-200 transform hover:scale-110">
          <Image
            src={instagramIcon} 
            alt="instagram-icon"
            width={32} 
            height={32}
            className="filter invert transition duration-200"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
