'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import { motion } from 'framer-motion';

const ShopPage = () => {
    return (
        <main style={{ background: 'var(--cream-bg)', minHeight: '100vh' }}>
            <Header />

            <div style={{ paddingTop: '160px', paddingBottom: '60px' }}>
                <motion.div
                    className="container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: '3.5rem',
                        textAlign: 'center',
                        color: 'var(--forest-green)',
                        marginBottom: '1rem'
                    }}>
                        Shop by Collection
                    </h1>
                    <p style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto 4rem',
                        opacity: 0.8,
                        fontSize: '1.1rem'
                    }}>
                        Explore our curated selection of handcrafted gifts, each designed with love and artisanal precision.
                    </p>
                </motion.div>

                <CategoryGrid />
            </div>

            <Footer />
        </main>
    );
};

export default ShopPage;
