import React, { useState } from 'react';
import { Header } from './components/header';
import { ContactForm } from './components/contact-create';
import { ContactList } from './components/contact-list';
import { IContact } from './models';

const defaultContactList: IContact[] = [];
function App() {
  const [createNewContact, setCreateNewContact] = useState(false);
  const [contactList, setContactList] = useState(defaultContactList);
  console.log('TCL: App -> contactList', contactList);
  const onAddContact = (formData: IContact) => {
    const totalContacts = contactList.length;
    formData.id = totalContacts + 1;
    setContactList(contactList.concat(formData));
    setCreateNewContact(false);
  };
  return (
    <div>
      <Header
        onGotoHome={() => setCreateNewContact(false)}
        onNewContact={() => setCreateNewContact(true)}
      />
      {createNewContact ? (
        <ContactForm onAddContact={onAddContact} />
      ) : (
        <ContactList contactList={contactList} />
      )}
    </div>
  );
}

export default App;
