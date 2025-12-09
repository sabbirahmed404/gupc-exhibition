'use client';

import { useEffect, useState } from 'react';

export default function VisitorCountPage() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/visitor-count', { cache: 'no-store' })
            .then((res) => res.json())
            .then((data) => setCount(data.count))
            .catch((err) => console.error('Failed to fetch count:', err));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-ocean-50">
            <h1 className="text-4xl font-bold mb-4 font-sans">Total Unique Visitors</h1>
            {count !== null ? (
                <span className="text-6xl font-mono text-accent animate-pulse">
                    {count.toLocaleString()}
                </span>
            ) : (
                <span className="text-xl animate-pulse">Loading...</span>
            )}
        </div>
    );
}
