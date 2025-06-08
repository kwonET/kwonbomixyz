import React from 'react';
import Container from './Container';
import Circle from './Artwork/Circle';
import ArtRail from './Artwork/ArtRail';
const ArtworkRailLayout = ({ artworks }: {
    artworks: {
        source: string;
        tag: string;
        description: string;
        title: string;
        date: string;
        type: string;
    }[]
}) => {
    return (
        <>
            <Container checkedMenu='Artwork'>
                <div className="bg-white">
                    <Circle />
                </div>
                <ArtRail artworks={artworks} />
            </Container>
        </>
    );
};

export default ArtworkRailLayout;