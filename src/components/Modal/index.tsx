import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { RiCloseFill as CloseIcon } from '@react-icons/all-files/ri/RiCloseFill';

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  dispatchToggleAction: () => {
    type: string;
  };
};

ReactModal.setAppElement('#__next');

const Modal = ({ children, isOpen = false, dispatchToggleAction }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const ModalStyles = {
    overlay: {
      zIndex: 2,
      backgroundColor: theme.colors.darkGray,
      opacity: '0.97',
    },
    content: {
      backgroundColor: theme.colors.darkGray,
      width: '100vw',
      height: '100vh',
      inset: 0,
      border: 'none',
    },
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => dispatch(dispatchToggleAction())}
      style={ModalStyles}
    >
      <StyledCloseIcon onClick={() => dispatch(dispatchToggleAction())} />
      {children}
    </ReactModal>
  );
};

export default Modal;
