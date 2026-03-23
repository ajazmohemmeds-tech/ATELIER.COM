'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PromoTicker.module.css';

const PromoTicker = () => {
    const tickerText = "For exclusive pieces & enquiries, reach us on WhatsApp or Instagram.";
    const [dust, setDust] = useState<{ id: number; x: number; y: number; scale: number; dur: number; del: number }[]>([]);

    useEffect(() => {
        setDust(Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: Math.random() * 0.4 + 0.3,
            dur: Math.random() * 10 + 15,
            del: Math.random() * 5
        })));
    }, []);

    const TickerContent = () => (
        <div className={styles.tickerGroup}>
            {/* The Velvet Banner */}
            <motion.div
                className={styles.maroonBanner}
                animate={{ scaleX: [1, 1.002, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
                {/* Light reflection layers */}
                <div className={styles.fabricLightGlide} />

                <span className={styles.tickerText}>
                    {tickerText} <span className={styles.shimmerEffect}>{tickerText}</span>
                </span>
                <span className={styles.tickerText}>
                    {tickerText} <span className={styles.shimmerEffect}>{tickerText}</span>
                </span>
            </motion.div>
        </div>
    );

    return (
        <section className={styles.bannerWrapper}>
            {/* Dust Particles Overlay */}
            <div className={styles.dustContainer}>
                {dust.map((p) => (
                    <motion.div
                        key={p.id}
                        className={styles.dustParticle}
                        style={{ left: `${p.x}%`, top: `${p.y}%`, scale: p.scale }}
                        animate={{
                            y: ["-10%", "-40%", "-10%"],
                            x: ["0%", "20%", "0%"],
                            opacity: [0, 0.6, 0]
                        }}
                        transition={{ repeat: Infinity, duration: p.dur, delay: p.del, ease: "linear" }}
                    />
                ))}
            </div>

            <motion.div
                className={styles.scrollingTrack}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 30, // 30 second seamless loop
                    ease: "linear"
                }}
            >
                <TickerContent />
                <TickerContent />
            </motion.div>
        </section>
    );
};
export default PromoTicker;
