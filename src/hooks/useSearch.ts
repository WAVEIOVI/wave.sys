import { useState, useEffect } from 'react';
import { searchContent, SearchResult } from '../utils/search';

export function useSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }

        const delayDebounceFn = setTimeout(async () => {
            setIsSearching(true);
            try {
                const hits = await searchContent(query);
                setResults(hits);
            } catch (error) {
                console.error('Search error:', error);
            } finally {
                setIsSearching(false);
            }
        }, 300);

        return () => clearTimeout(delayDebounceFn);
    }, [query]);

    return {
        query,
        setQuery,
        results,
        isSearching
    };
}
