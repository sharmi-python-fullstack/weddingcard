import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, X, Sparkles, Heart, FileText, Smartphone } from 'lucide-react';

const NAV_DIVISIONS = {
  'Special occasions': {
    title: 'Special Occasions Invitations',
    icon: Sparkles,
    divisions: [
      { name: 'Engagement Cards', desc: 'Ring ceremony invitations with delicate pastel motifs', count: '14 Designs' },
      { name: 'Reception Cards', desc: 'Evening cocktail and dinner celebration suites', count: '22 Designs' },
      { name: 'Sangeet & Mehandi', desc: 'Vibrant festive musical night invitations', count: '18 Designs' },
      { name: 'Anniversary Cards', desc: 'Silver and Golden jubilee milestone keepsakes', count: '12 Designs' },
      { name: 'Housewarming / Griha Pravesh', desc: 'Traditional auspicious ceremonial cards', count: '9 Designs' }
    ]
  },
  'Theme Cards': {
    title: 'Theme-Based Collections',
    icon: Heart,
    divisions: [
      { name: 'Beach Theme Cards', desc: 'Breezy teal, aqua, and seaside watercolor designs', count: '16 Designs', link: '/wedding-cards/theme' },
      { name: 'Birds & Nature Theme', desc: 'Love birds, peacocks, floral branches, and botanicals', count: '24 Designs', link: '/wedding-cards/theme' },
      { name: 'Palace & Royal Heritage', desc: 'Rajasthan fort architecture, jharokha gates, and gold leaf', count: '30 Designs', link: '/wedding-cards/theme' },
      { name: 'Laser Cut & Metallic Foil', desc: 'Intricate filigree die-cuts with shimmer metallic inserts', count: '19 Designs', link: '/wedding-cards/exclusive' },
      { name: 'Vintage & Archival', desc: 'Handmade deckled edge paper, wax stamps, and calligraphy', count: '15 Designs', link: '/wedding-cards/traditional' }
    ]
  },
  'Scroll Invitation': {
    title: 'Royal Scroll / Farman Invitations',
    icon: FileText,
    divisions: [
      { name: 'Royal Velvet Roll Scrolls', desc: 'Handmade velvet casing with golden zari tassels', count: '12 Designs', link: '/product/the-blue-wedding-cards' },
      { name: 'Antique Parchment Scrolls', desc: 'Aged parchment texture with royal imperial stamps', count: '10 Designs' },
      { name: 'Silk Ribbon Scrolls', desc: 'Lustrous raw silk scrolls with engraved wooden dowels', count: '8 Designs' },
      { name: 'Metallic Boxed Scrolls', desc: 'Rigid gold/silver keepsake presentation boxes', count: '14 Designs' }
    ]
  },
  'Digital Invitation': {
    title: 'Digital & Live Interactive Invitations',
    icon: Smartphone,
    divisions: [
      { name: 'Live Wedding Details Preview', desc: 'Interactive live RSVP & venue map digital page', count: 'Live Template', link: '/product/the-blue-wedding-cards/details' },
      { name: 'Save The Date Animated Video', desc: 'Custom motion graphic cinematic wedding teaser', count: '20 Designs' },
      { name: 'WhatsApp PDF & E-Card Suites', desc: 'Mobile-optimized high-resolution digital flyers', count: '35 Designs' },
      { name: 'Wedding Website & Guest RSVP', desc: 'Custom personalized wedding landing portal', count: 'Available' }
    ]
  }
};

const Nav = () => {
  const location = useLocation();
  const [activeDivision, setActiveDivision] = useState(null);

  const toggleDivision = (tabName) => {
    setActiveDivision(prev => prev === tabName ? null : tabName);
  };

  const closeDivision = () => {
    setActiveDivision(null);
  };

  return (
    <nav className="primary-nav">
      <div className="nav-container container">
        <ul className="nav-list">
          {/* 1. Home Link (Active/Working) */}
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive && location.pathname === '/' ? 'active' : ''}`
              }
              onClick={closeDivision}
            >
              Home
            </NavLink>
          </li>

          {/* 2. Wedding Invitation Link (Active/Working) */}
          <li className="nav-item">
            <NavLink
              to="/wedding-cards"
              className={({ isActive }) =>
                `nav-link ${isActive || location.pathname.startsWith('/wedding-cards') ? 'active' : ''}`
              }
              onClick={closeDivision}
            >
              Wedding Invitation
            </NavLink>
          </li>

          {/* Remaining links show their division panel when clicked */}
          {['Special occasions', 'Theme Cards', 'Scroll Invitation', 'Digital Invitation'].map((tabName) => (
            <li key={tabName} className="nav-item">
              <button
                type="button"
                className={`nav-division-btn ${activeDivision === tabName ? 'open' : ''}`}
                onClick={() => toggleDivision(tabName)}
              >
                <span>{tabName}</span>
                <ChevronDown
                  size={16}
                  className={`chevron-icon ${activeDivision === tabName ? 'rotated' : ''}`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Division Dropdown Overlay */}
        {activeDivision && NAV_DIVISIONS[activeDivision] && (
          <div className="division-dropdown-panel animate-fade-in">
            <div className="division-panel-header">
              <div className="division-panel-title">
                {React.createElement(NAV_DIVISIONS[activeDivision].icon, { size: 20, color: 'var(--color-accent)' })}
                <h3>{NAV_DIVISIONS[activeDivision].title}</h3>
              </div>
              <button className="division-close-btn" onClick={closeDivision} aria-label="Close divisions">
                <X size={18} />
              </button>
            </div>

            <div className="division-cards-grid">
              {NAV_DIVISIONS[activeDivision].divisions.map((item, idx) => (
                <div key={idx} className="division-card">
                  {item.link ? (
                    <Link to={item.link} className="division-card-link" onClick={closeDivision}>
                      <div className="division-card-top">
                        <h4 className="division-card-name">{item.name}</h4>
                        <span className="division-badge">{item.count}</span>
                      </div>
                      <p className="division-card-desc">{item.desc}</p>
                    </Link>
                  ) : (
                    <div className="division-card-inner">
                      <div className="division-card-top">
                        <h4 className="division-card-name">{item.name}</h4>
                        <span className="division-badge">{item.count}</span>
                      </div>
                      <p className="division-card-desc">{item.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .primary-nav {
          background-color: var(--color-primary);
          padding: 8px 0 14px 0;
          position: relative;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .nav-container {
          position: relative;
        }

        .nav-list {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 28px;
          list-style: none;
          overflow-x: auto;
          scrollbar-width: none;
          padding: 4px 0;
        }

        .nav-list::-webkit-scrollbar {
          display: none;
        }

        .nav-item {
          flex-shrink: 0;
        }

        .nav-link, .nav-division-btn {
          font-size: 17px;
          font-weight: 600;
          color: #1a1a1a;
          padding: 6px 12px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          cursor: pointer;
          transition: var(--transition);
        }

        .nav-link:hover, .nav-division-btn:hover {
          color: #000000;
          background: rgba(255, 255, 255, 0.4);
        }

        .nav-link.active {
          color: #000000;
          font-weight: 700;
          position: relative;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 12px;
          right: 12px;
          height: 3px;
          background-color: var(--color-accent);
          border-radius: 2px;
        }

        .nav-division-btn.open {
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          border-color: #ddd;
        }

        .chevron-icon {
          transition: transform 0.2s ease;
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        /* Division Panel */
        .division-dropdown-panel {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          right: 0;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          padding: 24px;
          z-index: 999;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .division-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }

        .division-panel-title {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .division-panel-title h3 {
          font-size: 18px;
          font-weight: 700;
          color: #222;
        }

        .division-close-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f4f4f4;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.15s;
        }

        .division-close-btn:hover {
          background: #e2e2e2;
        }

        .division-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
        }

        .division-card {
          background: #fdfaf6;
          border: 1px solid #fae8d0;
          border-radius: 8px;
          transition: var(--transition);
        }

        .division-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 171, 13, 0.15);
          border-color: var(--color-accent);
        }

        .division-card-link, .division-card-inner {
          display: block;
          padding: 16px;
          text-decoration: none;
          color: inherit;
        }

        .division-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 6px;
        }

        .division-card-name {
          font-size: 15px;
          font-weight: 600;
          color: #222;
        }

        .division-badge {
          font-size: 11px;
          background: var(--color-secondary);
          color: #875700;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 600;
        }

        .division-card-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.4;
        }

        @media (max-width: 900px) {
          .nav-list {
            gap: 16px;
          }
          .nav-link, .nav-division-btn {
            font-size: 15px;
            padding: 4px 8px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
