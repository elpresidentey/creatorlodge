import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

export function useRevealOnce<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li";
};

/** Fade-and-rise scroll reveal with optional stagger delay (ms). */
export function Reveal({ children, delay = 0, y = 22, className = "", as = "div" }: RevealProps) {
  const { ref, visible } = useRevealOnce<HTMLDivElement>();
  const Tag = as as "div";
  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    ["--reveal-y" as string]: `${y}px`,
  };
  return (
    <Tag ref={ref} style={style} className={`reveal${visible ? " reveal-visible" : ""}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
