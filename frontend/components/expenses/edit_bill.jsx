import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const EditBill = props => {
  return (
    props.openModal
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: (
    <button
      className="edit-bill"
      onClick={() => dispatch(openModal('editBill', ownProps.bill.id))}>
       Edit bill
    </button>
  )
});

export default connect(null, mapDispatchToProps)(EditBill);