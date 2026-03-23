'use client';

import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import AboutFounder from '@/components/AboutFounder/AboutFounder';
import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <main style={{ background: 'var(--cream-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <motion.div
                style={{ flex: 1, paddingTop: '100px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '0 4rem' }}>
                    <h1 style={{ fontFamily: 'var(--font-playfair)', fontSize: '3rem', color: 'var(--forest-green)', marginBottom: '2rem', textAlign: 'center' }}>Our Story</h1>
                </div>
                <AboutFounder />
            </motion.div>
            <Footer />
        </main>
    );
}
