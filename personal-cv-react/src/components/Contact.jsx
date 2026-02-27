import React from 'react';

function Contact() {
  return (
    <section style={{ padding: '20px', background: 'white' }}>
      <h2>CONTACT ME</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <br />
        <input type="email" placeholder="Your Email" />
        <br />
        <textarea placeholder="Your Message"></textarea>
        <br />
        <button type="button">Submit</button>
      </form>
    </section>
  );
}

export default Contact;