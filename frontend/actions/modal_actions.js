export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, billId = null) => {
  return {
    type: OPEN_MODAL,
    modal,
    billId
  };
};

export const closeModal = () => ({
    type: CLOSE_MODAL
});