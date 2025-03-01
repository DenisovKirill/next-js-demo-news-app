import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/newsList/NewsList';

const LatestPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest news</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
