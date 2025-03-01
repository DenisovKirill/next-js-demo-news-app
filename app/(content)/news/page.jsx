import NewsList from '@/components/newsList/NewsList';
import { getAllNews } from '@/lib/news';

const NewsPage = async () => {
  // const response = await fetch('http://localhost:8080/news');
  //
  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }
  //
  // const news = await response.json();

  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
