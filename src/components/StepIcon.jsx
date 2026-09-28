import React from 'react';

const StepIcon = ({ step, title }) => {
  const renderIcon = () => {
    switch (step) {
      case 1:
        // Order Sample (Clipboard)
        return (
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
            <rect x="14" y="10" width="36" height="46" rx="6" fill="#38bdf8" />
            <rect x="22" y="6" width="20" height="8" rx="3" fill="#0284c7" />
            <path d="M22 24h20M22 32h20M22 40h12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
            <circle cx="44" cy="44" r="10" fill="#22c55e" />
            <path d="M40 44l3 3 5-5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 2:
        // Get Sample Order in 5 days (Calendar / Stack)
        return (
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
            <rect x="12" y="14" width="40" height="40" rx="6" fill="#818cf8" />
            <rect x="12" y="14" width="40" height="12" rx="4" fill="#4f46e5" />
            <line x1="20" y1="8" x2="20" y2="16" stroke="#1e1b4b" strokeWidth="4" strokeLinecap="round" />
            <line x1="44" y1="8" x2="44" y2="16" stroke="#1e1b4b" strokeWidth="4" strokeLinecap="round" />
            <circle cx="24" cy="36" r="3" fill="#ffffff" />
            <circle cx="34" cy="36" r="3" fill="#ffffff" />
            <circle cx="44" cy="36" r="3" fill="#ffffff" />
            <circle cx="24" cy="46" r="3" fill="#ffffff" />
            <circle cx="34" cy="46" r="3" fill="#ffffff" />
          </svg>
        );
      case 3:
        // Approve Digital Draft (Phone with check)
        return (
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
            <rect x="18" y="8" width="28" height="48" rx="6" fill="#1e293b" />
            <rect x="22" y="14" width="20" height="34" rx="2" fill="#f8fafc" />
            <circle cx="32" cy="51" r="2" fill="#94a3b8" />
            <circle cx="32" cy="30" r="10" fill="#22c55e" />
            <path d="M28 30l3 3 6-6" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 4:
        // Place Your Bulk Order (Package box in hands)
        return (
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
            <path d="M12 28l20-10 20 10-20 10-20-10z" fill="#fbbf24" />
            <path d="M12 28l20 10v20L12 48V28z" fill="#f59e0b" />
            <path d="M32 38l20-10v20L32 58V38z" fill="#d97706" />
            <path d="M8 44c4 4 10 4 14 2M56 44c-4 4-10 4-14 2" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 5:
        // Print & Delivery (Truck with clock)
        return (
          <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
            <path d="M8 22h28v22H8z" fill="#3b82f6" />
            <path d="M36 28h12l8 8v10H36V28z" fill="#ef4444" />
            <circle cx="18" cy="46" r="6" fill="#1e293b" />
            <circle cx="18" cy="46" r="3" fill="#cbd5e1" />
            <circle cx="46" cy="46" r="6" fill="#1e293b" />
            <circle cx="46" cy="46" r="3" fill="#cbd5e1" />
            <circle cx="22" cy="20" r="8" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
            <path d="M22 16v4h4" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="step-icon-item">
      <div className="step-icon-circle">
        {renderIcon()}
      </div>
      <h5 className="step-icon-title">{title}</h5>

      <style>{`
        .step-icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 12px;
        }

        .step-icon-circle {
          width: 72px;
          height: 72px;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        .step-icon-item:hover .step-icon-circle {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .step-icon-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
          max-width: 140px;
        }
      `}</style>
    </div>
  );
};

export default StepIcon;
