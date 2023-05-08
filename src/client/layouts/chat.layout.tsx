import React from 'react';

export const ChatLayout = (
  {
    children,
  }: {
    children: React.ReactElement[];
  }
): JSX.Element => {
  return (<><div className="mx-auto flex h-screen w-screen justify-center bg-gray-800">
    <div className="h-full w-4/12">{children}</div>
  </div></>);
};
