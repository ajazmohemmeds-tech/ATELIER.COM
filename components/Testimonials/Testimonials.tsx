'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "The attention to detail in their gift hampers is unparalleled. It wasn't just a gift; it was a beautiful experience that my mother will cherish forever.",
        author: "Sarah J.",
        role: "Verified Gift Curator"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 1.5 }}
                    >
                        <span className={styles.label}>Kind Words</span>
                        <p className={styles.quote}>"{testimonials[0].quote}"</p>
                        <div className={styles.author}>
                            <span className={styles.name}>{testimonials[0].author}</span>
                            <span className={styles.role}>{testimonials[0].role}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
