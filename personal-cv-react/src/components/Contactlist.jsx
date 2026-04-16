import React, { useState, useEffect } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setContacts(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Saved Contacts</h2>
      <ul>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))
        ) : (
          <p>No contacts found</p>
        )}
      </ul>
    </div>
  );
}

export default ContactList;