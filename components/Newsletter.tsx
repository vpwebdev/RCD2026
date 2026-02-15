'use client';

import { useState, type FormEvent } from 'react';

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    const form = e.currentTarget;
    form.reset();
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section className="section">
      <div className="container">
        <div className="newsletter">
          <h3>Stay Rooted</h3>
          <p>A weekly reflection delivered to your inbox every Sunday morning.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email"
              required
              aria-label="Email address"
              disabled={submitted}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? 'Subscribed' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
