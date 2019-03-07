import React from 'react';
import { connect } from 'react-redux';
import { createBill } from '../../actions/bills_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const AddBill = props => {
  return (
    props.openModal
  );
};

const mapStateToProps = state => ({
  modalType: 'addBill'
});

const mapDispatchToProps = dispatch => ({
  createBill: bill => dispatch(createBill(bill)),
  closeModal: () => dispatch(closeModal()),
  openModal: (
    <button
      className="add-bill"
      onClick={() => dispatch(openModal('addBill'))}>
      Add a Bill
    </button>
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBill);