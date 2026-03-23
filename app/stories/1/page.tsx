'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Story.module.css';

const Story1 = () => {
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
                            src="/images/stories/ramees.jpg"
                            alt="A Handwritten Promise"
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
                        <h1 className={styles.title}>A Handwritten Promise</h1>
                        <div className={styles.divider}></div>

                        <div className={styles.poem}>
                            <p>Not all promises are spoken.<br />
                                Some are written... and meant to last a lifetime.</p>

                            <p>In a moment filled with silence and meaning,<br />
                                he didn't just sign a name<br />
                                he sealed a bond.</p>

                            <p>Beside him, adorned in grace and gold,<br />
                                she carried not just tradition,<br />
                                but a lifetime of dreams, prayers, and beginnings.</p>

                            <p>Every detail of that moment mattered<br />
                                the ink, the paper, the trembling hands,<br />
                                and the quiet understanding between two hearts<br />
                                choosing each other, forever.</p>

                            <p>This wasn't just a ceremony.<br />
                                It was a story being written<br />
                                one that will be remembered<br />
                                long after the ink has dried.</p>

                            <p>At Atelier,<br />
                                we preserve moments like these<br />
                                turning them into keepsakes<br />
                                that hold not just memories,<br />
                                but meaning.</p>

                            <p className={styles.finale}>Because some moments deserve more than memory...<br />
                                they deserve to be kept forever.</p>
                        </div>

                        <div className={styles.footerDetails}>
                            <p>Atelier Storie 01</p>
                            <Link href="/shop" className={styles.cta}>Discover Keepsakes</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Story1;
