'use client';

import { useCallback, useState } from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

type ReadMoreProps = {
    text: string;
    maxLength?: number;
};

const FullText = ({ text }: { text: string }) => (
    <>
        {text.split('\n\n').map((paragraph, index) => (
            <p key={index} className='mb-4 last:mb-0'>
                {paragraph.trim()}
            </p>
        ))}
    </>
);

export default function ReadMore({ text, maxLength = 250 }: ReadMoreProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)');

    const toggleReadMore = useCallback(() => {
        setIsExpanded((prev) => !prev);
    }, []);

    const truncatedText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

    if (!isMobile) {
        return (
            <div className='space-y-4 text-lg leading-relaxed font-medium text-[#58565b]'>
                <FullText text={text} />
            </div>
        );
    }

    return (
        <div>
            <div className='text-lg leading-relaxed font-medium text-[#58565b]'>
                {isExpanded ? <FullText text={text} /> : <p>{truncatedText}</p>}
            </div>
            {text.length > maxLength && (
                <button
                    onClick={toggleReadMore}
                    className='mt-4 text-lg font-semibold text-[#f3661a] hover:underline focus:outline-none'>
                    {isExpanded ? 'Les mindre...' : 'Les mer...'}
                </button>
            )}
        </div>
    );
}
