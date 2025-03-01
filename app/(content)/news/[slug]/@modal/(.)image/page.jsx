import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ModalBackdrop from '@/components/modalBackdrop/ModalBackdrop';
import { getNewsItem } from '@/lib/news';

const ImagePage = async ({ params }) => {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  const { image, title } = newsItem;
  return (
    <ModalBackdrop>
      <dialog className={'modal'} open>
        <div className={'fullscreen-image'}>
          <Image src={`/images/news/${image}`} fill alt={title} />
        </div>
      </dialog>
    </ModalBackdrop>
  );
};

export default ImagePage;
