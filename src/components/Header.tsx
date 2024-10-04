import Image from 'next/image';
import logo from '../assets/images/logo.svg';
import searchIcon from "../assets/images/search.svg";
import Link from 'next/link';

const Header = () => (
  <header className="flex flex-col md:flex-row justify-between items-center p-8 pb-2 text-white">
    <Image src={logo} alt="The Blog" width={200} height={100} />
    
    <nav className="mt-4 md:mt-0">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
        <li>
          <Link href="/" className="text-lg font-bold border-l-2 border-green-500 pl-1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-lg">
            Sobre
          </Link>
        </li>
        <li>
          <Link href="/categories" className="text-lg">
            Categorias
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-lg">
            Contato
          </Link>
        </li>
      </ul>
    </nav>

    <div className="mt-4 md:mt-0 flex items-center">
      <input
        type="text"
        placeholder="Buscar"
        className="bg-secondary-purple p-2 pl-8 py-3 rounded-l focus:outline-none"
      />
      <div className="bg-secondary-pink flex items-center justify-center p-3 rounded-r cursor-pointer">
        <Image
          src={searchIcon}
          alt="Buscar"
          width={24}
          height={24}
        />
      </div>
    </div>
  </header>
);

export default Header;
