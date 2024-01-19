'use client';

import { ModalProvider } from '@/providers/Modal';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return <ModalProvider>{children}</ModalProvider>;
}
