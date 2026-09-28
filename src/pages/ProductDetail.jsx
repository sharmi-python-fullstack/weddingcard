import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowUpDown, MoveHorizontal, ShoppingBag, Plus, Minus } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useShop();

  // Find product by id, default to blue wedding card
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const [selectedImg, setSelectedImg] = useState(
    product.thumbnails && product.thumbnails.length > 0
      ? product.thumbnails[0]
      : product.image
  );
  const [quantity, setQuantity] = useState(2);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout'); // Leads directly to payment/checkout page as requested
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart'); // Leads to cart page as requested
  };

  const relatedProducts = PRODUCTS.slice(0, 8);

  return (
    <div className="product-detail-page container">
      {/* Top Product Showcase */}
      <div className="product-main-grid">
        {/* Left 1: Vertical Thumbnails Strip */}
        <div className="thumbnails-column">
          {(product.thumbnails || [product.image]).map((thumb, idx) => (
            <button
              key={idx}
              type="button"
              className={`thumbnail-btn ${selectedImg === thumb ? 'active' : ''}`}
              onClick={() => setSelectedImg(thumb)}
            >
              <img src={thumb} alt={`Thumbnail ${idx + 1}`} className="thumb-img" />
            </button>
          ))}
        </div>

        {/* Center: Large Image Display */}
        <div className="main-image-display">
          <img
            src={selectedImg}
            alt={product.title}
            className="main-hero-img"
          />
        </div>

        {/* Right: Product Actions & Variants */}
        <div className="product-actions-column">
          <div className="sku-badge">
            SKU Code: {product.sku || 'KSN0054'}
          </div>

          <div className="detail-price-line">
            <span className="detail-price-val">Rs. {Number(product.price).toFixed(2)}</span>
            <span className="detail-price-label">per unit inclusive of all taxes</span>
          </div>

          <div className="qty-stepper-row">
            <span className="qty-label">QTY:</span>
            <button
              type="button"
              className="qty-circle-btn"
              onClick={decreaseQty}
              aria-label="Decrease quantity"
            >
              <Minus size={16} />
            </button>
            <span className="qty-number-box">{quantity}</span>
            <button
              type="button"
              className="qty-circle-btn"
              onClick={increaseQty}
              aria-label="Increase quantity"
            >
              <Plus size={16} />
            </button>
          </div>

          <div className="cta-buttons-row">
            <Button
              onClick={handleBuyNow}
              variant="primary"
              size="md"
              className="buy-now-btn"
            >
              Buy Now
            </Button>
            <Button
              onClick={handleAddToCart}
              variant="secondary"
              size="md"
              className="add-cart-btn"
            >
              Add to Cart
            </Button>
          </div>

          <div className="variants-section">
            <h5 className="variants-title">
              Variants (Same size & material but different color/Theme)
            </h5>
            <div className="variant-thumbnail-wrap">
              <img
                src={product.variantImage || product.image}
                alt="Product variant"
                className="variant-thumb-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Middle Specs Section */}
      <div className="specs-section-grid">
        {/* Left Column: Description & Additional Comments */}
        <div className="specs-left-col">
          <div className="specs-block">
            <h3 className="specs-underlined-title">DESCRIPTION:</h3>
            <p className="specs-body-text">{product.description}</p>
          </div>

          <div className="specs-block">
            <h3 className="specs-underlined-title">ADDITIONAL COMMENTS</h3>
            <p className="specs-body-text">{product.additionalComments}</p>
          </div>
        </div>

        {/* Right Column: Additional Information */}
        <div className="specs-right-col">
          <div className="specs-block">
            <h3 className="specs-underlined-title">ADDITIONAL INFORMATION</h3>
            <div className="dimensions-row">
              <div className="dim-item">
                <span className="dim-icon-badge">
                  <ArrowUpDown size={16} color="#ffffff" />
                </span>
                <strong>Height:</strong> {product.additionalInfo?.height || '27.5 cms'}
              </div>

              <div className="dim-item">
                <span className="dim-icon-badge">
                  <MoveHorizontal size={16} color="#ffffff" />
                </span>
                <strong>Width:</strong> {product.additionalInfo?.width || '21 cms'}
              </div>

              <div className="dim-item">
                <span className="dim-icon-badge">
                  <ShoppingBag size={16} color="#ffffff" />
                </span>
                <strong>Weight:</strong> {product.additionalInfo?.weight || '110 grams'}
              </div>
            </div>

            {/* The Wedding Details Button */}
            <div className="wedding-details-cta-wrap">
              <Button
                to={`/product/${product.id}/details`}
                variant="primary"
                size="md"
                className="the-wedding-details-btn"
              >
                The Wedding Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Cards Grid */}
      <section className="related-cards-section">
        <h2 className="related-cards-heading">Related Cards</h2>
        <div className="related-cards-grid">
          {relatedProducts.map((relProduct) => (
            <ProductCard key={relProduct.id} product={relProduct} />
          ))}
        </div>
      </section>

      <style>{`
        .product-detail-page {
          padding-top: 40px;
          padding-bottom: 70px;
        }

        .product-main-grid {
          display: grid;
          grid-template-columns: 100px 1.2fr 1fr;
          gap: 30px;
          margin-bottom: 50px;
          align-items: flex-start;
        }

        /* Thumbnails Strip */
        .thumbnails-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .thumbnail-btn {
          width: 86px;
          height: 86px;
          border-radius: 8px;
          border: 1.5px solid #dddddd;
          background: #ffffff;
          overflow: hidden;
          padding: 6px;
          cursor: pointer;
          transition: border-color 0.2s;
        }

        .thumbnail-btn.active {
          border-color: #222222;
          box-shadow: 0 0 0 1px #222222;
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Center Main Hero Image */
        .main-image-display {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 480px;
          padding: 24px;
        }

        .main-hero-img {
          width: 100%;
          max-height: 460px;
          object-fit: contain;
          transition: transform 0.3s;
        }

        /* Right Actions */
        .product-actions-column {
          display: flex;
          flex-direction: column;
          gap: 22px;
          padding-left: 10px;
        }

        .sku-badge {
          display: inline-block;
          background-color: var(--color-secondary); /* Peach badge */
          color: #111111;
          font-weight: 700;
          font-size: 15px;
          padding: 10px 22px;
          border-radius: 8px;
          align-self: flex-start;
        }

        .detail-price-line {
          display: flex;
          align-items: baseline;
          gap: 12px;
          flex-wrap: wrap;
        }

        .detail-price-val {
          font-size: 26px;
          font-weight: 700;
          color: #c92a2a; /* Red price */
        }

        .detail-price-label {
          font-size: 15px;
          color: #222222;
          font-weight: 500;
        }

        .qty-stepper-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .qty-label {
          font-size: 16px;
          font-weight: 700;
          color: #111111;
        }

        .qty-circle-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--color-accent);
          color: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          font-weight: 700;
          transition: transform 0.15s;
        }

        .qty-circle-btn:hover {
          transform: scale(1.1);
        }

        .qty-number-box {
          font-size: 17px;
          font-weight: 700;
          min-width: 28px;
          text-align: center;
        }

        .cta-buttons-row {
          display: flex;
          gap: 16px;
          margin-top: 6px;
        }

        .buy-now-btn {
          min-width: 140px;
        }

        .add-cart-btn {
          min-width: 140px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .variants-section {
          margin-top: 14px;
        }

        .variants-title {
          font-size: 14px;
          font-weight: 600;
          color: #222222;
          margin-bottom: 12px;
        }

        .variant-thumbnail-wrap {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          border: 1px solid #ccc;
          overflow: hidden;
          padding: 6px;
          background: #fff;
        }

        .variant-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Specs Grid */
        .specs-section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 30px 0;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 50px;
        }

        .specs-block {
          margin-bottom: 24px;
        }

        .specs-underlined-title {
          font-size: 18px;
          font-weight: 700;
          color: #111111;
          letter-spacing: 0.5px;
          border-bottom: 2px solid #222222;
          padding-bottom: 6px;
          margin-bottom: 14px;
          display: inline-block;
          width: 100%;
        }

        .specs-body-text {
          font-size: 15px;
          color: #333333;
          line-height: 1.6;
        }

        .dimensions-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .dim-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #222222;
        }

        .dim-icon-badge {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          background-color: #b72b2b; /* Red icon box */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wedding-details-cta-wrap {
          margin-top: 20px;
        }

        .the-wedding-details-btn {
          min-width: 220px;
          font-size: 16px;
        }

        /* Related Cards Grid */
        .related-cards-section {
          margin-top: 40px;
        }

        .related-cards-heading {
          font-size: 26px;
          font-weight: 700;
          color: #111111;
          margin-bottom: 30px;
        }

        .related-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .product-main-grid {
            grid-template-columns: 80px 1fr;
          }
          .product-actions-column {
            grid-column: span 2;
          }
          .specs-section-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .related-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .product-main-grid {
            grid-template-columns: 1fr;
          }
          .thumbnails-column {
            flex-direction: row;
            overflow-x: auto;
          }
          .product-actions-column {
            grid-column: 1;
          }
          .related-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;
