import React from 'react';
import Hero from './Hero';
import AIMotivation from './AIMotivation';
import WhyChoos from '../WhyChoos';
import ResumeTailoring from '../ResumeTailoring';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AIMotivation></AIMotivation>
            <WhyChoos></WhyChoos>
            <ResumeTailoring></ResumeTailoring>
        </div>
    );
};

export default Home;