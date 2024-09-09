import React from 'react';
import Image from 'next/image'

const Preview = () => {
    return (
        <div>
            <Image
                src="/IMG_2101.jpg"
                width={618}
                height={418}
                alt="thumbnail"
            />
        </div>
    );
};

export default Preview;