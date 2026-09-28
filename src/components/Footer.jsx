import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top container">
        {/* Column 1: Logo, Tagline, Socials */}
        <div className="footer-col col-brand">
          <div className="footer-logo-wrap">
            <img
              src="/brand-logo.png"
              alt="WedKnotCraft Logo"
              className="footer-logo-img"
              width="90"
              height="90"
              loading="eager"
            />
            <div className="footer-wreath-text">
              <span className="fw-wed">Wed</span>
              <span className="fw-knot">Knot</span>
              <span className="fw-craft">Craft</span>
              <span className="fw-sub">Wedding Cards</span>
            </div>
          </div>

          <h4 className="footer-brand-title">
            Largest Wedding Cards Collections in Chennai
          </h4>

          <div className="footer-social-section">
            <span className="follow-label">Follow us with</span>
            <div className="social-icon-row">
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-badge ig" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-badge fb" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-badge yt" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-badge wa" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.54 1.776.814 2.791.814 3.179 0 5.766-2.587 5.767-5.766.001-3.181-2.585-5.766-5.767-5.766zm3.374 8.167c-.145.407-.745.748-1.029.774-.284.025-.653.13-2.146-.484-1.748-.718-2.883-2.484-2.97-2.6-.088-.116-.708-.942-.708-1.799 0-.857.447-1.279.607-1.453.159-.174.348-.218.464-.218.116 0 .232.001.333.006.107.006.25-.041.391.299.145.348.494 1.206.537 1.294.044.087.073.189.015.305-.058.116-.087.189-.174.29-.087.102-.184.227-.263.305-.088.087-.18.182-.077.359.102.174.453.748.973 1.211.669.596 1.233.78 1.408.867.174.087.276.073.378-.044.102-.116.436-.508.552-.682.116-.174.233-.145.392-.087.16.058 1.017.479 1.191.566.174.087.291.13.334.204.043.072.043.42-.102.827z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Information */}
        <div className="footer-col col-info">
          <h3 className="footer-heading">Information</h3>
          <ul className="footer-links">
            <li>
              <Link to="/about" className="footer-hover-link">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="footer-hover-link">Contact Us</Link>
            </li>
            <li>
              <Link to="/faq" className="footer-hover-link">FAQ</Link>
            </li>
            <li>
              <Link to="/how-to-order" className="footer-hover-link">How to order wedding invitation online?</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Access */}
        <div className="footer-col col-quick">
          <h3 className="footer-heading">Quick Access</h3>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-hover-link">Home</Link>
            </li>
            <li>
              <Link to="/wedding-cards" className="footer-hover-link">Wedding Cards</Link>
            </li>
            <li>
              <Link to="/wedding-cards/hindu" className="footer-hover-link">Hindu Wedding Cards</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div className="footer-col col-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-details">
            <div className="contact-item">
              <Phone size={18} className="contact-icon" />
              <a href="tel:+919876543210" className="contact-val">+91 9876543210</a>
            </div>

            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <a href="mailto:wedtype@weddingcards.com" className="contact-val">wedtype@weddingcards.com</a>
            </div>

            <div className="contact-schedule">
              <p className="schedule-hours">Operating hours: 10.00Am to 10.00Pm</p>
              <p className="schedule-days">Monday – Sunday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom-bar">
        <p className="copyright-text">
          <span className="copyright-icon">©</span> Wed knot craft India Private Limited. All Rights Reserved.
        </p>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-secondary);
          color: #111111;
          padding-top: 48px;
          margin-top: 60px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.3fr 1.2fr 1fr 1.2fr;
          gap: 36px;
          padding-bottom: 40px;
        }

        .footer-logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .footer-logo-img {
          width: 90px;
          height: 90px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .footer-wreath-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .fw-wed {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          font-weight: 700;
          color: #2b2b2b;
        }

        .fw-knot {
          font-family: 'Great Vibes', cursive;
          font-size: 16px;
          color: #3b4d24;
          margin-top: -3px;
        }

        .fw-craft {
          font-family: 'Playfair Display', serif;
          font-size: 12px;
          font-weight: 600;
          color: #2b2b2b;
        }

        .fw-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 7px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #4a5c2d;
          margin-top: 2px;
        }

        .footer-brand-title {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.4;
          max-width: 240px;
          color: #1a1a1a;
          margin-bottom: 24px;
        }

        .footer-social-section {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .follow-label {
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .social-icon-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .social-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .social-badge.ig {
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
        }

        .social-badge.fb {
          background-color: #1877f2;
        }

        .social-badge.yt {
          background-color: #ff0000;
        }

        .social-badge.wa {
          background-color: #25d366;
        }

        .footer-heading {
          font-size: 24px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 22px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Crucial requirement: text changes to white on hover */
        .footer-hover-link {
          font-size: 16px;
          font-weight: 500;
          color: #1e1e1e;
          text-decoration: none;
          display: inline-block;
          transition: color 0.2s ease, transform 0.15s ease;
        }

        .footer-hover-link:hover {
          color: #ffffff !important;
          transform: translateX(4px);
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-icon {
          color: #1a1a1a;
          flex-shrink: 0;
        }

        .contact-val {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          text-decoration: none;
          transition: color 0.2s;
        }

        .contact-val:hover {
          color: #ffffff;
        }

        .contact-schedule {
          margin-top: 10px;
        }

        .schedule-hours {
          font-size: 15px;
          font-weight: 500;
          color: #2b2b2b;
          margin-bottom: 8px;
        }

        .schedule-days {
          font-size: 16px;
          font-weight: 700;
          color: #111111;
        }

        /* Bottom copyright bar */
        .footer-bottom-bar {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          padding: 16px 0;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.15);
        }

        .copyright-text {
          font-size: 14px;
          color: #2b2b2b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .copyright-icon {
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }

        @media (max-width: 600px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
