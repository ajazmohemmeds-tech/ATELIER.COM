'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Story.module.css';

const Story5 = () => {
    return (
        <main className={styles.storyPage}>
            {/* Minimalist Header */}
            <header className={styles.header}>
                <Link href="/" className={styles.backLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Atelier</span>
                </Link>
                <div className={styles.logo}>ATELIER</div>
            </header>

            <div className={styles.contentWrapper}>
                {/* Left Side: Sticky Image */}
                <div className={styles.imageCol}>
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* Main hero image for the story context */}
                        <Image
                            src="/images/stories/dubai.jpg"
                            alt="A Gift from Dubai"
                            fill
                            className={styles.heroImage}
                            priority
                        />
                    </motion.div>
                </div>

                {/* Right Side: Scrolling Poetic Text */}
                <div className={styles.textCol}>
                    <motion.div
                        className={styles.textContent}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        <h1 className={styles.title}>Miles Apart</h1>
                        <div className={styles.divider}></div>

                        <div className={styles.poem}>
                            <p>Miles apart,<br />
                                yet always close.</p>

                            <p>From the fast moving skyline of Dubai<br />
                                to the quiet warmth of Kerala,<br />
                                this wasn't just a gift that travelled<br />
                                it was love, carefully wrapped and sent across borders.</p>

                            <p>A small token, they said.<br />
                                But within it lived countless memories...<br />
                                shared laughter over calls,<br />
                                missed moments,<br />
                                and the comfort of knowing<br />
                                "you're always in my heart."</p>

                            <p>When she opened it,<br />
                                it wasn't just a frame she saw<br />
                                it was her sister's presence,<br />
                                right there beside her.</p>

                            <p>Distance may separate places,<br />
                                but never people who belong to each other.</p>

                            <p>At Atelier,<br />
                                we don't just deliver gifts<br />
                                we deliver feelings,<br />
                                from one heart to another,<br />
                                no matter the distance.</p>

                            <p className={styles.finale}>Because love doesn't need proximity...<br />
                                it just needs a way to reach.</p>
                        </div>

                        <div className={styles.footerDetails}>
                            <p>Atelier Storie 05</p>
                            <Link href="/shop" className={styles.cta}>Discover Keepsakes</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Story5;
