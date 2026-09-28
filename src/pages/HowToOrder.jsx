import React from 'react';

const HowToOrder = () => {
  return (
    <div className="how-to-order-page-wrapper container">
      <h1 className="how-to-order-heading">
        How do I order wedding cards from Wed Knot Craft online?
      </h1>

      <div className="steps-ordered-list animate-fade-in">
        <div className="step-item-block">
          <p className="step-text">
            <strong>Browse the Collection:</strong> Take your time to explore
            our collection and discover various designs that suit your style and
            preferences. You can use the search filters to narrow down your
            options based on themes, colors, or card types.
          </p>
        </div>

        <div className="step-item-block">
          <p className="step-text">
            <strong>Select a Design:</strong> Once you have found a design that
            catches your eye, click on it to view more details. You can zoom in
            to see the intricate details and read the card description to ensure
            it meets your requirements.
          </p>
        </div>

        <div className="step-item-block">
          <p className="step-text">
            <strong>Add to Cart:</strong> Once you are happy with your design,
            select the quantity and click on the "Add to Cart" button to proceed
            to the next step.
          </p>
        </div>

        <div className="step-item-block">
          <p className="step-text">
            <strong>Review Your Order:</strong> In the shopping cart, you will be
            able to review your order summary, including the quantity, price,
            and any additional services you have selected.
          </p>
        </div>

        <div className="step-item-block">
          <p className="step-text">
            <strong>Secure Payment:</strong> King of Cards offers a secure
            online payment system. Choose your preferred payment method and
            enter the necessary details to complete your transaction.
          </p>
        </div>

        <div className="step-item-block">
          <p className="step-text">
            <strong>Place Your Order:</strong> After confirming your payment, you
            will receive an order confirmation via email, along with an
            estimated delivery date.
          </p>
        </div>
      </div>

      <style>{`
        .how-to-order-page-wrapper {
          padding-top: 50px;
          padding-bottom: 90px;
          max-width: 980px;
        }

        .how-to-order-heading {
          font-size: 28px;
          font-weight: 700;
          color: #111111;
          text-align: center;
          margin-bottom: 48px;
          line-height: 1.35;
        }

        .steps-ordered-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .step-item-block {
          background: transparent;
        }

        .step-text {
          font-size: 16px;
          line-height: 1.7;
          color: #2b2b2b;
        }

        .step-text strong {
          color: #111111;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .how-to-order-heading {
            font-size: 22px;
            margin-bottom: 30px;
          }
          .step-text {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default HowToOrder;
