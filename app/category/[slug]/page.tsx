'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products, categories } from '@/data/products';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
    const params = useParams();
    const slug = params.slug as string;

    const category = categories.find(c => c.slug === slug);
    const categoryProducts = products.filter(p => p.categorySlug === slug);

    if (!category) {
        return (
            <main>
                <Header />
                <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                    <h1>Category Not Found</h1>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main>
            <Header />
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{category.name}</h1>
                    <p className={styles.subtitle}>Curated selection of premium {category.name.toLowerCase()}</p>
                </div>
            </div>

            <section className="container" style={{ padding: '60px 0' }}>
                <div className={styles.grid}>
                    {categoryProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                {categoryProducts.length === 0 && (
                    <p style={{ textAlign: 'center', opacity: 0.5 }}>No products found in this category.</p>
                )}
            </section>

            <Footer />
        </main>
    );
};

export default CategoryPage;
