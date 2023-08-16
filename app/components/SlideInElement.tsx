import { Cabin_Sketch } from "next/font/google";
import React, { ReactNode, useEffect, useState } from "react";
interface SlideInProps {
  children: ReactNode;
}

export const SlideInElement: React.FC<SlideInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const slideInElement = document.getElementById("slide-in-element");
    if (slideInElement) {
      const elementTop = slideInElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop - windowHeight <= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    const slideInElement = document.getElementById("slide-in-element");
    if (slideInElement) {
      const elementTop = slideInElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop - windowHeight <= 0) {
        setIsVisible(true);
      }
    }
    /*if (rect) {
      if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      ) {
        console.log("here");
      }
    }*/

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`slide-in-element slide-in-element h-full w-full ${
        isVisible ? "visible" : ""
      }`}
      id="slide-in-element"
    >
      {children}
    </div>
  );
};
