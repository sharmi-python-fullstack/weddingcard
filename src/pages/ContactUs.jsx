import React from 'react';
import { PhoneCall, FileCheck, Mail, Clock, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="contact-us-page-wrapper container">
      {/* Title */}
      <h1 className="contact-main-heading">Contact Us</h1>

      <p className="contact-intro-para">
        We'd love to hear from you! Whether you have a question, need help
        customizing your invites, or just want to chat about your dream wedding
        stationery — we're here for you.
      </p>

      {/* Support Section */}
      <div className="contact-info-card support-card">
        <div className="card-badge-header">
          <span className="badge-icon-24h">24h</span>
          <h2 className="card-badge-title">Support</h2>
        </div>

        <div className="card-info-content">
          <p className="info-lead-bold">India (toll free):</p>
          <p className="info-phone-large">999-264-9444</p>
          <p className="info-call-notice">Only Call - No WhatsApp Number</p>
          <a
            href="mailto:sales@wedknotcraftinvitationcards.com"
            className="info-email-link"
          >
            sales@wedknotcraftinvitationcards.com
          </a>
        </div>
      </div>

      {/* Proofing Department Section */}
      <div className="contact-info-card proofing-card">
        <div className="card-badge-header">
          <span className="badge-icon-doc">🔍</span>
          <h2 className="card-badge-title">Proofing Department</h2>
        </div>

        <div className="card-info-content">
          <p className="info-lead-bold">Indian Standard Time (IST)</p>
          <p className="info-timing">Mobile (9.00am to 9.00pm IST) Monday to Saturday</p>

          <div className="team-contacts-list">
            <div className="team-contact-block">
              <h4 className="team-title">HR Team</h4>
              <p className="team-phone">+91 9876543210</p>
              <a
                href="mailto:hrteam@wedknotcraftinvitationcards.com"
                className="team-email"
              >
                hrteam@wedknotcraftinvitationcards.com
              </a>
            </div>

            <div className="team-contact-block">
              <h4 className="team-title">Customer Support Team</h4>
              <p className="team-phone">+91 9876543210</p>
              <a
                href="mailto:customersupport@wedknotcraftinvitationcards.com"
                className="team-email"
              >
                customersupport@wedknotcraftinvitationcards.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Inquiries Text */}
      <div className="contact-inquiries-block">
        <h3 className="inquiries-heading">Contact Us</h3>
        <p className="inquiries-text">
          Whether you're looking for inquires, would like to ask before ordering,
          or just want to let us know how we did.
        </p>
      </div>

      {/* Brand Story / Worldwide Delivery */}
      <div className="brand-delivery-story-card">
        <h2 className="story-main-heading">
          An online Invitation Store with Worldwide Delivery
        </h2>

        <div className="story-paragraphs">
          <p>
            Weddings are always special but the fact about Wedknotcraft wedding
            Cards is that they are bespoke and exquisite in design that wins the
            hearts of millions across the world.
          </p>

          <p>
            The team behind us is extremely talented and has more than 50 years of
            experience with them to translate your dream wedding card into reality.
          </p>

          <p>
            If you want your wedding card to be truly rare and exceptional then
            look no further. The team here is fully able to weave dreams into
            reality.
          </p>

          <p>
            No matter what kind of wedding you have planned,{' '}
            <a href="https://wedknotcraft.in" target="_blank" rel="noopener noreferrer" className="brand-inline-link">
              wedknotcraft.in
            </a>{' '}
            is well known to design various wedding invitations like Hindu
            Wedding Cards, Muslim Wedding Cards, Sikh Wedding Cards, Interface
            Wedding Cards and so on.
          </p>

          <p className="closing-query-callout">
            If you have any query related to invitation designs or our cards,
            please feel free to contact us!!!
          </p>
        </div>
      </div>

      <style>{`
        .contact-us-page-wrapper {
          padding-top: 40px;
          padding-bottom: 70px;
          max-width: 960px;
        }

        .contact-main-heading {
          font-size: 34px;
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: 24px;
        }

        .contact-intro-para {
          font-size: 16.5px;
          color: #2b2b2b;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .contact-info-card {
          margin-bottom: 32px;
        }

        .card-badge-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .badge-icon-24h {
          background-color: #2563eb;
          color: #ffffff;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .badge-icon-doc {
          font-size: 16px;
        }

        .card-badge-title {
          font-size: 20px;
          font-weight: 700;
          color: #111;
          text-decoration: underline;
        }

        .card-info-content {
          padding-left: 36px;
        }

        .info-lead-bold {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          margin-bottom: 4px;
        }

        .info-phone-large {
          font-size: 17px;
          font-weight: 600;
          color: #222;
          margin-bottom: 2px;
        }

        .info-call-notice {
          font-size: 14px;
          color: #555;
          margin-bottom: 6px;
        }

        .info-email-link {
          font-size: 15.5px;
          font-weight: 600;
          color: #111;
          text-decoration: underline;
        }

        .info-timing {
          font-size: 15px;
          color: #333;
          margin-bottom: 16px;
        }

        .team-contacts-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .team-title {
          font-size: 16px;
          font-weight: 700;
          text-decoration: underline;
          color: #111;
          margin-bottom: 2px;
        }

        .team-phone {
          font-size: 15px;
          font-weight: 600;
          color: #222;
        }

        .team-email {
          font-size: 15px;
          color: #111;
          text-decoration: none;
        }

        .team-email:hover {
          text-decoration: underline;
        }

        .contact-inquiries-block {
          margin: 36px 0;
        }

        .inquiries-heading {
          font-size: 22px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .inquiries-text {
          font-size: 16px;
          color: #333;
        }

        /* Worldwide Delivery Story */
        .brand-delivery-story-card {
          margin-top: 50px;
          padding: 30px 0;
        }

        .story-main-heading {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-bottom: 30px;
        }

        .story-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 16px;
          line-height: 1.7;
          color: #222;
        }

        .brand-inline-link {
          color: #2563eb;
          text-decoration: underline;
        }

        .closing-query-callout {
          font-size: 17px;
          font-weight: 700;
          color: #111;
          text-align: center;
          margin-top: 24px;
        }

        @media (max-width: 600px) {
          .contact-main-heading {
            font-size: 26px;
          }
          .story-main-heading {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
