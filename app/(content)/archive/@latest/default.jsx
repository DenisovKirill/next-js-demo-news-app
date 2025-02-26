import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/newsList/NewsList';

const LatestPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
