'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../Story.module.css';

const Story3 = () => {
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
                            src="/images/stories/birthday.PNG"
                            alt="The Unspoken Surprise"
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
                        <h1 className={styles.title}>The Unspoken Surprise</h1>
                        <div className={styles.divider}></div>

                        <div className={styles.poem}>
                            <p>It started quietly...<br />
                                a door half open, whispers behind it,<br />
                                and a secret waiting to unfold.</p>

                            <p>She walked in, holding something small<br />
                                just a simple box tied with a ribbon.<br />
                                Nothing too grand. Nothing too loud.<br />
                                But inside it... was a moment.</p>

                            <p>Behind her, giggles couldn't stay hidden.<br />
                                Excitement spilled through the doorway,<br />
                                tiny faces glowing with anticipation.</p>

                            <p>And then<br />
                                the surprise.</p>

                            <p>A birthday not just marked by a cake,<br />
                                but by the effort, the planning,<br />
                                the love wrapped in that little box.</p>

                            <p>Because it was never about how big the celebration was...<br />
                                it was about who showed up,<br />
                                who cared enough to make it special,<br />
                                and who turned an ordinary day<br />
                                into a memory that would stay forever.</p>

                            <p>At Atelier,<br />
                                we believe the best surprises<br />
                                aren't seen... they're felt.</p>

                            <p className={styles.finale}>And sometimes,<br />
                                all it takes is a small box<br />
                                to hold a very big moment.</p>
                        </div>

                        <div className={styles.footerDetails}>
                            <p>Atelier Storie 03</p>
                            <Link href="/shop" className={styles.cta}>Discover Keepsakes</Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default Story3;
