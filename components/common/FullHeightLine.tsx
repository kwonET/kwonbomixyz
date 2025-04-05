import React, { useState, useEffect } from 'react';

const FullHeightLine = () => {
  const [height, setHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );
      setHeight(`${scrollHeight}px`);
    };

    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('load', updateHeight);
    };
  }, []);

  return (
    <div
      className="static left-0 top-0 w-px bg-black"
      style={{ height }}
    ></div>
  );
};

export default FullHeightLine;