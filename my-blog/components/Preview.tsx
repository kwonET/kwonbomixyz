import React from 'react';
import Image from 'next/image'

const Preview = ({ imgSource }) => {
    return (
        <div>
            <Image
                src={imgSource}
                width={318}
                height={118}
                alt="thumbnail"
            />
        </div>
    );
};

export default Preview;