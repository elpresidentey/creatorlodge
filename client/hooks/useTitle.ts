import { useEffect } from "react";
export function useTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = `${title} — Creators Lounge`;
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.setAttribute("name","description"); document.head.appendChild(m); }
      m.setAttribute("content", description);
    }
  }, [title, description]);
}
