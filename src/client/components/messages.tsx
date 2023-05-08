import React from 'react';
import { Message, User } from '../../shared/interfaces/chat.interface';

function determineMessageStyle(user: User, messageUserId: string) {
  if (!(user && messageUserId === user.userId)) {
    return `bg-slate-700 p-4 mr-24 mb-4 rounded`;
  } else
    return 'bg-green-900 p-4 ml-24 mb-4 rounded';
}

export const Messages = ({
  user,
  messages,
}: {
  user: User;
  messages: Message[];
}): 
JSX.Element => (<><div className="w-ful flex h-4/6 flex-col-reverse overflow-y-scroll">
  {messages?.map((message, index) => {
    return (
      <div
        key={index}
        className={determineMessageStyle(user, message.user.userId)}
      >
        <span className="text-sm text-gray-200">
          {message.user.userName}
        </span>
        <span className="text-sm text-gray-200">{' ' + '•' + ' '}</span>
        <span className="text-sm text-gray-200">{message.timeSent}</span>
        <p className="text-black">{message.message}</p>
      </div>
    );
  })}
</div></>);
