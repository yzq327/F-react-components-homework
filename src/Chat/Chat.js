import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  onMessages = (newMessage) => {
    let newMessages = this.state.messages.concat(newMessage);
    const newRobatMessage = answersData.find((answer) => answer.tags.includes(newMessage.text));
    if (newRobatMessage) {
      newMessages = newMessages.concat(newRobatMessage);
    }
    setTimeout(() => {
      this.setState({
        messages: newMessages,
      });
    }, 100);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput onChanged={this.onMessages} />
      </main>
    );
  }
}

export default Chat;
