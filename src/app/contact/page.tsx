'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Mensagem enviada!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className='bg-primary-purple'>
        <Header />
      </div>

      <div className="max-w-[1440px] mx-auto p-4 flex-grow font-poppins">
        <h1 className="text-3xl font-bold">Contato</h1>
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="name">Nome:</label>
            <input className="border rounded p-2 w-full" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="email">E-mail:</label>
            <input className="border rounded p-2 w-full" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm" htmlFor="message">Mensagem:</label>
            <textarea className="border rounded p-2 w-full" id="message" rows={4}></textarea>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded" type="submit">Enviar</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
