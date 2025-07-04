import { artworkTitle } from "data/artworks";
import { useEffect, useState } from "react";
const Circle = () => {
  const [radians, setRadians] = useState<number[]>();
  const degreeToRadian = (degree: number) => {
    const pi = Math.PI;
    return degree * (pi / 180);
  };
  useEffect(() => {
    let arr: number[] = [];
    artworkTitle.forEach((_, index) => {
      arr.push(degreeToRadian((360 / artworkTitle.length) * index));
    });
    setRadians(arr);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setRadians((prevRadians) => {
        const newRadians = [...prevRadians];
        for (let i = 0; i < newRadians.length; i++) {
          const nextIndex = (i + 1) % newRadians.length;
          newRadians[i] = prevRadians[nextIndex];
        }
        return newRadians;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative top-56 w-36 h-36 rounded-full border border-font-dark bg-bg-light transition-all duration mx-3 md:mx-10 md:my-3">
      {radians?.map((radian, index) => (
        <div
          key={index}
          className="absolute bg-white text-small"
          style={{
            left: `calc(50% + ${Math.cos(radian) * 64}px)`,
            top: `calc(50% + ${Math.sin(radian) * 64}px)`,
            transform: `translate(-50%, -50%)`,
          }}
        >
          {artworkTitle[index]}
        </div>
      ))}
    </div>
  );
};

export default Circle;
