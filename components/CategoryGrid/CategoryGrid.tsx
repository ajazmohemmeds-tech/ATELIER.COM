'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './CategoryGrid.module.css';
import { categories } from '@/data/products';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const CategoryGrid = () => {
    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.title}>Shop By Category</h2>
                <div className={styles.line}></div>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {categories.map((cat, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        <Link href={`/category/${cat.slug}`} className={styles.item}>
                            <motion.div
                                className={styles.imageWrapper}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <img src={cat.image} alt={cat.name} className={styles.image} />
                            </motion.div>
                            <h3 className={styles.catName}>{cat.name}</h3>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default CategoryGrid;
