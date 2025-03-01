import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getNewsItem } from '@/lib/news';

const ImagePage = async ({ params }) => {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  const { image, title } = newsItem;
  return (
    <div className={'fullscreen-image'}>
      <Image src={`/images/news/${image}`} fill alt={title} />
    </div>
  );
};

export default ImagePage;
