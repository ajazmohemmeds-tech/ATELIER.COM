'use client';

import React from 'react';
import styles from './CartDrawer.module.css';
import { useCart } from '@/context/CartContext';

const CartDrawer = () => {
    const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

    const handleWhatsAppCheckout = () => {
        if (cartItems.length === 0) return;

        const phoneNumber = "919567169652"; // Atelier's business number
        let message = "Hi Atelier, I'd like to place an order for the following items:\n\n";

        cartItems.forEach(item => {
            message += `▪ ${item.quantity}x ${item.name} (₹${item.price.toLocaleString('en-IN')})\n`;
        });

        message += `\n*Total Order Value: ₹${totalPrice.toLocaleString('en-IN')}*\n\n`;
        message += "Please let me know how to proceed with payment and delivery details. Thank you!";

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    if (!isCartOpen) return null;

    return (
        <div className={styles.overlay} onClick={() => setIsCartOpen(false)}>
            <div className={styles.drawer} onClick={e => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2>Shopping Cart</h2>
                    <button className={styles.closeBtn} onClick={() => setIsCartOpen(false)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                    </button>
                </div>

                <div className={styles.items}>
                    {cartItems.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your cart is empty</p>
                            <button className={styles.shopBtn} onClick={() => setIsCartOpen(false)}>Start Shopping</button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className={styles.item}>
                                <img src={item.image} alt={item.name} className={styles.itemImage} />
                                <div className={styles.itemInfo}>
                                    <h3>{item.name}</h3>
                                    <p>₹{item.price.toLocaleString('en-IN')}</p>
                                    <div className={styles.quantity}>
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                    </div>
                                </div>
                                <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Total</span>
                            <span>₹{totalPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <button className={styles.checkoutBtn} onClick={handleWhatsAppCheckout}>
                            Checkout via WhatsApp
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
