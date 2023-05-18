// adapted from https://github.com/thebuilder/react-intersection-observer/blob/d35365990136bfbc99ce112270e5ff232cf45f7f/src/test-helper.ts
import {vi} from "vitest";

const observerMap = new Map();
const instanceMap = new Map();

beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.IntersectionObserver = vi.fn((cb, options = {}) => {
        const instance = {
            thresholds: Array.isArray(options.threshold)
                ? options.threshold
                : [options.threshold],
            root: options.root,
            rootMargin: options.rootMargin,
            observe: vi.fn((element: Element) => {
                instanceMap.set(element, instance);
                observerMap.set(element, cb);
            }),
            unobserve: vi.fn((element: Element) => {
                instanceMap.delete(element);
                observerMap.delete(element);
            }),
            disconnect: vi.fn(),
        };
        return instance;
    });
});

afterEach(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.IntersectionObserver.mockReset();
    instanceMap.clear();
    observerMap.clear();
});

export function intersect(element: Element, isIntersecting: boolean) {
    const cb = observerMap.get(element);
    if (cb) {
        cb([
            {
                isIntersecting,
                target: element,
                intersectionRatio: isIntersecting ? 1 : -1,
            },
        ]);
    }
}

export function getObserverOf(element: Element): IntersectionObserver {
    return instanceMap.get(element);
}