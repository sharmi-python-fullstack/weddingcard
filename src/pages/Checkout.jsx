import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info, ChevronDown, Check, CreditCard, Banknote } from 'lucide-react';
import Button from '../components/Button';
import { useShop } from '../context/ShopContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { currentOrder, setCurrentOrder } = useShop();

  const [selectedUPI, setSelectedUPI] = useState('Paytm');
  const [codOpen, setCodOpen] = useState(false);
  const [saveDetails, setSaveDetails] = useState(true);

  const handlePay = () => {
    // Generate order confirmation details
    setCurrentOrder(prev => ({
      ...prev,
      orderId: Math.floor(100000000 + Math.random() * 900000000).toString(),
      paymentMethod: selectedUPI || 'Cash on Delivery'
    }));
    navigate('/order-confirmation');
  };

  return (
    <div className="checkout-page-wrapper container">
      <div className="checkout-two-column-grid animate-fade-in">
        {/* Left Column: Payment Methods */}
        <div className="checkout-card payment-options-card">
          {/* Card Logos Bar */}
          <div className="payment-brands-row">
            {/* Mastercard */}
            <div className="card-brand-logo mastercard">
              <span className="mc-circle red"></span>
              <span className="mc-circle yellow"></span>
              <span className="mc-text">mastercard</span>
            </div>

            {/* Visa */}
            <div className="card-brand-logo visa">
              <span className="visa-text">VISA</span>
            </div>

            {/* PayPal */}
            <div className="card-brand-logo paypal">
              <span className="paypal-p1">P</span>
              <span className="paypal-p2">P</span>
              <span className="paypal-text">PayPal</span>
            </div>

            {/* UPI Badge */}
            <div className="card-brand-logo upi-badge">
              <span className="upi-box">UPI</span>
            </div>
          </div>

          {/* Pay by UPI Radio Options Box */}
          <div className="upi-selection-box">
            <div className="upi-box-header">
              <span className="upi-header-label">Pay by UPI</span>
              <span className="upi-brand-pill">UPI ▶</span>
            </div>

            <div className="upi-radios-list">
              {[
                { name: 'Paytm', label: 'Paytm', color: '#002e6e', bg: '#00b9f5' },
                { name: 'Gpay', label: 'Gpay', color: '#4285f4', icon: 'G' },
                { name: 'Phonepe', label: 'Phonepe', color: '#5f259f' },
                { name: 'Cred', label: 'Cred', color: '#000000', badge: 'CRED' }
              ].map((method) => {
                const isChecked = selectedUPI === method.name;
                return (
                  <label
                    key={method.name}
                    className={`upi-radio-row ${isChecked ? 'selected' : ''}`}
                    onClick={() => setSelectedUPI(method.name)}
                  >
                    <div className="radio-circle-wrap">
                      <input
                        type="radio"
                        name="upiMethod"
                        checked={isChecked}
                        onChange={() => setSelectedUPI(method.name)}
                        className="custom-radio-input"
                      />
                      <span className={`custom-radio-mark ${isChecked ? 'active' : ''}`} />
                    </div>

                    <span className="upi-method-name">{method.name}</span>

                    <div className="upi-method-badge">
                      {method.name === 'Paytm' && (
                        <div className="paytm-badge">
                          <span className="pt-top">paytm</span>
                          <span className="pt-bot">UPI</span>
                        </div>
                      )}
                      {method.name === 'Gpay' && (
                        <div className="gpay-badge">
                          <span className="gp-g">G</span>Pay
                        </div>
                      )}
                      {method.name === 'Phonepe' && (
                        <div className="phonepe-badge">
                          pe
                        </div>
                      )}
                      {method.name === 'Cred' && (
                        <div className="cred-badge">
                          CRED
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Cash on Delivery Accordion */}
          <div className="cod-accordion-bar" onClick={() => setCodOpen(!codOpen)}>
            <div className="cod-left-title">
              <Banknote size={20} />
              <span>Cash on Delivery</span>
            </div>
            <ChevronDown size={18} className={`cod-chevron ${codOpen ? 'rotated' : ''}`} />
          </div>

          {codOpen && (
            <div className="cod-expand-content animate-fade-in">
              <p>Pay cash when your customized wedding invitations arrive at your doorstep. Standard verification call required prior to printing dispatch.</p>
            </div>
          )}

          {/* Info Notice */}
          <div className="payment-info-notice">
            <Info size={16} className="info-icon" />
            <p>Credit card payments may take up to 24 hours to be processed!</p>
          </div>

          {/* Save Details Checkbox */}
          <label className="save-payment-label">
            <input
              type="checkbox"
              checked={saveDetails}
              onChange={(e) => setSaveDetails(e.target.checked)}
              className="save-checkbox"
            />
            <span>Save my payments details for future purchase</span>
          </label>
        </div>

        {/* Right Column: Order Summary */}
        <div className="checkout-card order-summary-card">
          <h2 className="order-summary-title">Order Summary</h2>

          <div className="summary-date-time-row">
            <div className="dt-line">
              <span className="dt-label">Date:</span>
              <span className="dt-val">16th Apr</span>
            </div>
            <div className="dt-line">
              <span className="dt-label">Time:</span>
              <span className="dt-val">5.35pm</span>
            </div>
          </div>

          <div className="products-summary-section">
            <h4 className="products-sec-heading">Products</h4>
            <div className="prod-line-row">
              <span className="p-name">The Blue Wedding Card</span>
              <span className="p-qty">2</span>
            </div>
            <div className="prod-line-row">
              <span className="p-name">Added Compliment</span>
              <span className="p-qty">Hold Bag</span>
            </div>
          </div>

          {/* Coupon Applied Pill */}
          <div className="coupon-applied-pill">
            <span className="coupon-code">MAR0057</span>
            <span className="coupon-success-text">Coupon Applied</span>
          </div>

          {/* Price Breakdown */}
          <div className="checkout-pricing-breakdown">
            <div className="price-row subtotal">
              <span className="price-label">Subtotal</span>
              <span className="price-val">Rs. 153.40</span>
            </div>

            <div className="price-row shipping">
              <span className="price-label">Shipping</span>
              <div className="shipping-val-wrap">
                <span className="shipping-amt">0.00</span>
                <span className="free-badge">Free</span>
              </div>
            </div>
          </div>

          {/* Pay Button */}
          <div className="pay-btn-wrapper">
            <Button
              onClick={handlePay}
              variant="primary"
              size="lg"
              className="pay-submit-btn"
            >
              Pay Rs.153.40
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        .checkout-page-wrapper {
          padding-top: 40px;
          padding-bottom: 70px;
        }

        .checkout-two-column-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: flex-start;
          max-width: 1080px;
          margin: 0 auto;
        }

        .checkout-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 36px 32px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Payment Brands Row */
        .payment-brands-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 28px;
          padding-bottom: 16px;
        }

        .card-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Mastercard CSS Logo */
        .mastercard {
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .mc-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: inline-block;
        }

        .mc-circle.red {
          background: #eb001b;
          margin-right: -10px;
          z-index: 1;
        }

        .mc-circle.yellow {
          background: #ff5f00;
          opacity: 0.9;
        }

        .mc-text {
          font-size: 8px;
          font-weight: 700;
          color: #222;
          margin-top: 2px;
        }

        /* Visa CSS Logo */
        .visa-text {
          font-size: 24px;
          font-weight: 900;
          font-style: italic;
          color: #1a1f71;
          letter-spacing: -1px;
        }

        /* PayPal CSS Logo */
        .paypal {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .paypal-p1 {
          font-size: 24px;
          font-weight: 900;
          color: #003087;
          font-style: italic;
        }

        .paypal-p2 {
          font-size: 24px;
          font-weight: 900;
          color: #0079c1;
          margin-left: -8px;
          font-style: italic;
        }

        .paypal-text {
          font-size: 16px;
          font-weight: 700;
          color: #003087;
          font-style: italic;
          margin-left: 4px;
        }

        /* UPI Badge */
        .upi-box {
          background: #8b1e0f;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          padding: 6px 12px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }

        /* UPI Selection Box */
        .upi-selection-box {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .upi-box-header {
          padding: 12px 18px;
          background: #fbfbfb;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .upi-header-label {
          font-size: 15px;
          font-weight: 600;
          color: #222;
        }

        .upi-brand-pill {
          font-size: 12px;
          font-weight: 700;
          color: #008060;
        }

        .upi-radios-list {
          display: flex;
          flex-direction: column;
        }

        .upi-radio-row {
          display: flex;
          align-items: center;
          padding: 14px 18px;
          border-bottom: 1px solid #f2f2f2;
          cursor: pointer;
          transition: background 0.15s;
        }

        .upi-radio-row:last-child {
          border-bottom: none;
        }

        .upi-radio-row:hover {
          background: #faf8ff;
        }

        .upi-radio-row.selected {
          background: #fcfaff;
        }

        .radio-circle-wrap {
          position: relative;
          margin-right: 14px;
          display: flex;
          align-items: center;
        }

        .custom-radio-input {
          display: none;
        }

        .custom-radio-mark {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid #555;
          display: inline-block;
          position: relative;
        }

        .custom-radio-mark.active {
          background: #000;
          border-color: #000;
        }

        .custom-radio-mark.active::after {
          content: '';
          position: absolute;
          top: 4px;
          left: 4px;
          width: 6px;
          height: 6px;
          background: #fff;
          border-radius: 50%;
        }

        .upi-method-name {
          font-size: 16px;
          font-weight: 600;
          color: #222;
          flex-grow: 1;
        }

        .paytm-badge {
          background: #00b9f5;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 10px;
          font-weight: 800;
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
        }

        .gpay-badge {
          font-size: 13px;
          font-weight: 700;
          color: #555;
        }

        .gp-g {
          color: #4285f4;
          font-weight: 800;
        }

        .phonepe-badge {
          background: #5f259f;
          color: #fff;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
        }

        .cred-badge {
          background: #000;
          color: #fff;
          padding: 2px 8px;
          border-radius: 3px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.5px;
        }

        /* Cash on Delivery Accordion Bar */
        .cod-accordion-bar {
          background-color: #8f9296; /* Grey bar in Checkout.png */
          color: #ffffff;
          padding: 14px 20px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .cod-left-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
        }

        .cod-chevron {
          transition: transform 0.2s;
        }

        .cod-chevron.rotated {
          transform: rotate(180deg);
        }

        .cod-expand-content {
          padding: 12px 16px;
          background: #f8f8f8;
          border-radius: 6px;
          margin-bottom: 20px;
          font-size: 13.5px;
          color: #444;
          line-height: 1.5;
        }

        /* Notices & Checkbox */
        .payment-info-notice {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #3b5998;
          margin-bottom: 16px;
        }

        .save-payment-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13.5px;
          font-weight: 600;
          color: #222;
          cursor: pointer;
        }

        .save-checkbox {
          width: 18px;
          height: 18px;
          accent-color: #1a73e8;
        }

        /* Order Summary Card */
        .order-summary-title {
          font-size: 24px;
          font-weight: 700;
          color: #111111;
          text-align: center;
          border-bottom: 2px solid #222;
          padding-bottom: 8px;
          margin-bottom: 24px;
        }

        .summary-date-time-row {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
          margin-bottom: 20px;
        }

        .dt-line {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          color: #222;
        }

        .dt-label {
          font-weight: 600;
        }

        .dt-val {
          font-weight: 600;
        }

        .products-summary-section {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .products-sec-heading {
          font-size: 18px;
          font-weight: 700;
          color: #111;
          margin-bottom: 4px;
        }

        .prod-line-row {
          display: flex;
          justify-content: space-between;
          font-size: 15px;
          color: #333;
        }

        .p-qty {
          font-weight: 600;
        }

        /* Coupon Applied Pill */
        .coupon-applied-pill {
          background-color: #d6d8db;
          border-radius: 6px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .coupon-code {
          font-weight: 800;
          color: #111;
          font-size: 14px;
        }

        .coupon-success-text {
          font-weight: 700;
          color: #15803d; /* Green coupon applied */
          font-size: 13.5px;
        }

        .checkout-pricing-breakdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 30px;
        }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          font-weight: 600;
        }

        .price-row.subtotal {
          color: var(--color-accent); /* Amber subtotal in Checkout.png */
        }

        .shipping-val-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .free-badge {
          background: #eee;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          color: #444;
        }

        .pay-btn-wrapper {
          display: flex;
          justify-content: center;
        }

        .pay-submit-btn {
          min-width: 220px;
          padding: 14px 40px;
          font-size: 17px;
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .checkout-two-column-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Checkout;
