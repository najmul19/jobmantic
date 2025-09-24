import React from 'react';
import Hero from './Hero';
import AIMotivation from './AIMotivation';
import WhyChoos from '../WhyChoos';
import ResumeTailoring from '../ResumeTailoring';
import Features from '../Feature';
import JobMatch from '../JobMatch';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AIMotivation></AIMotivation>
            <WhyChoos></WhyChoos>
            <ResumeTailoring></ResumeTailoring>
            <JobMatch></JobMatch>
            <Features></Features>
            
        </div>
    );
};

export default Home;