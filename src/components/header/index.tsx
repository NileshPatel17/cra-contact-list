import React from 'react';

interface IHeader {
  onGotoHome: () => void;
  onNewContact: () => void;
}
export const Header: React.SFC<IHeader> = (props: IHeader) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Simple Contact App - PR 2
        </span>
      </div>
      <div className="w-full block flex flex-row-reverse lg:items-center lg:w-auto">
        <span>
          <a
            onClick={props.onNewContact}
            className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Create New Contact
          </a>
        </span>
        <span>
          <a
            onClick={props.onGotoHome}
            className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Contact List
          </a>
        </span>
      </div>
    </nav>
  );
};
