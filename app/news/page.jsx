import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import NewsList from '@/components/newsList/NewsList';
// import Image from 'next/image';

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      {/*<ul className={'news-list'}>*/}
      {/*  {DUMMY_NEWS.map((newsItem) => {*/}
      {/*    const { id, slug, title, image } = newsItem;*/}
      {/*    return <NewsList newsItem={newsItem} />;*/}
      {/*  })}*/}
      {/*</ul>*/}
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsPage;
