import React from 'react';
import Container from './Container';
import Circle from './Artwork/Circle';
import ArtRail from './Artwork/ArtRail';
const ArtworkRailLayout = ({ artworks }: {
    artworks: { source: string; tag: string; description: string }[]
}) => {
    return (
        <>
            <Container checkedMenu='Artwork'>
                <div className=" bg-white min-h-screen md:pt-[200px] ">
                    <Circle />
                    <ArtRail artworks={artworks} />
                </div>
            </Container>
        </>
    );
};

export default ArtworkRailLayout;