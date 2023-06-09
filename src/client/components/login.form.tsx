import React from 'react';

export const LoginForm = function ({
  login,
}: {
  login: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (<><div className="my-auto">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        login(e);
      } }
      className="flex h-127 w-127 items-center justify-center border border-green-700"
    >
      <input
        type="text"
        id="login"
        placeholder="Ваше имя"
        className="mx-2 h-12 rounded-md border border-slate-400 bg-black-800 text-black placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:box-red-500"
      ></input>
      <button
        type="submit"
        className="mx-2 flex h-12 w-12 items-center justify-center  bg-red-700 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </form>
  </div></>);
};
