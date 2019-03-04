import React from 'react';

class AddFriendModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createFriend(this.state);
  }

  render () {
  return (
    <div className="modal-child friend">
      <header>
        <img src={window.images.banana} />
        <h2>Invite friends</h2>
        <button className="close-modal" onClick={this.props.closeModal}>
          x
        </button>
      </header>

      <form onSubmit={this.handleSubmit}>
        <label className="email-field">
          <h3>To:</h3>
          <input 
            type="text"
            placeholder="Enter email address"
            value={this.state.email}
            onChange={this.handleInput}
          />
          </label>

          <input
            className="add-friend-submit"
            type="submit"
            value="Send invites and add friends"
          />
      </form>
    </div>
  )
  }
}

export default AddFriendModal;