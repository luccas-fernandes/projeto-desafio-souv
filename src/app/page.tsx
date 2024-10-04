import Articles from '@/components/Articles';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <div>
      <div className="bg-primary-purple border-b-4 border-primary-green">
        <div className="max-w-[1440px] mx-auto p-4">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-4">
        <Articles />
      </div>
      <Footer />
    </div>
  );
}
