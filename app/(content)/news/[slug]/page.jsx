import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getNewsItem } from '@/lib/news';

const NewsDetailsPage = async ({ params }) => {
  const newsSlug = params.slug;

  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  const { title, image, date, content, slug } = newsItem;

  return (
    <article className={'news-article'}>
      <header>
        <Link href={`/news/${slug}/image`}>
          <Image src={`/images/news/${image}`} width={500} height={500} alt={title} />
        </Link>
        <h1>{title}</h1>
        <time>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
};

export default NewsDetailsPage;
