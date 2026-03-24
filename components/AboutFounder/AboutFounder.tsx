import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutFounder.module.css';

const AboutFounder = () => {
    return (
        <section className={styles.aboutFounder}>
            <div className={`container ${styles.container}`}>

                {/* Image Side (40%) */}
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/images/about/founder.jpg"
                        alt="Naushaba, Founder of Atelier"
                        className={styles.image}
                        loading="lazy"
                    />
                </motion.div>

                {/* Content Side (60%) */}
                <motion.div
                    className={styles.contentWrapper}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className={styles.label}>ABOUT THE FOUNDER</div>

                    <h2 className={styles.title}>
                        <span className={styles.name}>Naushaba</span>
                        <span className={styles.role}>Founder, Atelier</span>
                    </h2>

                    <div className={styles.story}>
                        <p>Hi, I&apos;m Naushaba, the founder of Atelier.</p>

                        <p>Atelier began in 2024 as something very personal to me — a small Instagram page where I poured my time, effort, and creativity into making meaningful gifts. What started as a simple side hustle slowly grew into something much more, as I realized how deeply I loved creating pieces that could make people feel special.</p>

                        <p>For me, gifting has never been just about giving something beautiful. It&apos;s about the thought, the effort, and the emotion behind it. I found joy in investing my time and care into every piece, and in return, seeing the happiness it brought to others became my biggest inspiration.</p>

                        <p>That feeling is what built Atelier.</p>

                        <p>At its core, my brand is about making people feel seen, valued, and remembered. Every creation is designed with intention — whether it is something I craft by hand or something I thoughtfully curate with the help of trusted partners. What matters to me is that each piece carries meaning.</p>

                        <p>I truly believe that the smallest details can create the biggest emotions.</p>
                    </div>

                    <div className={styles.signatureWrapper}>
                        <span className={styles.signature}>— Naushaba</span>
                    </div>

                    <blockquote className={styles.quote}>
                        &quot;Every piece I create carries a story — one that is meant to be felt, remembered, and cherished.&quot;
                    </blockquote>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutFounder;
