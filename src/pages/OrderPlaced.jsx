import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Trash2, User, Mail, Phone, ShoppingBag, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { useShop } from '../context/ShopContext';
import IMAGES from '../assets/assets';

const OrderPlaced = () => {
  const navigate = useNavigate();
  const { currentOrder } = useShop();

  return (
    <div className="order-placed-page-wrapper container">
      {/* 1. Large Circular Order Confirmed Badge */}
      <div className="order-confirmed-badge-circle animate-fade-in">
        <svg className="curved-text-svg" viewBox="0 0 300 300">
          {/* Orange/Amber Filled Circle */}
          <circle cx="150" cy="150" r="140" fill="#e59905" />

          {/* Arched Path for Text */}
          <path id="textArc" d="M 40,150 A 110,110 0 1,1 260,150" fill="none" />

          {/* Arched Text: ORDER CONFIRMED */}
          <text fill="#ffffff" fontSize="18" fontWeight="800" letterSpacing="6">
            <textPath href="#textArc" startOffset="50%" textAnchor="middle">
              ORDER CONFIRMED
            </textPath>
          </text>
        </svg>

        {/* Center Checkmark */}
        <div className="order-center-check">
          <Check size={22} color="#ffffff" strokeWidth={3} />
        </div>

        {/* Floating Decorative Butterflies/Flowers */}
        <div className="butterfly-icon b1">🦋</div>
        <div className="butterfly-icon b2">🌸</div>
        <div className="butterfly-icon b3">✨</div>
        <div className="butterfly-icon b4">🌸</div>
      </div>

      {/* 2. Main Order Confirmation Columns */}
      <div className="order-details-two-col">
        {/* Left Column: Your Order & Order Summary */}
        <div className="order-left-column">
          <div className="order-header-block">
            <h2 className="order-title-main">Your Order</h2>
            <p className="order-id-line">
              <strong>Order ID:</strong> {currentOrder?.orderId || '356958190'}
            </p>
            <p className="order-thankyou-line">
              Thank You! Your Order has been confirmed.
            </p>
          </div>

          {/* Ordered Line Item */}
          <div className="order-line-item-card">
            <div className="order-item-img-wrap">
              <img
                src={IMAGES['design_playground_removebg_preview.png']}
                alt="The blue Wedding Cards"
                className="order-item-img"
              />
            </div>

            <div className="order-sku-badge">
              <span className="sku-top">SKU: KSN0054</span>
              <span className="sku-bot">SN (SN 54)</span>
            </div>

            <span className="order-item-price">Rs. 153.00</span>

            <button type="button" className="order-trash-btn" title="Remove Item" aria-label="Remove item">
              <Trash2 size={18} />
            </button>
          </div>

          {/* Order Summary Box */}
          <div className="order-placed-summary-card">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-data-rows">
              <div className="s-row">
                <span>Subtotal</span>
                <span>Rs. 153.40</span>
              </div>

              <div className="s-row">
                <span>Shipping Charge</span>
                <span>Rs. 0.00</span>
              </div>

              <div className="s-row">
                <span>Taxes</span>
                <span>18%</span>
              </div>

              <div className="s-row">
                <span>Discount</span>
                <span>Rs. 5.00</span>
              </div>

              <div className="s-row total-highlight">
                <span>Total</span>
                <span>Rs. 148.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Customer Info Cards */}
        <div className="order-right-column">
          {/* Customer */}
          <div className="customer-meta-card">
            <h4 className="meta-card-heading">Customer</h4>
            <div className="meta-data-line">
              <User size={18} className="meta-icon" />
              <span>Jhon</span>
            </div>
            <div className="meta-data-line">
              <ShoppingBag size={18} className="meta-icon" />
              <span>1 order</span>
            </div>
          </div>

          {/* Customer Information */}
          <div className="customer-meta-card">
            <h4 className="meta-card-heading">Customer Information</h4>
            <div className="meta-data-line">
              <Mail size={18} className="meta-icon" />
              <span>jhon057@gmail.com</span>
            </div>
            <div className="meta-data-line">
              <Phone size={18} className="meta-icon" />
              <span>+91 9876543210</span>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="customer-meta-card">
            <h4 className="meta-card-heading">Shipping Address</h4>
            <div className="meta-data-line">
              <User size={18} className="meta-icon" />
              <span>Jhon</span>
            </div>
            <p className="address-paragraph">
              123 Elm street<br />
              Anytown, ABC 12345<br />
              Anywhere.
            </p>
          </div>

          {/* Billing Address */}
          <div className="customer-meta-card">
            <h4 className="meta-card-heading">Billing Address</h4>
            <p className="address-paragraph">
              Same as Shipping address
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action: Continue Shopping */}
      <div className="order-placed-cta">
        <Button
          to="/"
          variant="primary"
          size="lg"
          className="continue-shopping-main-btn"
        >
          Continue Shopping
        </Button>
      </div>

      <style>{`
        .order-placed-page-wrapper {
          padding-top: 40px;
          padding-bottom: 70px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Circular Illustrated Badge */
        .order-confirmed-badge-circle {
          position: relative;
          width: 240px;
          height: 240px;
          margin-bottom: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .curved-text-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 8px 20px rgba(229, 153, 5, 0.3));
        }

        .order-center-check {
          position: absolute;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .butterfly-icon {
          position: absolute;
          font-size: 20px;
          pointer-events: none;
        }

        .b1 { top: 22%; left: 30%; transform: rotate(-15deg); }
        .b2 { top: 20%; right: 30%; transform: rotate(15deg); }
        .b3 { bottom: 25%; left: 32%; }
        .b4 { bottom: 25%; right: 32%; }

        /* Two Column Grid */
        .order-details-two-col {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 36px;
          width: 100%;
          max-width: 1080px;
          margin-bottom: 40px;
        }

        .order-title-main {
          font-size: 28px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .order-id-line {
          font-size: 16px;
          color: #222;
          margin-bottom: 10px;
        }

        .order-thankyou-line {
          font-size: 16px;
          font-weight: 600;
          color: #222;
          margin-bottom: 24px;
        }

        /* Order Line Item Card */
        .order-line-item-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
          margin-bottom: 24px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .order-item-img-wrap {
          width: 72px;
          height: 72px;
          border-radius: 6px;
          background: #fdf6ec;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .order-item-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .order-sku-badge {
          background: var(--color-accent);
          padding: 12px 18px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          font-weight: 700;
          color: #111;
          line-height: 1.2;
        }

        .sku-top { font-size: 14px; }
        .sku-bot { font-size: 13px; }

        .order-item-price {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin-left: auto;
          margin-right: 16px;
        }

        .order-trash-btn {
          background: transparent;
          border: none;
          color: #666;
          cursor: pointer;
          transition: color 0.15s;
        }

        .order-trash-btn:hover {
          color: #c92a2a;
        }

        /* Order Placed Summary */
        .order-placed-summary-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 24px 28px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        }

        .summary-title {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 18px;
        }

        .summary-data-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .s-row {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
          color: #333;
        }

        .s-row.total-highlight {
          border-top: 1.5px solid #222;
          padding-top: 12px;
          margin-top: 6px;
          font-size: 17px;
          font-weight: 700;
          color: #111;
        }

        /* Right Column Cards */
        .order-right-column {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .customer-meta-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 20px 24px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .meta-card-heading {
          font-size: 16px;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .meta-data-line {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: #333;
          margin-bottom: 8px;
        }

        .meta-icon {
          color: #666;
        }

        .address-paragraph {
          font-size: 14.5px;
          line-height: 1.5;
          color: #555;
        }

        /* Continue Shopping Button */
        .order-placed-cta {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }

        .continue-shopping-main-btn {
          min-width: 240px;
          padding: 14px 44px;
          font-size: 16px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .order-details-two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderPlaced;
