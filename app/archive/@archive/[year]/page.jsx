import { getNewsForYear } from '@/lib/news';
import NewsList from '@/components/newsList/NewsList';

const YearNewsPage = ({ params }) => {
  const newsPerYear = getNewsForYear(params.year);

  return <NewsList news={newsPerYear} />;
};

export default YearNewsPage;
