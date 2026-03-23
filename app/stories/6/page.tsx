'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Story6.module.css';

const Story6 = () => {
    // Animation variants for staggered entrance with Apple-style smoothing
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Perfect vertical rhythm delay
                delayChildren: 0.4,
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Apple-style ease-out
            }
        }
    };

    const titleVariants: any = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const buttonVariants: any = {
        hidden: { opacity: 0, scale: 0.9 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <main className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <Link href="/" className={styles.backLink}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    <span>Back to Atelier</span>
                </Link>
                <div className={styles.logo}>ATELIER</div>
            </header>

            {/* Centered Content Block */}
            <motion.div
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* 1. Small Label */}
                <motion.div variants={itemVariants} className={styles.label}>
                    STORY 6
                </motion.div>

                {/* 2. Main Heading (Blur -> Sharp) */}
                <motion.h1 variants={titleVariants} className={styles.title}>
                    Get a Chance to Be Featured
                </motion.h1>

                {/* 3. Emotional Hook */}
                <motion.div variants={itemVariants} className={styles.hook}>
                    Every story deserves to be seen.
                </motion.div>

                {/* 4. Body Text */}
                <motion.div variants={itemVariants} className={styles.body}>
                    <p>From quiet surprises to once in a lifetime celebrations, the memories you create are what inspire everything we do at Atelier.</p>
                    <p>Now, it's your turn.</p>
                    <p>Share your story with us: the emotion behind your gift, the reason you chose it, the moment it became unforgettable.</p>
                    <p>Because your story could be the next one we feature.</p>
                </motion.div>

                {/* 5. Signature Lines (Soft Gold) */}
                <motion.div variants={itemVariants} className={styles.signatureLines}>
                    <span>Your memory.</span>
                    <span>Your moment.</span>
                    <span>Your story featured.</span>
                </motion.div>

                {/* 6. CTA Button */}
                <motion.div variants={buttonVariants} className={styles.buttonContainer}>
                    <Link href="mailto:naushaba5771@gmail.com" className={styles.button}>
                        Share Your Story
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default Story6;
