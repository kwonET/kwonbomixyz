import React from 'react';
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
        <div className='min-w-80 min-h-96 border-y-[1px] border-x-[0.5px] border-stone-900 flex flex-col content-between p-3 shrink-0'>
            <div className='h-full flex flex-col justify-between' >
                <div>{artwork?.title}</div>
                <div className='flex justify-between'>
                    <div>{artwork?.type}</div>
                    <div>{artwork?.date}</div>
                </div>
            </div >
            <div
                className='mt-3 relative min-h-52 bg-bg-gray overflow-hidden cursor-pointer transition-all duration-300 '
            >
                <Image
                    src={artwork.source}
                    alt={artwork.description}
                    className={`w-full h-full object-fit transition-all duration-300`}
                    width={200}
                    height={100}
                />
            </div>
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
    const duplicatedArtworks = [...artworks, ...artworks];

    return (
        <>
            <div className='block md:hidden absolute bottom-0 art-rail-container' style={{ width: 'calc(100% - 40px)' }}>
                <div className="infinite-scroll">
                    {duplicatedArtworks.map((artwork, index) => <ArtBlock key={index} artwork={artwork} />)}
                </div >
            </div >

            <div className='hidden md:block absolute bottom-0 art-rail-container' style={{ width: 'calc(100% - 250px)' }}>
                <div className="infinite-scroll">
                    {duplicatedArtworks.map((artwork, index) => <ArtBlock key={index} artwork={artwork} />)}
                </div >
            </div ></>
    );
};

export default ArtRail;