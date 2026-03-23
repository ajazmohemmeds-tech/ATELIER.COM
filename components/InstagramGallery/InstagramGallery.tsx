'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './InstagramGallery.module.css';

const stories = [
    { src: '/images/stories/story1.jpg', href: '/stories/1' },
    { src: '/images/stories/story2.JPG', href: '/stories/2' },
    { src: '/images/stories/story3.JPG', href: '/stories/3' },
    { src: '/images/stories/story4.JPG', href: '/stories/4' },
    { src: '/images/stories/story5.JPG', href: '/stories/5' },
    { src: 'https://images.unsplash.com/photo-1543157145-f78c636d023d?q=80&w=800&auto=format&fit=crop', href: '/stories/6' }
];

const InstagramGallery = () => {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Atelier Stories</h2>
                    <a href="https://www.instagram.com/craft.voyage?igsh=MWk5OHo1ZjN4MHgzMw==" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <p className={styles.subtitle}>Follow our journey @craft.voyage</p>
                    </a>
                </div>
                <div className={styles.grid}>
                    {stories.map((story, i) => {
                        const content = (
                            <motion.div
                                key={i}
                                className={styles.imageWrapper}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <img src={story.src} alt={`Atelier Story ${i + 1}`} className={styles.image} />
                                <div className={styles.overlay}>
                                    <span>View Story</span>
                                </div>
                            </motion.div>
                        );

                        return story.href !== '#' ? (
                            <Link href={story.href} key={i} style={{ display: 'block' }}>
                                {content}
                            </Link>
                        ) : (
                            <div key={i}>{content}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default InstagramGallery;
