import React from 'react';
import artworkSources from 'data/artworks';
import ArtworkLayout from 'components/ArtworkLayout';

const artwork = () => {
    return (
        <ArtworkLayout artworks={artworkSources} />
    );
};

export default artwork;