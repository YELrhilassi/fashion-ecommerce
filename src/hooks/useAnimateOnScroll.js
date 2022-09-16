import { useEffect, useState } from "react";

export default function useAnimateOnScroll(targetRef, options) {
  const [isVisible, setIsVisible] = useState(false);

  function intersectCallBack(entries) {
    const [entry] = entries; // The callback receives a list of IntersectionObserverEntry objects
    setIsVisible(entry.isIntersecting); //each entry  reporte a change in its intersection status
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectCallBack, options);
    observer.observe(targetRef.current); //need to give it a target element to watch
    return () => {
      observer.unobserve(targetRef.current);
    };
  }, [targetRef]);
  return isVisible;
}
