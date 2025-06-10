import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Circle from "./Artwork/Circle";
import Container from "./common/Container";

const ArtworkLayout = ({
  artworks,
}: {
  artworks: { source: string; tag: string; description: string }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [artworksWithEmpty, setArtworksWithEmpty] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      once: false,
      offset: 100,
      delay: 0,
      mirror: true,
      anchorPlacement: "top-bottom",
    });

    if (!Array.isArray(artworks) || artworks.length === 0) {
      console.error("Invalid or empty artworks array:", artworks);
      return;
    }

    const validArtworks = artworks.filter((item) => item !== undefined);

    // Fisher-Yates Shuffle
    const totalLength = Math.floor(validArtworks.length * 1.4); // 40% more items
    let result = new Array(totalLength);
    for (let i = 0; i < validArtworks.length; i++) {
      result[i] = { ...artworks[i], isEmpty: false };
    }
    for (let i = validArtworks.length; i < totalLength; i++) {
      result.push({ source: "", isEmpty: true });
    }

    const validResult = result.filter((item) => item !== undefined);
    let currentIndex = totalLength;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [validResult[currentIndex], validResult[randomIndex]] = [
        validResult[randomIndex],
        validResult[currentIndex],
      ];
    }
    setArtworksWithEmpty(validResult);
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, [artworks]);

  useEffect(() => {
    // Add event listeners for various events that might need a refresh
    const handleRefresh = () => {
      AOS.refresh();
    };

    window.addEventListener("resize", handleRefresh);
    window.addEventListener("scroll", handleRefresh);
    window.addEventListener("orientationchange", handleRefresh);

    return () => {
      window.removeEventListener("resize", handleRefresh);
      window.removeEventListener("scroll", handleRefresh);
      window.removeEventListener("orientationchange", handleRefresh);
    };
  }, []);

  const getImageSize = (index: number) => {
    return index % 3 === 0 ? "large" : "small";
  };

  return (
    <Container checkedMenu="Artwork">
      <div className="p-20 bg-white min-h-screen mt-6 pt-2 md:pt-[200px] ">
        <Circle />
        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto ">
          {artworksWithEmpty.map((item, index) =>
            item.isEmpty ? (
              <div
                key={index}
                className={`${
                  getImageSize(index) === "large" ? "col-span-1 row-span-2" : ""
                } `}
              />
            ) : (
              <div
                key={index}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300
                                    ${
                                      getImageSize(index) === "large"
                                        ? "col-span-1 row-span-2"
                                        : ""
                                    }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={item.source}
                  alt={`Artwork ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-300
                                        ${
                                          hoveredIndex === index
                                            ? ""
                                            : "grayscale"
                                        }`}
                  width={1600}
                  height={900}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
};

export default ArtworkLayout;
