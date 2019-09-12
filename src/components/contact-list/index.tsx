import React from 'react';
import { IContact } from '../../models';

interface IContactListProps {
  contactList: IContact[];
}
export const ContactList: React.SFC<IContactListProps> = (
  props: IContactListProps
) => {
  const { contactList } = props;
  return (
    <div className="p-4">
      <div className="font-bold text-xl mb-2">Contact List</div>
      <div className="flex">
        <div className="flex-1 bg-gray-400 h-6">First Name</div>
        <div className="flex-1 bg-gray-400 h-6">Last Name</div>
        <div className="flex-1 bg-gray-400 h-6">Email</div>
        <div className="flex-1 bg-gray-400 h-6">Phone Number</div>
        <div className="flex-1 bg-gray-400 h-6">Address</div>
      </div>
      {contactList.length === 0 && <div>No records</div>}
      {contactList.map((contact: IContact) => {
        return (
          <div className="flex _contact-item_" key={contact.id}>
            <div className="flex-1 h-6">{contact.firstName}</div>
            <div className="flex-1 h-6">{contact.lastName}</div>
            <div className="flex-1 h-6">{contact.email}</div>
            <div className="flex-1 h-6">{contact.phone}</div>
            <div className="flex-1 h-6">{contact.address}</div>
          </div>
        );
      })}
    </div>
  );
};
