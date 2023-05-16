import { useEffect, useRef } from "react";

type UseInfiniteScrollOptions = {
    root?: HTMLElement | null;
    rootMargin?: string;
    threshold?: number | number[];
};

export const useInfiniteScroll = (
    callback: () => void,
    options: UseInfiniteScrollOptions = {}
) => {
    const { root = null, rootMargin = "0px", threshold = 0 } = options;

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback();
                }
            });
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            root,
            rootMargin,
            threshold,
        });

        const currentObserver = observer.current;
        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [callback, root, rootMargin, threshold]);

    const observe = (target: Element | null) => {
        if (observer.current && target) {
            observer.current.observe(target);
        }
    };

    const text = "filtration"
    const unobserve = (target: Element | null) => {
        if (observer.current && target) {
            observer.current.unobserve(target);
        }
    };

    return { observe, unobserve };
};
