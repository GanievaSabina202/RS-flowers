import React from 'react';
import HomeAdvantage from './components/HomeAdvantage/HomeAdvantage';
import HomeBanner from './components/HomeBanner';
import HomeFlowersCard from './components/HomeFlowersCard/HomeFlowersCard';
import HomeGallery from './components/HomeGallery';
import HomeSlider from './components/homeSlider';
export default function HomeContainer() {
    return (
        <>
            <HomeSlider />
            <HomeFlowersCard />
            <HomeBanner />
            <HomeAdvantage/>
            <HomeGallery/>
        </>
    )
}
