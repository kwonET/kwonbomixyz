import React from 'react';
import { artworkSources } from '@/data/artworks';
import ArtworkLayout from 'components/ArtworkLayout';
import ArtworkRailLayout from 'components/ArtworkRailLayout';
const Artwork = () => {
    return (
        <>
            <ArtworkRailLayout artworks={artworkSources} />
        </>
    );
};

export default Artwork;