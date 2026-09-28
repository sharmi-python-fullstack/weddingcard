import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, image, link, subtitle }) => {
  return (
    <Link to={link} className="category-card">
      <div className="cat-image-wrap">
        <img src={image} alt={title} className="cat-card-img" loading="lazy" />
      </div>
      <div className="cat-text-wrap">
        <h4 className="cat-title">{title}</h4>
        {subtitle && <p className="cat-sub">{subtitle}</p>}
      </div>

      <style>{`
        .category-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          height: 100%;
        }

        .category-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .cat-image-wrap {
          background: #fdf6ec; /* Warm cream background */
          width: 100%;
          padding-top: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cat-card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 16px;
          transition: transform 0.3s ease;
        }

        .category-card:hover .cat-card-img {
          transform: scale(1.06);
        }

        .cat-text-wrap {
          padding: 14px 12px;
          text-align: center;
          background: #ffffff;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .cat-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.3;
        }

        .cat-sub {
          font-size: 12px;
          color: #666666;
          margin-top: 4px;
        }
      `}</style>
    </Link>
  );
};

export default CategoryCard;
