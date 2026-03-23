'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Story.module.css';

const Story2 = () => {
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
                            src="/images/stories/school.PNG"
                            alt="Chapters of Life"
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
                        <h1 className={styles.title}>Chapters of Life</h1>
                        <div className={styles.divider}></div>

                        <div className={styles.poem}>
                            <p>It didn’t feel real at first...<br />
                                that this was the end.</p>

                            <p>The same corridors that once echoed with laughter,<br />
                                last minute revisions,<br />
                                and whispered jokes during class<br />
                                were now quietly watching us leave.</p>

                            <p>Batch 2023–2024.<br />
                                Not just a year.<br />
                                Not just a group.</p>

                            <p>A collection of faces<br />
                                that slowly became a part of who we are.</p>

                            <p>Friends who turned into family,<br />
                                teachers who became guides,<br />
                                and moments that slipped by too fast<br />
                                only to stay forever in memory.</p>

                            <p>Every picture in that frame<br />
                                holds a story.</p>

                            <p>Of growing up.<br />
                                Of falling, learning, rising again.<br />
                                Of friendships that started with "Hi"<br />
                                and ended with "Don't forget me."</p>

                            <p>Farewell wasn't a goodbye.<br />
                                It was a pause<br />
                                between what we were<br />
                                and what we're about to become.</p>

                            <p>At Atelier,<br />
                                we don't just frame photos<br />
                                we frame chapters of life.</p>

                            <p className={styles.finale}>Because some endings<br />
                                deserve to be remembered forever.</p>
                        </div>

                        <div className={styles.footerDetails}>
                            <p>Atelier Storie 02</p>
                            <Link href="/shop" className={styles.cta}>Discover Keepsakes</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Story2;
