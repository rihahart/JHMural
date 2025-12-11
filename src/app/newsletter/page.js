"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ButtonCollection/Button";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

export default function Newsletter() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [errors, setErrors] = useState({
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

  const handleFocus = (fieldName) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: ''
    };

    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "We'd love to know what to call you";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Almost there! We just need your last name.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "We'll need your email to stay in touch";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

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
        setErrors({ firstName: '', lastName: '', email: '' });
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

  const renderFormFields = () => (
    <>
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
          onFocus={() => handleFocus('firstName')}
          className="w-full px-4 py-3 border-b border-[var(--color-border-primary)] bg-[var(--color-background-hover)] focus:bg-[var(--color-background-notice-subtle)] focus:outline-none rounded-none border-0"
        />
        {errors.firstName && (
          <p className="text-[var(--color-content-negative-bold)] font-bold text-sm mt-2">{errors.firstName}</p>
        )}
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
          onFocus={() => handleFocus('lastName')}
          className="w-full px-4 py-3 border-b border-[var(--color-border-primary)] bg-[var(--color-background-hover)] focus:bg-[var(--color-background-notice-subtle)] focus:outline-none rounded-none border-0"
        />
        {errors.lastName && (
          <p className="text-[var(--color-content-negative-bold)] font-bold text-sm mt-2">{errors.lastName}</p>
        )}
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
          onFocus={() => handleFocus('email')}
          className="w-full px-4 py-3 border-b border-[var(--color-border-primary)] bg-[var(--color-background-hover)] focus:bg-[var(--color-background-notice-subtle)] focus:outline-none rounded-none border-0"
        />
        {errors.email && (
          <p className="text-[var(--color-content-negative-bold)] font-bold text-sm mt-2">{errors.email}</p>
        )}
      </div>

      {status.message && status.type === 'error' && (
        <div className="p-4 rounded-md bg-red-100 text-red-800">
          {status.message}
        </div>
      )}
    </>
  );

  const renderThankYou = () => {
    // Mobile
    if (isMobile) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col gap-[var(--spacing-xl)] items-start bg-[var(--color-background-hover)] p-[var(--spacing-2xl)] w-full max-w-[600px] mx-auto">
            <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
              Welcome to the JH Mural Project family
            </h1>
            <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">
              We will keep you updated with the latest news, events, and upcoming mural projects. Continue your support and make a donation to help fund future murals.
            </p>
            <Button
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
            >
              Donate
            </Button>
          </div>
        </div>
      );
    }

    // Tablet
    if (isTablet) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col gap-[var(--spacing-2xl)] items-start bg-[var(--color-background-hover)] p-[var(--spacing-4xl)] w-full max-w-[800px] mx-auto">
            <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
              Welcome to the JH Mural Project family
            </h1>
            <p className="web-text-lg-medium text-[var(--color-content-primary)]">
              We will keep you updated with the latest news, events, and upcoming mural projects. Continue your support and make a donation to help fund future murals.
            </p>
            <Button
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                trailingIcon="/flower.svg"
                className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
              >
                Donate
              </Button>
          </div>
        </div>
      );
    }

    // Desktop 1440px
    if (isDesktop1440px) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="flex flex-col gap-[var(--spacing-2xl)] bg-[var(--color-background-hover)] p-[var(--spacing-5xl)] w-full max-w-[900px] mx-auto">
            <h1 className="hero-xs text-[var(--color-content-primary)]">
              Welcome to the JH Mural Project family
            </h1>
            <p className="web-text-xl-medium text-[var(--color-content-primary)]">
              We will keep you updated with the latest news, events, and upcoming mural projects. Continue your support and make a donation to help fund future murals.
            </p>
            <Button
                href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="large"
                trailingIcon="/flower.svg"
                className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
              >
                Donate
              </Button>
          </div>
        </div>
      );
    }

    // Desktop 1440px+
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col gap-[var(--spacing-2xl)] bg-[var(--color-background-hover)] p-[var(--spacing-6xl)] w-full max-w-[1000px] mx-auto">
          <h1 className="hero-s text-[var(--color-content-primary)]">
            Welcome to the JH Mural Project family
          </h1>
          <p className="web-text-2xl-medium text-[var(--color-content-primary)]">
            We will keep you updated with the latest news, events, and upcoming mural projects. Continue your support and make a donation to help fund future murals.
          </p>
          <Button
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="large"
              trailingIcon="/flower.svg"
              className="px-[var(--spacing-lg)] text-xl flex items-center !rounded-none w-fit"
            >
              Donate
            </Button>
        </div>
      </div>
    );
  };

  // Mobile
  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <div className="flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]">
          {!isSubscribed ? (
            <>
              <div className="flex flex-col gap-[var(--spacing-xl)]">
                <h1 className="hero-xs text-[var(--color-content-primary)]">
                  Join our newsletter
                </h1>
                <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">
                Keep up with the latest news, events, and upcoming mural projects from the Jackson Heights Mural Project.
                </p>
              </div>
              <div className="flex flex-col gap-[var(--spacing-2xl)]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--spacing-xl)]">
                  {renderFormFields()}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary-inverse"
                    size="small"
                    trailingIcon="/arrow-right.svg"
                    className="w-full mt-[var(--spacing-lg)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
                <div className="w-full">
                  <Image
                    src="/newsletter/newsletter.jpeg"
                    alt="Newsletter"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </>
          ) : (
            renderThankYou()
          )}
        </div>
      </div>
    );
  }

  // Tablet
  if (isTablet) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <div className="flex flex-col px-[var(--spacing-4xl)] py-[var(--spacing-6xl)] gap-[var(--spacing-6xl)]">
          {!isSubscribed ? (
            <>
              <div className="flex flex-col gap-[var(--spacing-2xl)]">
                <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
                  Join our newsletter
                </h1>
                <p className="web-text-lg-medium text-[var(--color-content-primary)]">
                Keep up with the latest news, events, and upcoming mural projects from the Jackson Heights Mural Project.
                </p>
              </div>
              <div className="flex flex-col gap-[var(--spacing-6xl)]">
                <div className="max-w-full">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--spacing-xl)]">
                    {renderFormFields()}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary-inverse"
                      size="small"
                      trailingIcon="/arrow-right.svg"
                      className="w-full mt-[var(--spacing-lg)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </form>
                </div>
                <div className="w-full">
                  <Image
                    src="/newsletter/newsletter.jpeg"
                    alt="Newsletter"
                    width={1000}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </>
          ) : (
            renderThankYou()
          )}
        </div>
      </div>
    );
  }

  // Desktop 1440px
  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <div className="flex flex-col max-w-[1400px] mx-auto px-[var(--spacing-5xl)] py-[var(--spacing-7xl)] gap-[var(--spacing-7xl)]">
          {!isSubscribed ? (
            <>
              <div className="flex flex-col gap-[var(--spacing-2xl)]">
                <h1 className="hero-xs text-[var(--color-content-primary)]">
                  Join our newsletter
                </h1>
                <p className="web-text-xl-medium text-[var(--color-content-primary)]">
                Keep up with the latest news, events, and upcoming mural projects from the Jackson Heights Mural Project.
                </p>
              </div>
              <div className="flex gap-[var(--spacing-6xl)] items-start">
                <div className="flex-1">
                  <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--spacing-xl)]">
                    {renderFormFields()}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="primary-inverse"
                      size="small"
                      trailingIcon="/arrow-right.svg"
                      className="w-fit mt-[var(--spacing-lg)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </form>
                </div>
                <div className="flex-1">
                  <Image
                    src="/newsletter/newsletter.jpeg"
                    alt="Newsletter"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </>
          ) : (
            renderThankYou()
          )}
        </div>
      </div>
    );
  }

  // Desktop 1440px+
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
      <div className="flex flex-col max-w-[1600px] mx-auto px-[var(--spacing-6xl)] py-[var(--spacing-8xl)] gap-[var(--spacing-8xl)]">
        {!isSubscribed ? (
          <>
            <div className="flex flex-col gap-[var(--spacing-2xl)]">
              <h1 className="hero-s text-[var(--color-content-primary)]">
                Join our newsletter
              </h1>
              <p className="web-text-2xl-medium text-[var(--color-content-primary)]">
                Keep up with the latest news, events, and upcoming mural projects from the Jackson Heights Mural Project.
              </p>
            </div>
            <div className="flex gap-[var(--spacing-8xl)] items-start justify-between">
              <div className="flex-1">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--spacing-xl)]">
                  {renderFormFields()}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary-inverse"
                    size="small"
                    trailingIcon="/arrow-right.svg"
                    className="w-fit mt-[var(--spacing-lg)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </Button>
                </form>
              </div>
              <div className="flex-1">
                <Image
                  src="/newsletter/newsletter.jpeg"
                  alt="Newsletter"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </>
        ) : (
          renderThankYou()
        )}
      </div>
    </div>
  );
}

