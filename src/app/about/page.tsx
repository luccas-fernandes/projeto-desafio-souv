
import Header from '@/components/Header'; 
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <header className="bg-primary-purple"> 
        <Header />
      </header>

      <div className="max-w-[1440px] mx-auto p-4 flex-grow bg-white font-poppins"> 
        <h1 className=" pt-8 text-3xl font-bold mb-4 text-secondary-purple">Sobre</h1>
        <p className=" text-lg mb-4">
          Este blog é dedicado a compartilhar conhecimentos sobre tecnologia, programação e desenvolvimento. 
          Nossa missão é fornecer conteúdos de qualidade que ajudem os leitores a se desenvolverem em suas carreiras.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Nossos Autores</h2>
        <p className="text-lg mb-4">
          Nossos autores são profissionais experientes nas áreas de tecnologia e desenvolvimento, comprometidos em 
          fornecer informações úteis e atualizadas.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Missão</h2>
        <p className="text-lg mb-4">
          A missão do nosso blog é educar, informar e inspirar pessoas em sua jornada no mundo da programação e tecnologia.
        </p>
      </div>

      <footer className="bg-primary-purple"> 
        <Footer />
      </footer>
    </div>
  );
}
