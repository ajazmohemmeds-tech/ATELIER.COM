'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useUser } from '@/context/UserContext';
import styles from './LoginPage.module.css';

const LoginPage = () => {
    const [method, setMethod] = useState<'email' | 'mobile'>('email');
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const { login, sendOTP, verifyOTP, otpSent } = useUser();
    const router = useRouter();

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value || !password) return;
        login(value, 'email');
        router.push('/account');
    };

    const handleMobileClick = () => {
        if (!value) return;
        if (!otpSent) {
            sendOTP(value);
        } else {
            const success = verifyOTP(value, otp);
            if (success) {
                router.push('/account');
            } else {
                setError('Invalid OTP. Please try 123456');
            }
        }
    };

    return (
        <main>
            <Header />
            <div className={styles.container}>
                <div className={styles.loginCard}>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Enter your details to access your profile</p>

                    <div className={styles.tabs}>
                        <button
                            className={method === 'email' ? styles.activeTab : ''}
                            onClick={() => {
                                setMethod('email');
                                setError('');
                            }}
                        >
                            Email
                        </button>
                        <button
                            className={method === 'mobile' ? styles.activeTab : ''}
                            onClick={() => {
                                setMethod('mobile');
                                setError('');
                            }}
                        >
                            Mobile
                        </button>
                    </div>

                    <div className={styles.formContainer}>
                        {method === 'email' ? (
                            <form onSubmit={handleEmailSubmit} className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className={styles.submitBtn}>
                                    Log In
                                </button>
                            </form>
                        ) : (
                            <div className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <label>Mobile Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 00000 00000"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        disabled={otpSent}
                                    />
                                </div>

                                {otpSent && (
                                    <div className={styles.inputGroup} style={{ animation: 'fadeIn 0.5s' }}>
                                        <label>Enter 6-digit OTP</label>
                                        <input
                                            type="text"
                                            placeholder="123456"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            maxLength={6}
                                        />
                                    </div>
                                )}

                                {error && <p className={styles.errorMessage}>{error}</p>}

                                <button
                                    onClick={handleMobileClick}
                                    className={styles.submitBtn}
                                >
                                    {otpSent ? 'Verify & Login' : 'Send OTP'}
                                </button>

                                {otpSent && (
                                    <p className={styles.resendText}>
                                        Didn't receive code? <span className={styles.link}>Resend OTP</span>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                    <p className={styles.footerText}>
                        Don't have an account? <span className={styles.link}>Create One</span>
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default LoginPage;
