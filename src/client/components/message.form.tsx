import React from 'react';

export function MessageForm({
  sendMessage,
}: {
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (<><div className="h-1/6">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(e);
        e.currentTarget.reset();
      } }
      className="flex w-full appearance-none flex-col outline-none"
    >
      <textarea
        id="minput"
        placeholder="Ваше сообщение"
        className="mb-2 rounded-md border border-slate-400 bg-black-800 text-black placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      ></textarea>
      <input
        type="submit"
        value="Отправить"
        className="mb-2 rounded-md bg-red-500 text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-red-500"
      ></input>
    </form>
  </div></>);
}
