import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import IMAGES from '../assets/assets';

const IDEAS_FOR_YOU = [
  {
    title: 'Hindu wedding Card',
    bg: '#f7b282',
    image: IMAGES['download_18_removebg_preview.png'],
    link: '/wedding-cards/hindu'
  },
  {
    title: 'Simple wedding Card',
    bg: '#d2b450',
    image: IMAGES['download_5_removebg_preview.png'],
    link: '/wedding-cards/hindu'
  },
  {
    title: 'Muslim wedding Card',
    bg: '#947a5a',
    image: IMAGES['minimal_blue_white_floral_islamic_muslim_wedding_i_invitation_zazzle_removebg_preview.png'],
    link: '/wedding-cards/muslim'
  },
  {
    title: 'Scroll wedding Card',
    bg: '#258ec7',
    image: IMAGES['buy_scroll_wedding_invitations_personalized_vintage_styles_removebg_preview.png'],
    link: '/wedding-cards/scroll'
  },
  {
    title: 'Luxury wedding Card',
    bg: '#8b4b7c',
    image: IMAGES['invitation_luxury_psd_high_quality_free_psd_templates_for_download_freepik_removebg_preview.png'],
    link: '/wedding-cards/exclusive'
  }
];

const POPULAR_ON_THIS = [
  {
    title: 'Post Theme Wedding Card',
    bg: '#799c9f',
    image: IMAGES['dark_green_envelope_and_gold_printed_invitation_customizable_color_and_pattern_options_rsvp_card_removebg_preview.png'],
    link: '/wedding-cards/envelope'
  },
  {
    title: 'Scroll Wedding Card',
    bg: '#b7c1c2',
    image: IMAGES['buy_scroll_wedding_invitations_personalized_vintage_styles_removebg_preview.png'],
    link: '/wedding-cards/scroll'
  },
  {
    title: 'Theme Wedding Card',
    bg: '#cbb085',
    image: IMAGES['mementobloom_etsy_removebg_preview.png'],
    link: '/wedding-cards/theme'
  },
  {
    title: 'Customize Wedding Card',
    bg: '#8f4861',
    image: IMAGES['download_14_removebg_preview.png'],
    link: '/wedding-cards/hindu'
  },
  {
    title: 'Laser Wedding Card',
    bg: '#b99564',
    image: IMAGES['premium_vector_vector_wedding_card_laser_cut_template.jpg'],
    link: '/wedding-cards/exclusive'
  },
  {
    title: 'Hindu Wedding Card',
    bg: '#b6839b',
    image: IMAGES['design_playground_removebg_preview.png'],
    link: '/wedding-cards/hindu'
  }
];

const Search = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  const [filterTags, setFilterTags] = useState([
    'Wedding Cards',
    'Scroll Cards',
    'Theme Cards',
    'Birthday Cards',
    'Engagement Cards'
  ]);

  const removeTag = (tagToRemove) => {
    setFilterTags(prev => prev.filter(t => t !== tagToRemove));
  };

  // Filter products by search term if typed
  const matchedProducts = searchTerm.trim()
    ? PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="search-page-wrapper container">
      {/* Title & Subtitle */}
      <div className="search-header-intro">
        <h1 className="search-main-heading">
          Everything You Need, to Plan your Dream Wedding
        </h1>
        <p className="search-subheading">
          Search for vendors, cards, ideas and real wedding stories and more!
        </p>
      </div>

      {/* Pill Search Input */}
      <div className="search-bar-unified">
        <button type="button" className="all-pill-btn">
          All
        </button>
        <input
          type="text"
          className="unified-search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchIcon size={20} className="unified-search-icon" />
      </div>

      {/* Removable Filter Chips */}
      <div className="filter-chips-row">
        {filterTags.map((tag) => (
          <span key={tag} className="filter-chip">
            {tag}
            <button
              type="button"
              className="chip-remove-btn"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
            >
              <X size={14} />
            </button>
          </span>
        ))}
      </div>

      {/* Search Results (if user has queried) */}
      {searchTerm.trim() && (
        <div className="search-live-results">
          <h3 className="section-heading">Search Results for "{searchTerm}"</h3>
          {matchedProducts.length > 0 ? (
            <div className="search-products-grid">
              {matchedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="no-results-msg">No cards found matching your search. Browse our ideas below.</p>
          )}
        </div>
      )}

      {/* Ideas for you (5 tiles) */}
      <section className="search-tiles-section">
        <h2 className="tiles-section-title">Ideas for you</h2>
        <div className="ideas-grid">
          {IDEAS_FOR_YOU.map((idea, idx) => (
            <Link
              key={idx}
              to={idea.link}
              className="search-tile-card"
              style={{ backgroundColor: idea.bg }}
            >
              <div className="tile-img-box">
                <img src={idea.image} alt={idea.title} className="tile-img" />
              </div>
              <div className="tile-title-box">
                <h4>{idea.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular on this (6 tiles) */}
      <section className="search-tiles-section">
        <h2 className="tiles-section-title">Popular on this</h2>
        <div className="popular-grid">
          {POPULAR_ON_THIS.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="search-tile-card"
              style={{ backgroundColor: item.bg }}
            >
              <div className="tile-img-box">
                <img src={item.image} alt={item.title} className="tile-img" />
              </div>
              <div className="tile-title-box">
                <h4>{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .search-page-wrapper {
          padding-top: 40px;
          padding-bottom: 70px;
        }

        .search-header-intro {
          text-align: center;
          margin-bottom: 30px;
        }

        .search-main-heading {
          font-size: 32px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
        }

        .search-subheading {
          font-size: 16px;
          color: #444;
        }

        /* Unified Search Bar */
        .search-bar-unified {
          max-width: 900px;
          margin: 0 auto 20px auto;
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 30px;
          border: 1.5px solid #222;
          overflow: hidden;
          padding: 3px;
        }

        .all-pill-btn {
          background-color: #f87171; /* Coral/pink All tab in Search.png */
          color: #ffffff;
          font-weight: 700;
          font-size: 15px;
          border: none;
          padding: 8px 30px;
          border-radius: 20px;
          cursor: pointer;
        }

        .unified-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 16px;
          font-size: 16px;
          color: #222;
        }

        .unified-search-icon {
          color: #222;
          margin-right: 18px;
        }

        /* Filter Chips */
        .filter-chips-row {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f0ecfa;
          border: 1px solid #d4c8eb;
          border-radius: 8px;
          padding: 6px 14px;
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .chip-remove-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: #666;
        }

        .chip-remove-btn:hover {
          color: #c92a2a;
        }

        .search-live-results {
          margin-bottom: 50px;
        }

        .search-products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .no-results-msg {
          text-align: center;
          font-size: 16px;
          color: #666;
        }

        /* Tiles Sections */
        .search-tiles-section {
          margin-bottom: 48px;
        }

        .tiles-section-title {
          font-size: 24px;
          font-weight: 700;
          color: #111;
          margin-bottom: 24px;
        }

        .ideas-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .popular-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .search-tile-card {
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          min-height: 120px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.25s, box-shadow 0.25s;
          text-decoration: none;
          color: #111111;
        }

        .search-tile-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .tile-img-box {
          width: 50%;
          height: 120px;
          background: rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .tile-title-box {
          width: 50%;
          padding: 16px;
        }

        .tile-title-box h4 {
          font-size: 16px;
          font-weight: 700;
          line-height: 1.3;
          color: #111;
        }

        @media (max-width: 900px) {
          .ideas-grid, .popular-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .search-main-heading {
            font-size: 24px;
          }
        }

        @media (max-width: 600px) {
          .ideas-grid, .popular-grid {
            grid-template-columns: 1fr;
          }
          .filter-chips-row {
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Search;
