import React, { useState, useEffect } from 'react';
import Container from "../components/Container";

const ArtworkLayout = ({ artworks }) => {
    console.log('origin:', artworks);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [artworksWithEmpty, setArtworksWithEmpty] = useState(artworks);

    useEffect(() => {
        if (!Array.isArray(artworks) || artworks.length === 0) {
            console.error('Invalid or empty artworks array:', artworks);
            return;
        }

        const validArtworks = artworks.filter(item => item !== undefined);

        // Fisher-Yates Shuffle
        const totalLength = Math.floor(validArtworks.length * 1.4); // 40% more items
        let result = new Array(totalLength)
        for (let i = 0; i < validArtworks.length; i++) {
            result[i] = { ...artworks[i], isEmpty: false }
        }
        for (let i = validArtworks.length; i < totalLength; i++) {
            result.push({ source: '', isEmpty: true })
        }

        const validResult = result.filter(item => item !== undefined);
        let currentIndex = totalLength;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [validResult[currentIndex], validResult[randomIndex]] = [validResult[randomIndex], validResult[currentIndex]]
        }
        setArtworksWithEmpty(validResult);
    }, [artworks]);

    const getImageSize = (index) => {
        return index % 4 === 0 ? 'large' : 'small';
    };

    return (
        <Container checkedMenu='Artwork'>
            <div className="p-20 bg-white min-h-screen mt-10">
                <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {artworksWithEmpty.map((item, index) => (
                        item.isEmpty ? (
                            <div key={index} className={`${getImageSize(index) === 'large' ? 'col-span-1 row-span-2' : ''}`} />
                        ) : (
                            <div
                                key={index}
                                className={`relative overflow-hidden cursor-pointer transition-all duration-300
                                    ${getImageSize(index) === 'large' ? 'col-span-1 row-span-2' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img
                                    src={item.source}
                                    alt={`Artwork ${index + 1}`}
                                    className={`w-full h-full object-cover transition-all duration-300
                                        ${hoveredIndex === index ? '' : 'grayscale'}`}
                                />
                            </div>
                        )
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ArtworkLayout;