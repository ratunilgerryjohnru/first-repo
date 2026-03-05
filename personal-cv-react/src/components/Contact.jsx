import React from 'react';
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name}!`);
  };

  return (
    <section style={{ padding: '20px', background: 'white' }}>
      <h2>CONTACT ME</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea placeholder="Your Message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;