import React from 'react';
import Image from 'next/image';
const ArtBlock = ({ artworks }: {
    artworks: { source: string; tag: string; description: string }[]
}) => {
    return (
        <div className='h-80 min-w-60 border border-stone-900 flex flex-col content-between p-3 '>
            <div className='h-full flex flex-col justify-between'>
                <div>title</div>
                <div className='flex justify-between'>
                    <div>Interactive Art</div>
                    <div>2024.10.24</div>
                </div>
            </div>
            <div
                className={`mt-3 relative m-w-60 m-h-60 h-80 bg-bg-gray overflow-hidden cursor-pointer transition-all duration-300 '}`}
            >
                {/* <Image
                src={ }
                className={`w-full h-full object-cover transition-all duration-300`}
                width={1600}
                height={900}
            /> */}
            </div>
        </div>)
}

const ArtRail = ({ artworks }: {
    artworks: { source: string; tag: string; description: string }[]
}) => {
    return (
        <div>
            <ArtBlock artworks={artworks} />
        </div>
    );
};

export default ArtRail;