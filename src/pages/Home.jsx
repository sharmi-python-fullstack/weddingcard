import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Button from '../components/Button';
import Testimonial from '../components/Testimonial';
import StepIcon from '../components/StepIcon';
import IMAGES from '../assets/assets';
import {
  UNIQUE_CATEGORY_CARDS,
  THEME_CATEGORY_CARDS,
  HOME_SIMPLE_CARDS,
  COMMUNITY_COLLECTIONS,
  TESTIMONIALS,
  HOW_IT_WORKS
} from '../data/products';

const CAROUSEL_SLIDES = [
  {
    id: 1,
    title: 'Laser Cut Invitations',
    tagline: 'Precision crafted filigree invitations with royal shimmer details',
    image: IMAGES['premium_vector_vector_wedding_card_laser_cut_template.jpg'],
    badge: 'Exclusive Craft'
  },
  {
    id: 2,
    title: 'Royal Scroll Collections',
    tagline: 'Hand-rolled silk and velvet farman with imperial golden tassels',
    image: IMAGES['buy_scroll_wedding_invitations_personalized_vintage_styles_removebg_preview.png'],
    badge: 'Heritage Vintage'
  },
  {
    id: 3,
    title: 'Embossed Floral Suites',
    tagline: 'Double-sided textured stationery with metallic custom monogram',
    image: IMAGES['design_playground_removebg_preview.png'],
    badge: 'Best Seller'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === CAROUSEL_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home-page-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-background-art">
          {/* Subtle leaves and stationery imagery */}
          <div className="hero-leaf-left animate-float"></div>
          <div className="hero-leaf-right animate-float"></div>
        </div>

        <div className="hero-card-center animate-fade-in">
          <h1 className="hero-heading">Your Love Story Begins Here</h1>
          <p className="hero-subtext">
            Create stunning wedding invitations that capture the essence of your special day.
            Elegant designs, heartfelt words, and everything you need to make your first
            impression unforgettable.
          </p>
          <Button
            to="/wedding-cards"
            variant="primary"
            size="lg"
            className="hero-cta-btn"
          >
            Get your style
          </Button>
        </div>
      </section>

      {/* 2. Middle Promo Carousel Section (Slide for previous and after cards) */}
      <section className="carousel-promo-section container">
        <div className="carousel-banner-wrapper">
          <button
            type="button"
            className="carousel-control-btn btn-prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-content-area">
            <div className="carousel-image-frame">
              <img
                src={CAROUSEL_SLIDES[currentSlide].image}
                alt={CAROUSEL_SLIDES[currentSlide].title}
                className="carousel-main-img"
              />
            </div>

            <div className="carousel-text-overlay">
              <span className="carousel-badge">
                <Sparkles size={14} /> {CAROUSEL_SLIDES[currentSlide].badge}
              </span>
              <h3 className="carousel-title">{CAROUSEL_SLIDES[currentSlide].title}</h3>
              <p className="carousel-tagline">{CAROUSEL_SLIDES[currentSlide].tagline}</p>
              <Button
                to="/wedding-cards"
                variant="primary"
                size="md"
                className="carousel-cta-btn"
              >
                Shop Now
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="carousel-control-btn btn-next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel dots indicator */}
          <div className="carousel-dots">
            {CAROUSEL_SLIDES.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Unique & Exclusive Invitation Cards */}
      <section className="page-section container">
        <h2 className="section-heading">Unique & Exclusive Invitation Cards</h2>
        <p className="section-subheading">
          Because Each Wedding is Truly Unique and Memorable
        </p>

        <div className="category-3-grid">
          {UNIQUE_CATEGORY_CARDS.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              image={cat.image}
              link={cat.link}
            />
          ))}
        </div>
      </section>

      {/* 4. Theme Based Invitation */}
      <section className="page-section container">
        <h2 className="section-heading">Theme Based Invitation</h2>
        <p className="section-subheading">Theme Based Invitation</p>

        <div className="category-3-grid">
          {THEME_CATEGORY_CARDS.map((cat, idx) => (
            <CategoryCard
              key={idx}
              title={cat.title}
              image={cat.image}
              link={cat.link}
            />
          ))}
        </div>
      </section>

      {/* 5. Dual Promotional Banners */}
      <section className="dual-banners-section container">
        <div className="dual-banner banner-left">
          <div className="banner-content">
            <div className="banner-ornate-badge">
              <span className="ornate-sub">Get 20% Off</span>
              <span className="ornate-main">Your First Order</span>
            </div>
            <div className="banner-text-block">
              <h3>Join our love-letters list and enjoy 20% off your first set of wedding invitations.</h3>
              <p>Simple, beautiful, and easy on your budget.</p>
            </div>
          </div>
        </div>

        <div className="dual-banner banner-right">
          <div className="banner-content">
            <div className="banner-ornate-badge">
              <span className="ornate-main">Early Bird Bonus</span>
            </div>
            <div className="banner-text-block">
              <h3>Planning ahead pays off! Book your order 60+ days in advance and get a free set of 20 extra invites for last-minute guests.</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Simple and Affordable Wedding Cards (6 Product Grid) */}
      <section className="page-section container">
        <h2 className="section-heading">Simple and Affordable Wedding Cards</h2>
        <div className="simple-cards-grid">
          {HOME_SIMPLE_CARDS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              showBagIcon={true}
            />
          ))}
        </div>
      </section>

      {/* 7. Summer Sale Banner with Tiered Discounts */}
      <section className="summer-sale-section container">
        <div className="summer-sale-card">
          <div className="summer-sale-watermark">
            <span className="summer-big-text">Summer</span>
            <span className="sale-sub-text">Sale</span>
          </div>

          <div className="summer-discount-tiers">
            <div className="discount-line"><strong>100 cards</strong> – 10% Off</div>
            <div className="discount-line"><strong>200 cards</strong> – 15% Off</div>
            <div className="discount-line"><strong>300 cards</strong> – 20% Off</div>
            <div className="discount-line"><strong>400 cards</strong> – 25% Off</div>
            <div className="discount-line"><strong>500 cards</strong> – 30% Off</div>
          </div>

          <div className="summer-clearance-badge">
            Stock Clearance - 40% to 60% off
          </div>

          <p className="summer-disclaimer">
            This offer is not applicable on customized card, E-cards and Luxury boxes.
          </p>
        </div>
      </section>

      {/* 8. 4-Column Religion / Community Collections */}
      <section className="community-section container">
        <div className="community-grid">
          {COMMUNITY_COLLECTIONS.map((comm, idx) => (
            <div key={idx} className="community-card">
              <div className="community-img-wrap">
                <img src={comm.image} alt={comm.title} className="community-img" />
              </div>
              <div className="community-content">
                <h4 className="community-title">{comm.title}</h4>
                <Button
                  to={comm.link}
                  variant="primary"
                  size="sm"
                  className="community-btn"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. What Client Say About Us */}
      <section className="page-section container">
        <h2 className="section-heading">WHAT CLIENT SAY ABOUT US</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <Testimonial
              key={t.id}
              name={t.name}
              avatar={t.avatar}
              title={t.title}
              quote={t.quote}
              rating={t.rating}
            />
          ))}
        </div>
      </section>

      {/* 10. How It Works (5 Steps) */}
      <section className="page-section container">
        <h2 className="section-heading">How It Works</h2>
        <div className="how-it-works-row">
          {HOW_IT_WORKS.map((step) => (
            <StepIcon
              key={step.step}
              step={step.step}
              title={step.title}
            />
          ))}
        </div>
      </section>

      <style>{`
        /* Hero Section */
        .hero-section {
          position: relative;
          background: #fbf8f5;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          overflow: hidden;
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .hero-background-art {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(230, 230, 250, 0.4) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(255, 229, 180, 0.4) 0%, transparent 40%);
          pointer-events: none;
        }

        .hero-card-center {
          position: relative;
          z-index: 10;
          background: #f5f3ef;
          padding: 48px 40px;
          max-width: 680px;
          border-radius: 4px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .hero-heading {
          font-size: 32px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 18px;
        }

        .hero-subtext {
          font-size: 15px;
          line-height: 1.6;
          color: #444444;
          margin-bottom: 28px;
        }

        .hero-cta-btn {
          min-width: 180px;
          box-shadow: 0 4px 15px rgba(255, 171, 13, 0.4);
        }

        /* Carousel Section */
        .carousel-promo-section {
          margin-bottom: 50px;
        }

        .carousel-banner-wrapper {
          position: relative;
          background: #2a2421;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
          min-height: 380px;
          display: flex;
          align-items: center;
        }

        .carousel-content-area {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          width: 100%;
          min-height: 380px;
        }

        .carousel-image-frame {
          height: 380px;
          overflow: hidden;
          background: #1e1917;
        }

        .carousel-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .carousel-text-overlay {
          padding: 40px;
          color: #ffffff;
        }

        .carousel-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 171, 13, 0.2);
          color: var(--color-accent);
          font-size: 13px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .carousel-title {
          font-size: 28px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .carousel-tagline {
          font-size: 15px;
          color: #cccccc;
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .carousel-control-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.75);
          color: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 20;
          transition: all 0.2s;
          border: none;
        }

        .carousel-control-btn:hover {
          background: #ffffff;
          transform: translateY(-50%) scale(1.1);
        }

        .btn-prev {
          left: 20px;
        }

        .btn-next {
          right: 20px;
        }

        .carousel-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 20;
        }

        .carousel-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
        }

        .carousel-dots .dot.active {
          background: var(--color-accent);
          width: 24px;
          border-radius: 10px;
        }

        /* 3-Category Grid */
        .category-3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--gap-horizontal);
          margin-bottom: 40px;
        }

        /* Dual Banners */
        .dual-banners-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin: 40px auto;
        }

        .dual-banner {
          background: linear-gradient(135deg, #a7e3d1 0%, #294038 50%, #162420 100%);
          border-radius: 12px;
          padding: 36px 30px;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          min-height: 220px;
          display: flex;
          align-items: center;
        }

        .banner-right {
          background: linear-gradient(135deg, #233b32 0%, #1b2e27 50%, #9dd6c4 100%);
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .banner-ornate-badge {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, #3d2b1f 0%, #1a120c 100%);
          border: 4px solid #c59b27;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          flex-shrink: 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          padding: 10px;
        }

        .ornate-sub {
          font-size: 11px;
          color: #d1b46a;
          font-weight: 600;
        }

        .ornate-main {
          font-size: 13px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }

        .banner-text-block h3 {
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 8px;
        }

        .banner-text-block p {
          font-size: 13px;
          color: #e0f2ec;
        }

        /* Simple Cards Grid (2 rows x 3 columns) */
        .simple-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--gap-horizontal);
          margin-bottom: 40px;
        }

        /* Summer Sale Banner */
        .summer-sale-section {
          margin: 50px auto;
        }

        .summer-sale-card {
          background: #fbf5eb url('${IMAGES['copy_of_offers_peace_of_mind_knowing_your_print_will_meet_or_exceed_expectations_nikolay_panov_removebg_preview_1_.png']}') no-repeat center right / contain;
          border-radius: 12px;
          padding: 48px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid #ebd9bf;
          position: relative;
        }

        .summer-big-text {
          font-size: 64px;
          font-weight: 900;
          color: #e59905;
          letter-spacing: -2px;
          display: block;
          line-height: 1;
        }

        .sale-sub-text {
          font-size: 28px;
          font-style: italic;
          font-family: 'Playfair Display', serif;
          color: #222222;
          display: block;
          margin-top: -10px;
          margin-bottom: 24px;
        }

        .summer-discount-tiers {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          font-size: 18px;
          color: #111111;
        }

        .summer-clearance-badge {
          display: inline-block;
          background: var(--color-accent);
          color: #111111;
          font-weight: 700;
          padding: 12px 30px;
          border-radius: 6px;
          font-size: 16px;
          margin-bottom: 16px;
          box-shadow: 0 4px 10px rgba(255, 171, 13, 0.3);
        }

        .summer-disclaimer {
          font-size: 13.5px;
          color: #555555;
          max-width: 500px;
        }

        /* 4-Column Community Grid */
        .community-section {
          margin: 50px auto;
        }

        .community-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .community-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
        }

        .community-card:hover {
          transform: translateY(-4px);
        }

        .community-img-wrap {
          height: 220px;
          overflow: hidden;
          background: #eee;
        }

        .community-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .community-content {
          padding: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex-grow: 1;
        }

        .community-title {
          font-size: 14.5px;
          font-weight: 700;
          color: #111111;
          line-height: 1.3;
        }

        .community-btn {
          width: 100%;
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--gap-horizontal);
          margin-bottom: 50px;
        }

        /* How it Works */
        .how-it-works-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 24px;
          padding: 20px 0;
        }

        @media (max-width: 1024px) {
          .category-3-grid, .simple-cards-grid, .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .community-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dual-banners-section {
            grid-template-columns: 1fr;
          }
          .carousel-content-area {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .category-3-grid, .simple-cards-grid, .testimonials-grid, .community-grid {
            grid-template-columns: 1fr;
          }
          .hero-heading {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
