import React from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../../actions/friends_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


class AddFriend extends React.Component {
  render() {
    return(
      this.props.openModal
    // <div className="add-friend">+ add</div>
    )
  }
}

const mapStateToProps = state => ({
  modalType: 'addFriend'
})

const mapDispatchToProps = dispatch => ({
  createFriend: friend => dispatch(createFriend(friend)),
  closeModal: () => dispatch(closeModal()),
  openModal: (
    <button 
      className="add-friend"
      onClick={() => dispatch(openModal('addFriend'))}>
       + add
      </button>
  ),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFriend);