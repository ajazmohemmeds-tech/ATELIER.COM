'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './WhyChooseUs.module.css';

const features = [
    {
        icon: '⚜',
        title: 'Artisanal Craftsmanship',
        description: 'Every gift is hand-finished by master artisans with a meticulous eye for detail and quality.'
    },
    {
        icon: '🕊',
        title: 'Emotional Storytelling',
        description: 'We help you express what words cannot, creating moments that resonate and linger in the heart.'
    },
    {
        icon: '✨',
        title: 'Bespoke Experience',
        description: 'Tailored to your unique vision, our curated collections are as unique as the people you love.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className={styles.feature}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                        >
                            <div className={styles.icon}>{feature.icon}</div>
                            <h3 className={styles.title}>{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
