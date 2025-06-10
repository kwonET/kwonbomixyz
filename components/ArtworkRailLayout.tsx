import ArtRail from "./Artwork/ArtRail";
import Circle from "./Artwork/Circle";
import Container from "./common/Container";
const ArtworkRailLayout = ({
  artworks,
}: {
  artworks: {
    source: string;
    tag: string;
    description: string;
    title: string;
    date: string;
    type: string;
  }[];
}) => {
  return (
    <>
      <Container checkedMenu="Artwork">
        <div className="bg-white">
          <Circle />
        </div>
        <ArtRail artworks={artworks} />
      </Container>
    </>
  );
};

export default ArtworkRailLayout;
