'use client';

import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const form = e.currentTarget;
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your name" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Your email" />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject">
          <option value="general">General Inquiry</option>
          <option value="testimony">Share a Testimony</option>
          <option value="prayer">Prayer Request</option>
          <option value="feedback">Feedback</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={8}
          required
          placeholder="What's on your heart?"
        ></textarea>
      </div>

      <button type="submit" className="btn" disabled={submitted}>
        {submitted ? 'Message Sent' : 'Send Message'}
      </button>
    </form>
  );
}
