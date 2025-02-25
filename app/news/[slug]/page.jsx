import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const NewsDetailsPage = ({ params }) => {
  const newsSlug = params.slug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  const { title, image, date, content } = newsItem;

  return (
    <article className={'news-article'}>
      <header>
        <Image src={`/images/news/${image}`} width={500} height={500} alt={title} />
        <h1>{title}</h1>
        <time>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
};

export default NewsDetailsPage;
