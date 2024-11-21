import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const page = async () => {
    const value = await fetch(
        'https://api.shope.com.bd/api/v1/public/hero-categories',
    );
    const valueResponse = await value.json();

    return (
        <div className="w-100%">
            <NavBar />
            <Hero value={valueResponse} />
        </div>
    );
};

export default page;
