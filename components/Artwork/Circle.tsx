import React, { useEffect, useState } from 'react';
import { artworkTitle } from 'data/artworks'
const Circle = () => {
    const [radians, setRadians] = useState<number[]>();
    const degreeToRadian = (degree: number) => {
        const pi = Math.PI;
        return degree * (pi / 180);
    }
    useEffect(() => {
        let arr: number[] = [];
        artworkTitle.forEach((_, index) => {
            arr.push(degreeToRadian(360 / (artworkTitle.length) * (index)));
        });
        setRadians(arr);
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            setRadians(prevRadians => {
                const newRadians = [...prevRadians];
                for (let i = 0; i < newRadians.length; i++) {
                    const nextIndex = (i + 1) % newRadians.length;
                    newRadians[i] = prevRadians[nextIndex];
                }
                return newRadians;
            })
        }, 2000)
        return () => clearInterval(interval);
    }, [])
    return (
        <div className='relative w-36 h-36 bg-font-dark rounded-full transition-all duration'>
            {radians?.map((radian, index) => (
                <div
                    key={index}
                    className='absolute bg-white'
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