import { useState } from 'react';
import ArticleModal from '../components/BlogContent/ArticleModal/ArticleModal';
const useModal = (initialState = true) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleOpenModal = () => setModalState(true);
  const handleCloseModal = () => setModalState(false);

  return {
    ArticleModal,
    isOpen,
    handleOpenModal,
    handleCloseModal,
    setModalState,
  };
};

export default useModal;
