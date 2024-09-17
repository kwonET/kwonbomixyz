import React, { useState, useEffect } from 'react';
import Container from "../components/Container";

const ArtworkLayout = ({ artworks }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [artworksWithEmpty, setArtworksWithEmpty] = useState(artworks);

    // useEffect(() => {
    //     const totalLength = Math.floor(artworks.length * 1.4); // 40% more items
    //     const result = new Array(totalLength);
    //     let artworkIndex = 0;

    //     // Fisher-Yates shuffle algorithm with empty space insertion
    //     for (let i = totalLength - 1; i >= 0; i--) {
    //         if (Math.random() < artworks.length / (i + 1)) {
    //             result[i] = { ...artworks[artworkIndex++], isEmpty: false };
    //         } else {
    //             result[i] = { source: '', isEmpty: true };
    //         }
    //     }
    //     setArtworksWithEmpty(result);
    // }, [artworks]);

    const getImageSize = (index) => {
        return index % 4 === 0 ? 'large' : 'small';
    };

    return (
        <Container checkedMenu='Artwork'>
            <div className="p-8 bg-white min-h-screen mt-10">
                <div className="grid grid-cols-4 gap-10 max-w-6xl mx-auto">
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