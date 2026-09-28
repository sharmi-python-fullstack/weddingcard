import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import { useShop } from '../context/ShopContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateCartQty, removeFromCart, cartSubtotal, cartTax, cartTotal } = useShop();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleContinueShopping = () => {
    navigate('/wedding-cards');
  };

  return (
    <div className="cart-page-wrapper container">
      {cart.length === 0 ? (
        <div className="empty-cart-state">
          <h2>Your Cart is Currently Empty</h2>
          <p>Explore our exquisite collections of handcrafted wedding invitations.</p>
          <Button to="/wedding-cards" variant="primary" size="md">
            Browse Cards
          </Button>
        </div>
      ) : (
        <div className="cart-content-card animate-fade-in">
          {/* Cart Table */}
          <div className="cart-table-wrapper">
            <table className="cart-table">
              <thead>
                <tr className="cart-header-row">
                  <th className="th-product">Product</th>
                  <th className="th-qty">Qty</th>
                  <th className="th-unit">Unit Price</th>
                  <th className="th-tax">Tax</th>
                  <th className="th-price">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="cart-item-row">
                    <td className="td-product">
                      <div className="product-sku-badge">
                        <span className="sku-main">SKU: {item.sku || 'KSN0054'}</span>
                        <span className="sku-sub">{item.skuSubtitle || 'SN (SN 54)'}</span>
                      </div>
                    </td>

                    <td className="td-qty">
                      <div className="cart-qty-ctrl">
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => updateCartQty(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="cart-qty-val">{item.quantity}</span>
                        <button
                          type="button"
                          className="cart-qty-btn"
                          onClick={() => updateCartQty(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="td-unit">
                      Rs.{(item.unitPrice || 65).toFixed(2)}
                    </td>

                    <td className="td-tax">
                      {item.taxPercent || 18}%
                    </td>

                    <td className="td-price">
                      Rs.{(item.price || item.unitPrice * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Totals Summary */}
          <div className="cart-summary-block">
            <div className="summary-line">
              <span className="summary-label">Sub Total:</span>
              <span className="summary-val">Rs.{(cartSubtotal || 130.00).toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span className="summary-label">Total Tax:</span>
              <span className="summary-val">Rs.{(cartTax || 23.40).toFixed(2)}</span>
            </div>

            <div className="summary-line grand-total">
              <span className="summary-label">Total:</span>
              <span className="summary-val">Rs. {(cartTotal || 153.40).toFixed(2)}</span>
            </div>
          </div>

          {/* Red Minimum Order Warning */}
          <div className="cart-warning-row">
            <p className="cart-warning-text">
              TO CHECKOUT PLEASE ADD MINIMUM 100 ITEMS TO THE CART
            </p>
          </div>

          {/* Actions: Continue Shopping (amber) & Checkout (gray) */}
          <div className="cart-actions-row">
            <button
              type="button"
              className="custom-btn cart-continue-btn"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>

            <button
              type="button"
              className="custom-btn cart-checkout-btn"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      <style>{`
        .cart-page-wrapper {
          padding-top: 50px;
          padding-bottom: 80px;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cart-content-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 48px;
          width: 100%;
          max-width: 980px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .cart-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .cart-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .cart-header-row th {
          font-size: 16px;
          font-weight: 700;
          color: #111111;
          padding: 16px 20px;
          text-align: left;
          border-bottom: 1.5px solid #222222;
        }

        .th-product { width: 35%; }
        .th-qty { width: 15%; text-align: center !important; }
        .th-unit { width: 16%; }
        .th-tax { width: 16%; }
        .th-price { width: 18%; text-align: right !important; }

        .cart-item-row td {
          padding: 24px 20px;
          border-bottom: 1.5px solid #222222;
          vertical-align: middle;
          font-size: 15px;
          color: #222222;
        }

        .product-sku-badge {
          background-color: var(--color-accent); /* Amber rounded rectangle in Cart.png */
          color: #111111;
          padding: 14px 20px;
          border-radius: 8px;
          display: inline-flex;
          flex-direction: column;
          gap: 2px;
          font-weight: 700;
          line-height: 1.3;
        }

        .sku-main {
          font-size: 15px;
        }

        .sku-sub {
          font-size: 14px;
        }

        .td-qty {
          text-align: center;
        }

        .cart-qty-ctrl {
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .cart-qty-btn {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          border: 1px solid #ccc;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: bold;
        }

        .cart-qty-val {
          font-size: 16px;
          font-weight: 600;
        }

        .td-price {
          text-align: right;
          font-weight: 600;
        }

        /* Cart Summary Block */
        .cart-summary-block {
          margin-left: auto;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 10px 0;
          margin-top: 10px;
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 600;
          color: #222222;
        }

        .summary-line.grand-total {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
        }

        /* Warning Text */
        .cart-warning-row {
          text-align: center;
          margin: 32px 0 28px 0;
        }

        .cart-warning-text {
          font-size: 16px;
          font-weight: 800;
          color: #ff0000; /* Red notice from Cart.png */
          letter-spacing: 0.5px;
        }

        /* Actions Row */
        .cart-actions-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }

        .cart-continue-btn {
          background-color: var(--color-accent);
          color: #111111;
          padding: 14px 36px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .cart-checkout-btn {
          background-color: #9ea0a5; /* Gray button from Cart.png */
          color: #111111;
          padding: 14px 44px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .cart-checkout-btn:hover {
          background-color: #8c8f94;
        }

        .empty-cart-state {
          text-align: center;
          padding: 80px 20px;
          background: #ffffff;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .empty-cart-state h2 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .empty-cart-state p {
          color: #666;
          margin-bottom: 24px;
        }

        @media (max-width: 600px) {
          .cart-content-card {
            padding: 20px;
          }
          .cart-actions-row {
            flex-direction: column;
            gap: 14px;
          }
          .cart-continue-btn, .cart-checkout-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Cart;
