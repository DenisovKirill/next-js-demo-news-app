import Link from 'next/link';
import Image from 'next/image';

const NewsList = ({ news }) => {
  return (
    <ul className={'news-list'}>
      {news.map((newsItem) => {
        const { id, slug, title, image } = newsItem;
        return (
          <li key={id}>
            <Link href={`/news/${slug}`}>
              <div>
                <Image src={`/images/news/${image}`} width={500} height={500} alt={title} />
                <span>{title}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
