'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email?: string;
    mobile?: string;
    avatar?: string;
}

interface UserContextType {
    user: User | null;
    isLoggedIn: boolean;
    login: (identification: string, type: 'email' | 'mobile') => void;
    logout: () => void;
    otpSent: boolean;
    sendOTP: (mobile: string) => void;
    verifyOTP: (mobile: string, otp: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [otpSent, setOtpSent] = useState(false);

    useEffect(() => {
        const savedUser = localStorage.getItem('atelier-user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (identification: string, type: 'email' | 'mobile') => {
        // Mock login logic
        const mockUser: User = {
            id: 'u1',
            name: identification.split('@')[0] || 'Member',
            [type]: identification,
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop'
        };
        setUser(mockUser);
        localStorage.setItem('atelier-user', JSON.stringify(mockUser));
    };

    const sendOTP = (mobile: string) => {
        console.log(`Sending OTP to ${mobile}...`);
        setOtpSent(true);
    };

    const verifyOTP = (mobile: string, otp: string): boolean => {
        if (otp === '123456') {
            login(mobile, 'mobile');
            setOtpSent(false);
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('atelier-user');
    };

    return (
        <UserContext.Provider value={{
            user,
            isLoggedIn: !!user,
            login,
            logout,
            otpSent,
            sendOTP,
            verifyOTP
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within a UserProvider');
    return context;
};
