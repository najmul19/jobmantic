import React from 'react';
import Hero from './Hero';
import AIMotivation from './AIMotivation';
import WhyChoos from '../WhyChoos';
import ResumeTailoring from '../ResumeTailoring';
import Features from '../Feature';
import JobMatch from '../JobMatch';
import CareerMonitor from '../CareerMonitor';
import ResumeBuilder from '../ResumeBuilder';
import Revolutionary from '../Revolutionary';
import ContentGen from '../ContentGen';
import ATSOptimizer from '../ATSOptimizer';
import ResumeManager from '../ResumeManager';
import HowToWorks from '../HowToWorks';
import WhyChooseResumeBuilder from '../WhyChooseResumeBuilder';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AIMotivation></AIMotivation>
            <WhyChoos></WhyChoos>
            <ResumeTailoring></ResumeTailoring>
            <JobMatch></JobMatch>
            <CareerMonitor></CareerMonitor>
            <Features></Features>   
            <ResumeBuilder></ResumeBuilder> 
            <Revolutionary></Revolutionary>
            <ContentGen></ContentGen>   
            <ATSOptimizer></ATSOptimizer>   
            <ResumeManager></ResumeManager>
            <HowToWorks></HowToWorks>
            <WhyChooseResumeBuilder></WhyChooseResumeBuilder>
        </div>
    );
};

export default Home;