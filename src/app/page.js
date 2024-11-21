import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

const page = async () => {
    const FetchData = await fetch(
        'https://api.shope.com.bd/api/v1/public/hero-categories',
    );
    const FetchDataResponse = await FetchData.json();

    return (
        <div className="w-100%">
            <NavBar />
            <Hero data={FetchDataResponse} />
        </div>
    );
};

export default page;
