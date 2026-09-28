import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Default Cart state matching Cart.png
  const [cart, setCart] = useState([
    {
      id: 'the-blue-wedding-cards',
      sku: 'KSN0054',
      skuSubtitle: 'SN (SN 54)',
      title: 'The blue Wedding Cards',
      quantity: 2,
      unitPrice: 65.00,
      taxPercent: 18,
      price: 130.00,
      image: PRODUCTS[0].image
    }
  ]);

  // Default Wishlist state matching Wishlist.png
  const [wishlist, setWishlist] = useState(['the-blue-wedding-cards']);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([
    'Wedding Cards',
    'Scroll Cards',
    'Theme Cards',
    'Birthday Cards',
    'Engagement Cards'
  ]);

  // Order Details for confirmation page
  const [currentOrder, setCurrentOrder] = useState({
    orderId: '356958190',
    date: '16th Apr',
    time: '5.35pm',
    items: [
      {
        id: 'the-blue-wedding-cards',
        sku: 'KSN0054',
        skuSubtitle: 'SN (SN 54)',
        title: 'The blue Wedding Cards',
        price: 153.00,
        image: PRODUCTS[0].image,
        compliment: 'Hold Bag'
      }
    ],
    subtotal: 153.40,
    shippingCharge: 0.00,
    taxes: '18%',
    discount: 5.00,
    total: 148.00,
    customer: {
      name: 'Jhon',
      email: 'jhon057@gmail.com',
      ordersCount: '1 order',
      shippingAddress: '123 Elm street\nAnytown, ABC 12345\nAnywhere.',
      billingAddress: 'Same as Shipping address'
    }
  });

  const addToCart = (product, quantity = 2) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                price: (item.quantity + quantity) * (item.unitPrice || product.unitPrice || 65.00)
              }
            : item
        );
      } else {
        const uPrice = product.unitPrice || product.price || 65.00;
        return [
          ...prev,
          {
            id: product.id,
            sku: product.sku || 'KSN0054',
            skuSubtitle: product.skuSubtitle || 'SN (SN 54)',
            title: product.title,
            quantity: quantity,
            unitPrice: uPrice,
            taxPercent: 18,
            price: uPrice * quantity,
            image: product.image
          }
        ];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQty = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === productId
          ? {
              ...item,
              quantity: qty,
              price: qty * item.unitPrice
            }
          : item
      )
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartSubtotal = cart.reduce((total, item) => total + item.price, 0);
  const cartTax = (cartSubtotal * 0.18);
  const cartTotal = cartSubtotal + cartTax;

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartQty,
        toggleWishlist,
        isInWishlist,
        cartCount,
        cartSubtotal,
        cartTax,
        cartTotal,
        searchQuery,
        setSearchQuery,
        selectedTags,
        setSelectedTags,
        currentOrder,
        setCurrentOrder
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
