import { useState, useEffect, RefObject } from 'react';

const useElementDimension = (ref: RefObject<HTMLElement>) => {
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        setSize({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, [ref]);

  return size;
};

export default useElementDimension;
