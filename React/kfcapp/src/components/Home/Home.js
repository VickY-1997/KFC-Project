import React from 'react';
import Slider from './Slider';
import QuickSearch from './QuickSearch';
import WedOffer from './WedOffer';
import Offers from './Offers';
import Header from '../Header';

const Home = () => {
    return(
        <>
        <Header/>
        <Slider/>
        <QuickSearch/>
        <WedOffer/>
        <Offers/>
        
        </>
    )
}

export default Home;