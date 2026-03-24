'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import PromoTicker from '@/components/PromoTicker/PromoTicker';

import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import CategoryGrid from '@/components/CategoryGrid/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import Testimonials from '@/components/Testimonials/Testimonials';
import InstagramGallery from '@/components/InstagramGallery/InstagramGallery';
import Footer from '@/components/Footer/Footer';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-100px" },
    transition: { duration: 0.8 }
};

export default function Home() {
    return (
        <main style={{ background: 'var(--cream-bg)' }}>
            <Header />
            <Hero />
            <PromoTicker />

            {/* Why Choose Us */}
            <motion.section {...fadeInUp}>
                <WhyChooseUs />
            </motion.section>

            {/* Featured Collections */}
            <motion.section
                {...fadeInUp}
                style={{ background: 'var(--white)', padding: 'var(--section-padding) 0' }}
            >
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: 'var(--h2-size)', marginBottom: '3rem' }}>Featured Collections</h2>
                    <CategoryGrid />
                </div>
            </motion.section>

            {/* Best Sellers */}
            <motion.section
                {...fadeInUp}
                style={{ background: 'var(--cream-bg)', padding: 'var(--section-padding) 0' }}
            >
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: 'var(--h2-size)', marginBottom: '3rem' }}>Best Sellers</h2>
                    <FeaturedProducts />
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section {...fadeInUp}>
                <Testimonials />
            </motion.section>

            {/* Instagram Gallery */}
            <motion.section {...fadeInUp}>
                <InstagramGallery />
            </motion.section>

            {/* Trust Badges (Keeping but themed) */}
            <motion.section
                {...fadeInUp}
                style={{ background: 'var(--forest-green)', padding: 'var(--section-padding) 0', color: 'var(--cream-bg)' }}
            >
                <div className="container trust-badges-grid">
                    {[
                        { icon: '⚜', title: 'Secure Payment', desc: 'Sophisticated encryption for your peace of mind and absolute security.' },
                        { icon: '📯', title: 'Express Delivery', desc: 'Handled with care, delivered with precision to your doorstep.' },
                        { icon: '🎖', title: 'Artisanal Quality', desc: 'Exquisitely crafted by master artisans with unmatched attention to detail.' }
                    ].map((badge, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 * i, duration: 0.8 }}
                        >
                            <div style={{ color: 'var(--gold-accent)', fontSize: '3rem', marginBottom: '2rem' }}>{badge.icon}</div>
                            <h4 style={{ textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', fontStyle: 'italic', fontFamily: 'var(--font-playfair)', color: 'var(--gold-accent)', fontSize: '1.25rem' }}>{badge.title}</h4>
                            <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: '1.8', maxWidth: '300px', margin: '0 auto' }}>{badge.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <Footer />
        </main>
    );
}
