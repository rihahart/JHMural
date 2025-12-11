"use client";

import React, { useState } from "react";
import Button from "@/components/ButtonCollection/Button";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

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
        setIsSubscribed(true);
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to subscribe' });
      }
    } catch {
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
        
        {!isSubscribed ? (
          <>
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

                {status.message && status.type === 'error' && (
                  <div className="p-4 rounded-md bg-red-100 text-red-800">
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
          </>
        ) : (
          <div className="text-center py-[var(--spacing-6xl)]">
            <p className="text-2xl md:text-3xl font-semibold mb-[var(--spacing-4xl)] text-[var(--color-content-primary)]">
              Thank you for signing up for updates from JH Mural Project!
            </p>
            <Button
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit mx-auto"
            >
              Donate
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

