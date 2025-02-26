import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news';
import NewsList from '@/components/newsList/NewsList';
import Link from 'next/link';

const YearNewsPage = ({ params }) => {
  const { filter } = params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  const availableYears = getAvailableNewsYears();
  const availableMonths = getAvailableNewsMonths(selectedYear);

  let news;
  let links = availableYears;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = availableMonths;
  }

  let newsContent = <p>No news was found for selected period.</p>;

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  if (news && news.length) {
    newsContent = <NewsList news={news} />;
  }

  if (
    (selectedYear && !availableYears.includes(+selectedYear)) ||
    (selectedMonth && !availableMonths.includes(+selectedMonth))
  ) {
    throw new Error('Invalid filter');
  }

  return (
    <>
      <header id={'archive-header'}>
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear ? `/archive/${selectedYear}/${link}` : `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default YearNewsPage;
