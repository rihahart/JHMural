"use client";

import React from "react";
import Button from "../ButtonCollection/Button";

export default function GetInvolvedSection() {
  return (
    <div className="bg-[var(--color-brand-600)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Get Involved Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Get Involved
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            We are always looking for volunteers with good vibes. Our main concerns right now are spreading awareness and raising money for future projects. If you have any ideas or want to pitch in, please reach out to us by DM&apos;ing us on our socials or by emailing{" "}
            <a 
              href="mailto:jhmuralproject@gmail.com" 
              className="text-white underline hover:text-white/90 transition-colors duration-200"
            >
              jhmuralproject@gmail.com
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Follow Us
            </h3>
            
            <div className="space-y-4">
              <div>
                <a
                  href="https://www.instagram.com/jhmuralproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-white/90 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <span>Instagram</span>
                </a>
              </div>
              
              <div>
                <a
                  href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-white/90 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Donate Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Donate to our GoFundMe
            </h3>
            
            <p className="text-lg text-white/90 mb-6">
              Every contribution helps us bring more beautiful murals to Jackson Heights and build stronger community connections.
            </p>
            
            <Button
              variant="primary-inverse"
              size="large"
              trailingIcon="/flower.svg"
              href="https://www.gofundme.com/f/JHmuralproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              Support Our Mission
            </Button>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 text-sm max-w-xl mx-auto">
            Have questions or want to get more involved? Reach out to us at{" "}
            <a 
              href="mailto:jhmuralproject@gmail.com" 
              className="text-white underline hover:text-white/90 transition-colors duration-200"
            >
              jhmuralproject@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
