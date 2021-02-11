import { PropsWithChildren, useMemo } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

function Modal({ isOpen, setIsOpen, children }: PropsWithChildren<ModalProps>) {
  const appElement = useMemo(() => document.querySelector('#root') || undefined, []);

  return (
    <ReactModal
      appElement={appElement}
      shouldCloseOnOverlayClick
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          width: '100%',
          maxWidth: '736px',
          maxHeight: '800px',
          transform: 'translate(-50%, -50%)',
          padding: '48px 40px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#F0F0F5',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
