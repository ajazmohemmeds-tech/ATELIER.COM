'use client';

import React from 'react';
import Link from 'next/link'; // Added Link import
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} section-spacing`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className={styles.logoLine}>ATELIER</span>
                        </Link>
                        <p className={styles.description}>
                            Exquisitely curated gifts and artisanal creations for the most meaningful moments in life.
                            Based on the essence of elegance and artistry.
                        </p>
                    </div>
                    <div className={styles.links}>
                        <h3>Shop</h3>
                        <ul>
                            <li><Link href="/category/frames">Frames</Link></li>
                            <li><Link href="/category/hampers">Hampers</Link></li>
                            <li><Link href="/category/bouquets">Bouquets</Link></li>
                            <li><Link href="/shop">Customized</Link></li>
                        </ul>
                    </div>
                    <div className={styles.links}>
                        <h3>Customer Care</h3>
                        <ul>
                            <li><a href="mailto:naushaba5771@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }}>naushaba5771@gmail.com</a></li>
                            <li><a href="tel:+919567169652" style={{ textDecoration: 'none', color: 'inherit' }}>+91 9567169652</a></li>
                            <li><a href="https://www.instagram.com/craft.voyage?igsh=MWk5OHo1ZjN4MHgzMw==" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>Instagram</a></li>
                            <li>Shipping Policy</li>
                            <li>Returns & Exchanges</li>
                        </ul>
                    </div>
                    <div className={styles.newsletter}>
                        <h3>Newsletter</h3>
                        <p>Join for exclusive offers and gift inspiration.</p>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Email Address" />
                            <button>Join</button>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Atelier. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
