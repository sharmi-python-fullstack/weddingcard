import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ name, avatar, title, quote, rating = 5 }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-avatar-wrap">
        <img src={avatar} alt={name} className="testimonial-avatar" />
      </div>

      <h4 className="testimonial-name">{name}</h4>
      <h5 className="testimonial-sub">{title}</h5>

      <p className="testimonial-quote">"{quote}"</p>

      <div className="testimonial-stars">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={18} fill="#FFAB0D" color="#FFAB0D" />
        ))}
      </div>

      <style>{`
        .testimonial-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
        }

        .testimonial-avatar-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 14px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .testimonial-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-name {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 4px;
        }

        .testimonial-sub {
          font-size: 14px;
          font-weight: 600;
          color: #333333;
          margin-bottom: 14px;
        }

        .testimonial-quote {
          font-size: 13.5px;
          line-height: 1.55;
          color: #555555;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-top: auto;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
