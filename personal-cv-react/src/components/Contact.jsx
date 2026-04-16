import React, { useState } from "react";

function Contact({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setName("");
        setEmail("");
        setMessage("");
        if (onSuccess) onSuccess();
      })
      .catch(err => console.error(err));
  }

  return (
    <section style={{ padding: "20px", background: "white" }}>
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

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;