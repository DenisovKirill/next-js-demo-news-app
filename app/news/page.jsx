import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className={'news-list'}>
        {DUMMY_NEWS.map((newsItem) => {
          const { id, slug, title, content, date, image } = newsItem;
          return (
            <li key={id}>
              <Link href={`news/${slug}`}>
                <div>
                  <img src={`/images/news/${image}`} alt={title} />
                  {/*<Image src={`/images/news/${image}`} fill />*/}
                  <span>{title}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NewsPage;
