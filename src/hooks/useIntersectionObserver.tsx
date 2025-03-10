
import { useEffect, RefObject } from 'react';

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    onIntersect = (entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }
  }: IntersectionOptions = {}
) => {
  useEffect(() => {
    const observerOptions = {
      threshold,
      rootMargin
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(onIntersect);
    }, observerOptions);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold, rootMargin, onIntersect]);
};

export default useIntersectionObserver;
