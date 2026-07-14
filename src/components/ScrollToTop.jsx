import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primarygb/70 backdrop-blur-md border border-white/10 text-cyan shadow-lg shadow-black/30 transition-all duration-300 ease-out hover:text-white hover:border-cyan hover:scale-110 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};
