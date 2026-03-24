'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';
import { useCart } from '@/context/CartContext';
import { useUser } from '@/context/UserContext';
import SearchModal from '../Search/SearchModal';

const Header = () => {
    const { cartCount, setIsCartOpen } = useCart();
    const { isLoggedIn } = useUser();
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Hampers', href: '/category/hampers' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <AnimatePresence>
                {!scrolled && (
                    <motion.div
                        className={styles.topBar}
                        initial={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>Free Shipping on orders over ₹1999</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`${styles.mainNav} ${scrolled ? 'glass-morphism' : ''}`}>
                <div className={styles.navLinks}>
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <Link href={item.href}>{item.name}</Link>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.mobileMenuToggle}>
                    <motion.button
                        className={styles.hamburger}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className={`${styles.line} ${isMobileMenuOpen ? styles.line1Active : ''}`}></div>
                        <div className={`${styles.line} ${isMobileMenuOpen ? styles.line2Active : ''}`}></div>
                        <div className={`${styles.line} ${isMobileMenuOpen ? styles.line3Active : ''}`}></div>
                    </motion.button>
                </div>

                <motion.div
                    className={styles.logoContainer}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link href="/" className={styles.logo}>
                        <span className={styles.charItalic} style={{ zIndex: 7 }}>A</span>
                        <span className={styles.charNormal} style={{ zIndex: 6 }}>T</span>
                        <span className={styles.charNormal} style={{ zIndex: 5 }}>E</span>
                        <span className={styles.charNormal} style={{ zIndex: 4 }}>L</span>
                        <span className={styles.charItalic} style={{ zIndex: 3 }}>I</span>
                        <span className={styles.charNormal} style={{ zIndex: 2 }}>E</span>
                        <span className={styles.charNormal} style={{ zIndex: 1 }}>R</span>
                    </Link>
                </motion.div>

                <div className={styles.navActions}>
                    <motion.button
                        className={styles.iconBtn}
                        onClick={() => setIsSearchOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Link href={isLoggedIn ? "/account" : "/login"} className={styles.iconBtn}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </Link>
                    </motion.div>
                    <motion.button
                        className={styles.iconBtn}
                        onClick={() => setIsCartOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                        <span className={styles.cartCount}>{cartCount}</span>
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileOverlay}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <nav className={styles.mobileNav}>
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <Link
                                        href={item.href}
                                        className={styles.mobileNavLink}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                        <div className={styles.mobileMenuFooter}>
                            <p>© 2024 Atelier. All rights reserved.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <SearchModal
                isOpen={isSearchOpen}
                onClose={() => setIsSearchOpen(false)}
            />
        </header>
    );
};

export default Header;
