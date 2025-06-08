import React, { useEffect } from 'react';
import Image from 'next/image';
const ArtBlock = ({ artwork }: {
    artwork: {
        source: string;
        tag: string;
        description: string;
        title: string;
        date: string;
        type: string;
    }
}) => {
    return (
        <div className='min-w-80 min-h-96 border-y-[1px] border-x-[0.5px] border-stone-900 flex flex-col content-between p-3'>
            <div className='flex-grow flex flex-col justify-between mb-3' >
                <div>{artwork?.title}</div>
                <div className='flex justify-between'>
                    <div>{artwork?.type}</div>
                    <div>{artwork?.date}</div>
                </div>
            </div >
            <Image
                src={artwork.source}
                alt={artwork.description}
                className='grayscale'
                height={900}
                width={1600}
            />
        </div >)
}

const ArtRail = ({ artworks }: {
    artworks: {
        source: string;
        tag: string;
        description: string;
        title: string;
        date: string;
        type: string;
    }[]
}) => {
    useEffect(() => {
        let currentIndex = artworks.length;
        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [artworks[currentIndex], artworks[randomIndex]] = [artworks[randomIndex], artworks[currentIndex]]
        }
    }, [artworks])
    const duplicatedArtworks = [...artworks, ...artworks];

    return (
        <>
            <div className='block md:hidden absolute bottom-0 art-rail-container' style={{ width: 'calc(100% - 40px)' }}>
                <div className="infinite-scroll">
                    {artworks.map((artwork, index) => <ArtBlock key={index} artwork={artwork} />)}
                </div >
            </div >

            <div className='hidden md:block absolute bottom-0 art-rail-container' style={{ width: 'calc(100% - 250px)' }}>
                <div className="infinite-scroll">
                    {artworks.map((artwork, index) => <ArtBlock key={index} artwork={artwork} />)}
                </div >
            </div ></>
    );
};

export default ArtRail;