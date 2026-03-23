'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Story.module.css';

const Story4 = () => {
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
                            src="/images/stories/brother.jpg"
                            alt="A Story of Growing Up"
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
                        <h1 className={styles.title}>A Frozen Memory</h1>
                        <div className={styles.divider}></div>

                        <div className={styles.poem}>
                            <p>Some gifts are bought.<br />
                                Some are felt.</p>

                            <p>This one was never about the frame...<br />
                                It was about the moment inside it.</p>

                            <p>A quiet smile, a memory frozen in time,<br />
                                three brothers standing side by side<br />
                                not just in a photograph,<br />
                                but in a story of growing up, standing strong, and staying together.</p>

                            <p>When he held the frame,<br />
                                it wasn't just a gift he was holding...<br />
                                it was laughter from years ago,<br />
                                shared secrets, late-night talks,<br />
                                and a bond that time never touched.</p>

                            <p>"For his favourite brother"<br />
                                not a title, but a feeling.</p>

                            <p>At Atelier, we don't just create products.<br />
                                We craft emotions you can hold,<br />
                                memories you can gift,<br />
                                and stories that last forever.</p>

                            <p className={styles.finale}>Because the best gifts aren't expensive...<br />
                                they're unforgettable.</p>
                        </div>

                        <div className={styles.footerDetails}>
                            <p>Atelier Storie 04</p>
                            <Link href="/shop" className={styles.cta}>Discover Keepsakes</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Story4;
