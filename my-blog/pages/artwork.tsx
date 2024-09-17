import React from 'react';
import Container from "../components/Container";
import Preview from 'components/Preview';
import artworkSources from 'data/artworks';
const artwork = () => {
    return (
        <Container checkedMenu='Artwork'>
            <div className={`h-[750px] mt-20 flex flex-col`}>
                {artworkSources.map((artwork, id) => (
                    <Preview imgSource={artwork.source} key={id} />
                ))}
            </div>
        </Container>
    );
};

export default artwork;