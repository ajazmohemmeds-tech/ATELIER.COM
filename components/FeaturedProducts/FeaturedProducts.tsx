'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeaturedProducts.module.css';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '@/data/products';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

const FeaturedProducts = () => {
    const featured = products.filter(p => p.featured);

    return (
        <section className="container" style={{ padding: '80px 0' }}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.title}>Featured Creations</h2>
                <p className={styles.subtitle}>Our most loved hand-picked gifts</p>
            </motion.div>

            <motion.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {featured.slice(0, 5).map(product => (
                    <motion.div key={product.id} variants={itemVariants}>
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default FeaturedProducts;
