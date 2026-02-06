import { Fragment, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Search as SearchIcon, X, FileText, ChevronRight, Hash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
    const { query, setQuery, results, isSearching } = useSearch();
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);

    // Focus input when opened
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        } else {
            setQuery(''); // Clear query on close
        }
    }, [isOpen, setQuery]);

    const handleSelect = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500/75 dark:bg-gray-900/80 backdrop-blur-sm transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="mx-auto max-w-2xl transform divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                            <div className="relative">
                                <SearchIcon
                                    className="pointer-events-none absolute left-4 rtl:left-auto rtl:right-4 top-3.5 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    className="h-12 w-full border-0 bg-transparent ps-11 pe-4 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search documentation..."
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>

                            {((query === '' && results.length === 0) || isSearching) && (
                                <div className="px-6 py-14 text-center text-sm sm:px-14">
                                    {isSearching ? (
                                        <div className="flex flex-col items-center">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mb-4"></div>
                                            <p className="text-gray-500">Searching...</p>
                                        </div>
                                    ) : (
                                        <>
                                            <SearchIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                            <p className="mt-4 text-gray-500">Quickly access documents and sections with ease.</p>
                                            <div className="mt-2 flex justify-center gap-2 text-xs text-gray-400">
                                                <span className="px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Title</span>
                                                <span className="px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Categories</span>
                                                <span className="px-1.5 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">Content</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {results.length > 0 && (
                                <ul className="max-h-96 scroll-py-3 overflow-y-auto p-3">
                                    {results.map((result) => (
                                        <li key={result.item.id}>
                                            <button
                                                onClick={() => handleSelect(result.item.path)}
                                                className="group flex w-full select-none rounded-xl p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                            >
                                                <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-lg ${result.item.type === 'document' ? 'bg-primary-100 dark:bg-primary-900/30' : 'bg-secondary-100 dark:bg-secondary-900/30'
                                                    }`}>
                                                    {result.item.type === 'document' ? (
                                                        <FileText className={`h-6 w-6 ${result.item.type === 'document' ? 'text-primary-600 dark:text-primary-400' : 'text-secondary-600'}`} aria-hidden="true" />
                                                    ) : (
                                                        <Hash className="h-6 w-6 text-secondary-600 dark:text-secondary-400" aria-hidden="true" />
                                                    )}
                                                </div>
                                                <div className="ms-4 flex-auto text-start">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                        {result.item.title}
                                                    </p>
                                                    {result.matches && result.matches.length > 0 && result.matches[0].key === 'content' ? (
                                                        <p className="text-xs text-gray-500 truncate max-w-md mt-0.5">
                                                            ...{result.matches[0].value?.substring(Math.max(0, (result.matches[0].indices?.[0]?.[0] || 0) - 20), (result.matches[0].indices?.[0]?.[1] || 0) + 40)}...
                                                        </p>
                                                    ) : (
                                                        <p className="text-xs text-gray-500 truncate max-w-md mt-0.5">
                                                            {result.item.content.substring(0, 80)}...
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="ms-2 flex flex-none items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <ChevronRight className="h-5 w-5 text-gray-400 rtl:rotate-180" />
                                                </div>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {query !== '' && results.length === 0 && !isSearching && (
                                <div className="px-6 py-14 text-center text-sm sm:px-14">
                                    <X className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                                    <p className="mt-4 font-semibold text-gray-900 dark:text-white">No results found</p>
                                    <p className="mt-2 text-gray-500">We couldn't find anything matching that term. Please try again.</p>
                                </div>
                            )}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
