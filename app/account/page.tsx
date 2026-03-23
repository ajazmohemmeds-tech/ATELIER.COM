'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useUser } from '@/context/UserContext';
import styles from './AccountPage.module.css';

const AccountPage = () => {
    const { user, isLoggedIn, logout } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoggedIn) {
            router.push('/login');
        }
    }, [isLoggedIn, router]);

    if (!user) return null;

    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.profileCard}>
                    <div className={styles.profileHeader}>
                        <img src={user.avatar} alt={user.name} className={styles.avatar} />
                        <div className={styles.profileInfo}>
                            <h1>Hello, {user.name}</h1>
                            <p>{user.email || user.mobile}</p>
                        </div>
                        <button className={styles.logoutBtn} onClick={() => {
                            logout();
                            router.push('/');
                        }}>Log Out</button>
                    </div>

                    <div className={styles.sections}>
                        <div className={styles.section}>
                            <h2>Recent Orders</h2>
                            <div className={styles.orderPlaceholder}>
                                <p>You haven't placed any orders yet.</p>
                                <button className={styles.shopBtn} onClick={() => router.push('/')}>Start Gifting</button>
                            </div>
                        </div>

                        <div className={styles.section}>
                            <h2>Saved Addresses</h2>
                            <p className={styles.placeholderText}>No addresses saved yet.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default AccountPage;
