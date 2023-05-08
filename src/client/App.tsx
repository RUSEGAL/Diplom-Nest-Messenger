import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import {
  User,
  Message,
  ServerToClientEvents,
  ClientToServerEvents,
} from '../shared/interfaces/chat.interface';
import { Header } from './components/header';
import { LoginForm } from './components/login.form';
import { MessageForm } from './components/message.form';
import { Messages } from './components/messages';
import { ChatLayout } from './layouts/chat.layout';
import { LoginLayout } from './layouts/login.layout';

const App = (): JSX.Element => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const socket: Socket = io();

    const handleConnect = (): void => {
      setIsConnected(true);
    };

    const handleDisconnect = (): void => {
      setIsConnected(false);
    };

    const handleChat = (message: Message): void => {
      setMessages((messages) => [message, ...messages]);
    };

    if (JSON.parse(sessionStorage.getItem('user') ?? '{}').userId) {
      setUser(JSON.parse(sessionStorage.getItem('user') ?? '{}'));

      socket.on('connect', handleConnect);
      socket.on('disconnect', handleDisconnect);
      socket.on('chat', handleChat);

      return () => {
        socket.off('connect', handleConnect);
        socket.off('disconnect', handleDisconnect);
        socket.off('chat', handleChat);
      };
    }
  }, []);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!user) return;
    const message: Message = {
      user: {
        userId: user.userId,
        userName: user.userName,
      },
      timeSent: new Date(Date.now()).toLocaleString('en-US'),
      message: e.currentTarget[0].value,
    };
    io().emit('chat', message);
    e.currentTarget.reset();
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formValue: string = e.currentTarget[0].value;
    const newUser: User = {
      userId: Date.now().toLocaleString().concat(formValue),
      userName: formValue,
    };
    sessionStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <>
      {user && user.userId ? (
        <ChatLayout>
          <Header user={user} isConnected={isConnected} />
          <Messages user={user} messages={messages} />
          <MessageForm sendMessage={handleSendMessage} />
        </ChatLayout>
      ) : (
        <LoginLayout>
          <LoginForm login={handleLogin} />
        </LoginLayout>
      )}
    </>
  );
};

export default App;