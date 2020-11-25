import React, { Component } from 'react';
import { ROLE } from '../../constants';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newMessage: { text: '', role: ROLE.CUSTOMER, tags: '' },
    };
  }

  handleChange = (event) => {
    this.setState({
      newMessage: { text: event.target.value },
    });
  };

  submitMessage = () => {
    if (this.state.newMessage.text) {
      this.props.onChanged(this.state.newMessage);
    }
    this.setState({
      newMessage: { text: '' },
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" value={this.state.newMessage.text} onChange={this.handleChange} />
        <button type="button" onClick={this.submitMessage}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
