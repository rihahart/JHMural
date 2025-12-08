"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ firstName: '', lastName: '', email: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to subscribe' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] py-[var(--spacing-6xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-6xl)]">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-[var(--spacing-2xl)] text-[var(--color-content-primary)]">
          Join Our Newsletter
        </h1>
        
        <p className="text-lg mb-[var(--spacing-4xl)] text-[var(--color-content-secondary)]">
          Stay updated with the latest news, events, and mural projects from Jackson Heights Mural Project.
        </p>

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--spacing-lg)]">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-[var(--color-content-primary)]">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-b border-[var(--color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-[var(--color-content-primary)]">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-content-primary)]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-b border-[var(--color-border-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-md ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-4 px-6 font-semibold hover:bg-gray-800 transition-colors mt-[var(--spacing-lg)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

