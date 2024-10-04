import Header from '@/components/Header'; // Altere o caminho se necessário
import Footer from '@/components/Footer'; // Altere o caminho se necessário
import Link from 'next/link';

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='bg-primary-purple'>
      <Header />
      </div>

      <div className="max-w-[1440px] mx-auto p-4 flex-grow font-poppins">
        <h1 className="text-3xl font-bold mb-4 pt-5">Categorias</h1>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="#" className="text-lg text-primary-purple hover:text-secondary-pink transition duration-200">
              Desenvolvimento Web
            </Link>
          </li>
          <li>
            <Link  href="#" className="text-lg text-primary-purple hover:text-secondary-pink transition duration-200">
              Mobile
            </Link>
          </li>
          <li>
            <Link  href="#" className="text-lg text-primary-purple hover:text-secondary-pink transition duration-200">
              Backend
            </Link>
          </li>
          <li>
            <Link  href="#" className="text-lg text-primary-purple hover:text-secondary-pink transition duration-200">
              Frontend
            </Link>
          </li>
          <li>
            <Link href="/categorias/ui-ux-design" className="text-lg text-primary-purple hover:text-secondary-pink transition duration-200">
              UI/UX Design
            </Link>
          </li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
