import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('user');
        setUsername(storedUsername || '');
    }, []);

    // Parse the user object from localStorage
    const userObj = (() => {
        try {
            return JSON.parse(localStorage.getItem('user')) || {};
        } catch {
            return {};
        }
    })();

    return (
        <div className="min-h-screen bg-white dark:bg-[#1A1A1A] pt-20 flex flex-col items-center">
            <header className="w-full bg-[#1a202c] text-white py-6 px-8 shadow-md flex items-center justify-between">
                <h1 className="m-0 font-semibold tracking-wide text-2xl">Dashboard</h1>
                {Object.values(userObj).length > 0 && (
                    <div className="flex gap-4 text-base">
                        {Object.values(userObj).map((value, idx) => (
                            <span key={idx} className="bg-[#23272f] text-[#f5f7fa] px-3 py-1 rounded-lg">
                                {value}
                            </span>
                        ))}
                    </div>
                )}
            </header>
            
        </div>
    );
};

export default Dashboard;