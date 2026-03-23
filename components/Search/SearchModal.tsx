'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import styles from './SearchModal.module.css';
import { products } from '@/data/products';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setQuery('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setFilteredProducts([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) ||
            product.category.toLowerCase().includes(lowerQuery) ||
            product.description.toLowerCase().includes(lowerQuery)
        );
        setFilteredProducts(filtered);
    }, [query]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={styles.header}>
                        <button className={styles.closeBtn} onClick={onClose} aria-label="Close search">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className={styles.searchContainer}>
                        <div className={styles.inputWrapper}>
                            <input
                                ref={inputRef}
                                type="text"
                                className={styles.searchInput}
                                placeholder="Search our creations..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                        </div>

                        <div className={styles.resultsArea}>
                            {query && (
                                <p className={styles.resultCount}>
                                    {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'} found
                                </p>
                            )}

                            <div className={styles.resultsGrid}>
                                {filteredProducts.map(product => (
                                    <Link
                                        key={product.id}
                                        href={`/category/${product.categorySlug}`}
                                        className={styles.resultItem}
                                        onClick={onClose}
                                    >
                                        <div className={styles.imageWrapper}>
                                            <img src={product.image} alt={product.name} className={styles.resultImage} />
                                        </div>
                                        <div className={styles.resultInfo}>
                                            <span className={styles.resultCategory}>{product.category}</span>
                                            <h4>{product.name}</h4>
                                            <p className={styles.resultPrice}>₹{product.price.toLocaleString('en-IN')}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {query && filteredProducts.length === 0 && (
                                <div className={styles.emptyState}>
                                    <p>No products match your search. Try something else?</p>
                                </div>
                            )}

                            {!query && (
                                <div className={styles.emptyState}>
                                    <p>Start typing to search for frames, hampers, and lifestyle gifts...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;
