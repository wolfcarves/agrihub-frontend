import { Button } from "@components/ui/button";
import ContentWhatWeDo from "@components/user/landing/member/ContentWhatWeDo";
import Carousel from "@components/user/landing/member/carousel/Carousel";
import withAuthGuard from "@higher-order/account/withAuthGuard";
import React, { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const ScrollToSectionButton: React.FC<{
  targetRef: React.RefObject<HTMLDivElement>;
}> = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(!entry.isIntersecting);
      });
    });

    observer.observe(targetRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  const scrollToSection = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="secondary"
          className="z-50 text-xs p-2 hover:text-primary text-primary flex-col h-auto shadow-xl"
          onClick={scrollToSection}
        >
          <FiChevronDown size={24} />
        </Button>
      )}
    </>
  );
};

const ScrollToTopButton: React.FC<{
  targetRef: React.RefObject<HTMLDivElement>;
}> = ({ targetRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );

    observer.observe(targetRef.current!);

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Button
          variant="secondary"
          className="z-50 text-xs p-2 hover:text-primary text-primary flex-col h-auto fixed bottom-8 right-8"
          onClick={scrollToTop}
        >
          <FiChevronUp size={24} />
        </Button>
      )}
    </>
  );
};

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setMarginTop(-40);
        } else {
          setMarginTop(0);
        }
      });
    });

    observer.observe(sectionRef.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>AgriHub | Welcome</title>
      </Helmet>
      <Carousel />
      <div className="bottom-8 sm:left-auto left-[46%] right-auto sm:right-8 fixed">
        <ScrollToSectionButton targetRef={sectionRef} />
      </div>
      <div ref={sectionRef} style={{ marginTop }}>
        <ContentWhatWeDo />;
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default withAuthGuard(Home, [
  "guest",
  "member",
  "admin",
  "farm_head",
  "farmer",
  "asst_admin"
]);
