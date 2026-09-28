import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Edit3, Check } from 'lucide-react';
import Button from '../components/Button';

const WeddingDetails = () => {
  const [groomName, setGroomName] = useState('Groom Name');
  const [brideName, setBrideName] = useState('Bride Name');
  const [date, setDate] = useState('Sunday, 24th November 2026');
  const [time, setTime] = useState('10:30 AM onwards');
  const [location, setLocation] = useState('Grand Leela Palace, Chennai, India');
  const [dressCode, setDressCode] = useState('Traditional / Festive Attire');
  const [rsvpDate, setRsvpDate] = useState('10th November 2026');

  const [editingField, setEditingField] = useState(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  return (
    <div className="wedding-details-page-wrapper">
      {/* 4 Corner Floral Decorations */}
      <div className="floral-corner top-left"></div>
      <div className="floral-corner top-right"></div>
      <div className="floral-corner bottom-left"></div>
      <div className="floral-corner bottom-right"></div>

      <div className="details-inner-card animate-fade-in">
        {/* Ornate Circular Emblem */}
        <div className="ornate-circle-emblem">
          <svg className="emblem-border-svg" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="92" fill="#fff9ef" stroke="#cca251" strokeWidth="4" />
            <circle cx="100" cy="100" r="84" fill="none" stroke="#e6b85c" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="#cca251" strokeWidth="1.5" />
          </svg>
          <div className="emblem-couple-names">
            <span className="cursive-name">{groomName}</span>
            <span className="cursive-amp">&</span>
            <span className="cursive-name">{brideName}</span>
          </div>
        </div>

        {/* Invitation Opening */}
        <h2 className="invitation-intro-text">
          Together with their families, joyfully<br />
          invite you to their wedding
        </h2>

        {/* Event Meta Box with Editable Rows */}
        <div className="event-meta-box">
          {/* Row 1: Date */}
          <div className="meta-row">
            <Calendar size={22} className="meta-leading-icon" />
            {editingField === 'date' ? (
              <input
                type="text"
                className="meta-inline-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span className="meta-text" onClick={() => setEditingField('date')}>{date}</span>
            )}
            <button
              type="button"
              className="meta-edit-btn"
              onClick={() => setEditingField(editingField === 'date' ? null : 'date')}
              aria-label="Edit Date"
            >
              {editingField === 'date' ? <Check size={18} color="#2b8a3e" /> : <Edit3 size={18} />}
            </button>
          </div>

          {/* Row 2: Time */}
          <div className="meta-row">
            <Clock size={22} className="meta-leading-icon" />
            {editingField === 'time' ? (
              <input
                type="text"
                className="meta-inline-input"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span className="meta-text" onClick={() => setEditingField('time')}>{time}</span>
            )}
            <button
              type="button"
              className="meta-edit-btn"
              onClick={() => setEditingField(editingField === 'time' ? null : 'time')}
              aria-label="Edit Time"
            >
              {editingField === 'time' ? <Check size={18} color="#2b8a3e" /> : <Edit3 size={18} />}
            </button>
          </div>

          {/* Row 3: Location */}
          <div className="meta-row">
            <MapPin size={22} className="meta-leading-icon" />
            {editingField === 'location' ? (
              <input
                type="text"
                className="meta-inline-input"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onBlur={() => setEditingField(null)}
                autoFocus
              />
            ) : (
              <span className="meta-text" onClick={() => setEditingField('location')}>{location}</span>
            )}
            <button
              type="button"
              className="meta-edit-btn"
              onClick={() => setEditingField(editingField === 'location' ? null : 'location')}
              aria-label="Edit Location"
            >
              {editingField === 'location' ? <Check size={18} color="#2b8a3e" /> : <Edit3 size={18} />}
            </button>
          </div>

          {/* Map & Calendar CTA Buttons */}
          <div className="meta-actions-row">
            <Button
              variant="primary"
              size="md"
              className="meta-action-btn"
              onClick={() => window.open(`https://maps.google.com/?q=${encodeURIComponent(location)}`, '_blank')}
            >
              View map
            </Button>
            <Button
              variant="primary"
              size="md"
              className="meta-action-btn"
              onClick={() => alert(`Event "${groomName} & ${brideName}'s Wedding" added to Calendar!`)}
            >
              Add to calander
            </Button>
          </div>
        </div>

        {/* Reception & Dress Code */}
        <div className="wedding-footer-notes">
          <h3 className="reception-title">Reception to Follow</h3>
          <p className="dress-code-note">
            Dress Code: <strong>"{dressCode}"</strong>
          </p>
          <p className="rsvp-deadline-note">
            Kindly <strong>RSVP</strong> by "{rsvpDate}"
          </p>
        </div>

        {/* RSVP Now CTA */}
        <div className="rsvp-button-wrap">
          {rsvpSubmitted ? (
            <div className="rsvp-confirmed-badge">
              <Check size={20} /> Thank you! Your RSVP has been recorded.
            </div>
          ) : (
            <Button
              variant="primary"
              size="lg"
              className="rsvp-main-btn"
              onClick={() => setRsvpSubmitted(true)}
            >
              RSVP Now
            </Button>
          )}
        </div>
      </div>

      <style>{`
        .wedding-details-page-wrapper {
          min-height: 90vh;
          background-color: var(--color-secondary); /* Peach background matching The Wedding Details.png */
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          overflow: hidden;
        }

        /* Floral Corner Illustrations */
        .floral-corner {
          position: absolute;
          width: 240px;
          height: 240px;
          background: radial-gradient(circle, rgba(197, 140, 95, 0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .floral-corner.top-left {
          top: 0;
          left: 0;
          border-bottom-right-radius: 100%;
        }

        .floral-corner.top-right {
          top: 0;
          right: 0;
          border-bottom-left-radius: 100%;
        }

        .floral-corner.bottom-left {
          bottom: 0;
          left: 0;
          border-top-right-radius: 100%;
        }

        .floral-corner.bottom-right {
          bottom: 0;
          right: 0;
          border-top-left-radius: 100%;
        }

        .details-inner-card {
          position: relative;
          z-index: 10;
          max-width: 640px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Circular Emblem */
        .ornate-circle-emblem {
          position: relative;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 8px 25px rgba(184, 134, 11, 0.25);
        }

        .emblem-border-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .emblem-couple-names {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #7a5822;
          line-height: 1.2;
        }

        .cursive-name {
          font-size: 19px;
          font-weight: 600;
        }

        .cursive-amp {
          font-size: 16px;
          color: #b08d4b;
        }

        .invitation-intro-text {
          font-size: 24px;
          font-weight: 700;
          color: #111111;
          line-height: 1.4;
          margin-bottom: 30px;
        }

        /* Event Meta Box with rounded border */
        .event-meta-box {
          width: 100%;
          border: 1.5px solid #222222;
          border-radius: 20px;
          padding: 30px 36px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
          margin-bottom: 30px;
        }

        .meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
        }

        .meta-leading-icon {
          color: #222222;
          flex-shrink: 0;
        }

        .meta-text {
          font-size: 18px;
          font-weight: 600;
          color: #333333;
          flex-grow: 1;
          cursor: pointer;
        }

        .meta-inline-input {
          flex-grow: 1;
          font-size: 16px;
          padding: 6px 12px;
          border: 1.5px solid var(--color-accent);
          border-radius: 6px;
          background: #ffffff;
          outline: none;
        }

        .meta-edit-btn {
          background: transparent;
          border: none;
          color: #444444;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .meta-actions-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 10px;
        }

        .meta-action-btn {
          min-width: 140px;
          border-radius: 8px;
        }

        /* Notes & Reception */
        .wedding-footer-notes {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .reception-title {
          font-size: 22px;
          font-weight: 700;
          color: #111111;
        }

        .dress-code-note, .rsvp-deadline-note {
          font-size: 18px;
          color: #333333;
        }

        .rsvp-button-wrap {
          margin-top: 6px;
        }

        .rsvp-main-btn {
          min-width: 180px;
          padding: 12px 36px;
          font-size: 17px;
          font-weight: 700;
        }

        .rsvp-confirmed-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2b8a3e;
          color: #ffffff;
          padding: 10px 24px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 15px;
        }

        @media (max-width: 600px) {
          .event-meta-box {
            padding: 20px;
          }
          .invitation-intro-text {
            font-size: 20px;
          }
          .meta-actions-row {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default WeddingDetails;
