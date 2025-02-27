import NewsList from '@/components/newsList/NewsList';

const NewsPage = async () => {
  const response = await fetch('http://localhost:8080/news');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
