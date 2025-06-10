import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./common/Container";

interface DraftItem {
  id: number;
  source: string;
  title: string;
  description: string;
  link: string;
}

const DraftLayout = ({ drafts }: { drafts: DraftItem[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md 브레이크포인트 기준
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // 모바일이 아닐 때만 AOS 초기화
    if (!isMobile) {
      AOS.init({
        duration: 800,
        easing: "ease-in-sine",
        once: false,
        offset: 100,
        delay: 0,
        mirror: true,
        anchorPlacement: "top-bottom",
      });
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [isMobile]);

  return (
    <Container checkedMenu="Draft">
      <div className="p-4 md:p-20 bg-white min-h-screen mt-2 pt-2 md:pt-[200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {drafts.map((draft, index) => (
            <Link href={draft.link} key={draft.id}>
              <div
                className="bg-white border-[0.5px] border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos={!isMobile ? "fade-up" : ""}
                data-aos-delay={!isMobile ? index * 100 : 0}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={draft.source}
                    alt={draft.title}
                    width={1600}
                    height={900}
                    className={`w-full h-full object-cover transition-all duration-300 aspect-[4/3] 

                    `}
                  />
                </div>
                <div className="p-3 md:p-4">
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-1 font-gothic2 tracking-tight">
                    {draft.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-gothic1">
                    {draft.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DraftLayout;
