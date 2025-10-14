import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 👈 makes it animate smoothly
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
