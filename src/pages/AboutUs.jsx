import React from 'react';
import IMAGES from '../assets/assets';

const AboutUs = () => {
  return (
    <div className="about-us-page-wrapper container">
      {/* Page Heading */}
      <div className="about-header-wrap">
        <h1 className="about-main-title">ABOUT US</h1>
      </div>

      {/* Block 1: Celebrating Love */}
      <section className="about-block block-text-left">
        <div className="about-text-col">
          <h2 className="about-subheading">
            Celebrating Love, One Invitation at a Time
          </h2>
          <p className="about-paragraph">
            At Wed Knot Craft, we believe that every love story is unique and
            deserves to be celebrated in a way that reflects its individuality.
          </p>
        </div>
        <div className="about-image-col">
          <img
            src={IMAGES['download_23_removebg_preview.png']}
            alt="Celebrating Love"
            className="about-block-img"
          />
        </div>
      </section>

      {/* Block 2: Our Story */}
      <section className="about-block block-image-left">
        <div className="about-image-col">
          <img
            src={IMAGES['download_25_removebg_preview.png']}
            alt="Our Story"
            className="about-block-img"
          />
        </div>
        <div className="about-text-col">
          <h2 className="about-subheading">OUR STORY</h2>
          <p className="about-paragraph">
            What started as a passion for design has blossomed into a full-fledged
            business dedicated to bringing couples' visions to life. Our founder,
            enivsioned a platform where couples could find invitations that
            resonated with their personal style and cultural heritage.
          </p>
        </div>
      </section>

      {/* Block 3: Our Promise */}
      <section className="about-block block-text-left">
        <div className="about-text-col">
          <h2 className="about-subheading">OUR PROMISE</h2>
          <p className="about-paragraph-lead">We are committed to providing:</p>
          <ul className="promise-list">
            <li>
              <strong>Custom Designs:</strong> Tailored invitations that reflect
              your unique love story.
            </li>
            <li>
              <strong>Quality Craftsmanship:</strong> Invitations crafted with
              attention to detail and high-quality materials.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> A seamless experience from
              selection to delivery, ensuring your complete satisfaction.
            </li>
          </ul>
        </div>
        <div className="about-image-col">
          <img
            src={IMAGES['download_21_removebg_preview.png'] || IMAGES['download_20_removebg_preview.png']}
            alt="Our Promise"
            className="about-block-img"
          />
        </div>
      </section>

      {/* Block 4: Join Us */}
      <section className="about-closing-block">
        <h2 className="closing-title">
          JOIN Us in Celebrating Your Special Day
        </h2>
        <p className="closing-text">
          Explore our diverse range of designs and let us help you set the tone
          for your wedding celebration. At Wed Knot Craft, your love story is our
          inspiration.
        </p>
      </section>

      <style>{`
        .about-us-page-wrapper {
          padding-top: 40px;
          padding-bottom: 80px;
        }

        .about-header-wrap {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-main-title {
          font-size: 36px;
          font-weight: 700;
          color: #111;
          display: inline-block;
          border-bottom: 2.5px solid #111;
          padding-bottom: 6px;
          letter-spacing: 0.5px;
        }

        .about-block {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 70px;
        }

        .about-block.block-image-left {
          grid-template-columns: 0.9fr 1.1fr;
        }

        .about-subheading {
          font-size: 26px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .about-paragraph {
          font-size: 16px;
          line-height: 1.7;
          color: #2b2b2b;
        }

        .about-paragraph-lead {
          font-size: 16px;
          font-weight: 600;
          color: #111;
          margin-bottom: 14px;
        }

        .promise-list {
          list-style: disc;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .promise-list li {
          font-size: 15.5px;
          line-height: 1.6;
          color: #2b2b2b;
        }

        .about-image-col {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          max-height: 380px;
        }

        .about-block-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-height: 380px;
        }

        .about-closing-block {
          text-align: center;
          max-width: 800px;
          margin: 60px auto 20px auto;
          padding: 40px 20px;
        }

        .closing-title {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin-bottom: 18px;
        }

        .closing-text {
          font-size: 16px;
          line-height: 1.7;
          color: #333;
        }

        @media (max-width: 900px) {
          .about-block, .about-block.block-image-left {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .about-main-title {
            font-size: 28px;
          }
          .about-subheading {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
