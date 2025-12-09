'use client';

import { useEffect, useRef } from 'react';

export default function VisitorTracker() {
    const hasRun = useRef(false);

    useEffect(() => {
        // Prevent double execution in React Strict Mode
        if (hasRun.current) return;
        hasRun.current = true;

        // Check if the user has already visited
        const hasVisited = localStorage.getItem('hasVisited');

        if (!hasVisited) {
            // If not, increment the count on the server
            fetch('/api/visitor-count', { method: 'POST' })
                .then(() => {
                    // Mark as visited locally
                    localStorage.setItem('hasVisited', 'true');
                })
                .catch((err) => console.error('Failed to count visitor:', err));
        }
    }, []);

    return null; // This component renders nothing
}
