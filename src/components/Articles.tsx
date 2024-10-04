import Image from "next/image";
import CardOneImage from '../assets/images/image-card-one.png';
import CardTwoImage from '../assets/images/image-card-two.png';
import CardThreeImage from '../assets/images/image-card-three.png';
import CardFourImage from '../assets/images/image-card-four.png';

export default function Articles() {
  const mainArticle = {
    title: "Começando no ReactJS em 2024",
    date: "Janeiro 04, 2024",
    image: CardOneImage,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.",
  };

  const asideItems = [
    {
      title: "Conheça as principais técnicas para conseguir uma vaga internacional em programação",
      date: "Janeiro 04, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique."
    },
    {
      title: "Veja a evolução do Front-end na prática",
      date: "Janeiro 04, 2024",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. "
    },
  ];

  const smallerArticles = [
    {
      title: "10 dicas para conseguir a vaga desejada",
      date: "Janeiro 04, 2022",
      image: CardTwoImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
    {
      title: "Deixe seu código mais semântico com essas dicas",
      date: "Janeiro 04, 2022",
      image: CardThreeImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
    {
      title: "Use essas dicas nas suas aplicações mobile",
      date: "Janeiro 04, 2022",
      image: CardFourImage,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.",
    },
  ];

  return (
    <section className="mt-16 px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          <div className="relative w-[570px] h-[342px] mb-4">
            <Image
              src={mainArticle.image}
              alt={mainArticle.title}
              width={570}
              height={342}
              className="rounded-xl"
            />
            <div className="absolute inset-0 bg-custom-gradient z-10 rounded-xl" />
          </div>
          <div className="max-w-[570px]">
          <time className="text-sm text-black">{mainArticle.date}</time>
          <h3 className="text-xl text-primary-purple md:text-2xl font-bold mt-2 mb-3">{mainArticle.title}</h3>
          <p className="text-base leading-6 w-full  md:text-base text-black">{mainArticle.content}</p>
          </div>
        </article>

        <aside className="space-y-6">
          {asideItems.map((item, index) => (
            <article key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
              <time className="text-xs text-black">{item.date}</time>
              <h4 className="text-2xl font-poppins md:text-2xl font-bold mt-1 text-primary-purple">{item.title}</h4>
              <p className="text-sm leading-6 w-full  md:text-sm text-black pt-2">{item.content}</p>
            </article>
          ))}
        </aside>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {smallerArticles.map((article, index) => (
          <article key={index} className="flex flex-col">
            <div className="relative w-[370px] h-full mb-4">
              <Image
                src={article.image}
                alt={article.title}
                width={370}
                height={232}
                className="rounded-xl object-cover"
              />
              <div className="absolute inset-0 bg-custom-gradient z-10 rounded-xl pointer-events-none" />
            </div>
            <div className="flex flex-col h-full">
              <time className="text-xs text-black">{article.date}</time>
              <h4 className="text-2xl md:text-2xl font-bold mt-2 mb-2 text-primary-purple">{article.title}</h4>
              <p className="text-sm text-black flex-grow">{article.content}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}