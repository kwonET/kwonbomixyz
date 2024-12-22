import React from 'react';
import artworkSources from 'data/artworks';
import ArtworkLayout from 'components/ArtworkLayout';

const Artwork = () => {
    return (
        <ArtworkLayout artworks={artworkSources} />
    );
};

export default Artwork;