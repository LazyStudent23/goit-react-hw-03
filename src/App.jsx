import { useState, useEffect } from "react";

import initialContacts from "./initial-contacts.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    JSON.parse(window.localStorage.getItem("storage-contacts")) &&
      initialContacts;
  });

  useEffect(() => {
    window.localStorage.setItem("storage-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [searchedValue, setSearchedValue] = useState("");

  const searchedContacts = contacts.filter((user) =>
    user.name.toLowerCase().includes(searchedValue.toLowerCase().trim())
  );

  const addContact = (newContact) => {
    setContacts((contacts) => {
      return [...contacts, newContact];
    });
  };

  const deleteContact = (clickedContactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== clickedContactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      {contacts.length !== 0 && (
        <SearchBox value={searchedValue} onSearch={setSearchedValue} />
      )}
      <ContactList contacts={searchedContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
