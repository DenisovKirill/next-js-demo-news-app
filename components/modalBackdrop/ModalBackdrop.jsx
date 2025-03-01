'use client';

import { useRouter } from 'next/navigation';

const ModalBackdrop = ({ children }) => {
  const router = useRouter();
  return (
    <div className={'modal-backdrop'} onClick={router.back}>
      {children}
    </div>
  );
};

export default ModalBackdrop;
