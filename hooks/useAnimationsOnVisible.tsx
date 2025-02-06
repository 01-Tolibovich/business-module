import { useState, useRef, useEffect } from "react";

export const useAnimationsOnVisible = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const index = refs.current.indexOf(target);

        if (entry.isIntersecting && !visibleIndexes.has(index)) {
          setVisibleIndexes((prev) => new Set(prev.add(index)));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleIndexes]);

  return {
    visibleIndexes,
    refs,
  };
};
