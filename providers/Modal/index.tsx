import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
  useMemo,
  useCallback
} from 'react';
import Modal from 'react-modal';
import Button from '@/components/commons/Button';
import style from './style.module.scss';

interface IOpenModalParamOptions {
  closeModalCallback?: () => void;
  isNoCloseBtn: boolean;
}

export const ModalContext = createContext<
  | {
      openModal: (
        modalContent: ReactNode,
        options?: IOpenModalParamOptions
      ) => void;
      closeModal: () => void;
    }
  | undefined
>(undefined);

export function useModal() {
  const modal = useContext(ModalContext);
  if (modal) return modal;
  throw new Error('useModal must be used within AlertModalProvider');
}

export function ModalProvider({
  children
}: {
  children: ReactNode;
}): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  // closeModal이 실행될 때 추가적으로 필요한 이벤트를 할당하기 위한 값
  const [closeModalCallback, setCloseModalCallback] = useState<() => void>();
  // 모달의 닫기 버튼을 별도로 작업하는 경우 닫기 버튼을 없애기 위한 값
  const [isNoCloseBtn, setIsCloseOkBtn] = useState(false);
  const handleHtmlOverflowHidden = (isHidden: boolean) => {
    const html = document.querySelector('html');
    if (html === null) return;
    html.style.overflow = isHidden ? 'hidden' : 'auto';
  };
  const openModal = useCallback(
    (modalContent: ReactNode, options?: IOpenModalParamOptions) => {
      setContent(modalContent);
      setIsOpen(true);
      handleHtmlOverflowHidden(true);
      if (options?.isNoCloseBtn) {
        setIsCloseOkBtn(true);
      }
      if (options?.closeModalCallback) {
        setCloseModalCallback(() => options.closeModalCallback);
      }
    },
    []
  );
  const closeModal = useCallback(() => {
    setIsOpen(false);
    handleHtmlOverflowHidden(false);
    if (isNoCloseBtn) setIsCloseOkBtn(false);
    if (closeModalCallback) closeModalCallback();
  }, [isNoCloseBtn, closeModalCallback]);
  const handleClickOverlayClose = () => {
    closeModal();
  };
  const ModalProviderValue = useMemo(
    () => ({ openModal, closeModal }),
    [openModal, closeModal]
  );
  return (
    <ModalContext.Provider value={ModalProviderValue}>
      {children}
      <Modal
        isOpen={isOpen}
        overlayClassName={style.overlay}
        className={style.modal}
        ariaHideApp={false}
        shouldCloseOnEsc
        shouldCloseOnOverlayClick
        onRequestClose={handleClickOverlayClose}
      >
        {content}
        {!isNoCloseBtn && (
          <Button className={style.closeButton} onClick={closeModal}>
            닫기
          </Button>
        )}
      </Modal>
    </ModalContext.Provider>
  );
}
