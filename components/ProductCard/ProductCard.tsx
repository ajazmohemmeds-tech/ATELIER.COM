'use client';

import React from 'react';
import styles from './ProductCard.module.css';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={product.image} alt={product.name} className={styles.image} />
                <button className={styles.quickAdd} onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                }}>Quick Add</button>
            </div>
            <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>₹{product.price.toLocaleString('en-IN')}</p>
            </div>
        </div>
    );
};

export default ProductCard;
