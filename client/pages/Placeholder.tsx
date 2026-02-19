import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-brand-dark font-lato">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-32 px-6 text-center">
        <h1 className="text-brand-yellow font-black text-4xl md:text-5xl tracking-widest uppercase mb-6">
          {pageName}
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-md mb-10">
          This page is coming soon. Continue prompting to fill in this page's content.
        </p>
        <Link
          to="/"
          className="bg-brand-blue text-white font-bold text-lg px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
