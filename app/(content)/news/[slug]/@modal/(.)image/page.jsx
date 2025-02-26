'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';

const ImagePage = ({ params }) => {
  const { slug } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const router = useRouter();

  // const onClick = () => {
  //   router.back();
  // };

  const { image, title } = newsItem;
  return (
    <div className={'modal-backdrop'} onClick={router.back}>
      <dialog className={'modal'} open>
        <div className={'fullscreen-image'}>
          <Image src={`/images/news/${image}`} fill alt={title} />
        </div>
      </dialog>
    </div>
  );
};

export default ImagePage;
