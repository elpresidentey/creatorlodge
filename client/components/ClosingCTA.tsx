import { Link } from "react-router-dom";
export default function ClosingCTA() {
  return (
    <section className="w-full bg-[#1D1D1F] px-6 md:px-10 lg:px-16 py-16 md:py-24">
      <div className="max-w-[1312px] mx-auto rounded-[20px] bg-white border border-black/5 shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="font-cabin font-semibold text-[32px] tracking-[-0.03em] text-[#1D1D1F] leading-tight">Come for a day.<br />Stay for the community.</h2>
          <p className="text-[#6E6E73] text-[15px] mt-3">Book a desk or a table today — pay at the house.</p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <Link to="/book" className="inline-flex items-center justify-center h-[50px] px-7 rounded-[10px] bg-[#1D1D1F] text-white font-medium text-[15px] hover:bg-black transition">Book a space</Link>
          <Link to="/contact" className="inline-flex items-center justify-center h-[50px] px-7 rounded-[10px] border border-black/10 bg-white text-[#1D1D1F] font-medium text-[15px] hover:bg-[#F5F5F7] transition">Talk to us</Link>
        </div>
      </div>
    </section>
  );
}
