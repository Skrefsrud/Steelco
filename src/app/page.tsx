'use client';

import SteelcoSection from '@/components/steelco-seciton';

import CallToActionSection from '../components/CallToActionSection';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function Page() {
    const scrollY = useScrollPosition();

    return (
        <div className=''>
            <HeroSection scrollY={scrollY} />
            <SteelcoSection />
        </div>
    );
}
