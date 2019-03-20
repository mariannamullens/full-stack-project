import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import AddFriendModalContainer from './add_friend_modal_container';
import AddBillModalContainer from './add_bill_modal_container';
import EditBillModalContainer from './edit_bill_modal_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'addFriend':
      component = <AddFriendModalContainer />;
      break;
    case 'addBill':
      component = <AddBillModalContainer />;
      break;
    case 'editBill':
      component = <EditBillModalContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background animated fadeIn" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);