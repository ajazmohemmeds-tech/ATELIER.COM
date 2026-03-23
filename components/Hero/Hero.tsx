'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.textSide}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Gifts that feel as <br /> special as the moment
                    </motion.h1>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Discover handcrafted hampers, bespoke frames, and floral arrangements
                        designed to make every moment unforgettable.
                    </motion.p>
                    <motion.div
                        className={styles.ctaGroup}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <Link href="/shop">
                            <motion.button
                                className={styles.ctaPrimary}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Shop the Collection
                            </motion.button>
                        </Link>
                        <motion.a
                            href="/about"
                            className={styles.ctaSecondary}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Meet the Founder
                        </motion.a>
                    </motion.div>
                </div>
                <div className={styles.imageSide}>
                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: false, margin: "-50px" }}
                    >
                        <img
                            src="/images/hero/luxury_hamper.png"
                            alt="Luxury Gift Hamper"
                            className={styles.heroImage}
                        />
                        <div className={styles.imageAccent}></div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            >
                <div className={styles.scrollLine}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
