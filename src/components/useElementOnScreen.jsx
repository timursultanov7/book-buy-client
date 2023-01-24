import { useRef, useState, useEffect } from "react";

export const useElementOnScreen = (options) => {
  const featuredInSection = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  const showNav = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(showNav, options);

    if (featuredInSection.current) observer.observe(featuredInSection.current);

    return () => {
      if (featuredInSection.current)
        observer.unobserve(featuredInSection.current);
    };
  }, [featuredInSection, options]);
};
