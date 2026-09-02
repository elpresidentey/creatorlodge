export default function ManifestoSection() {
  return (
    <section className="w-full bg-white border-y border-black/5">
      <div className="max-w-[1312px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-3">
            <p className="text-[#6E6E73] text-xs font-semibold tracking-[0.18em] uppercase">Why we exist</p>
            <h2 className="font-cabin font-semibold text-[32px] leading-[0.95] tracking-[-0.03em] text-[#1D1D1F]">
              House for the<br />people who make.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6">
            <p className="text-[#424245] text-[15px] leading-[1.7] max-w-[560px]">
              Creators Lounge is not a hotel, not a co-work, not a restaurant — it’s all three, Calibrated for focus, hospitality and creative energy across VI, Yaba and Lekki.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-black/5 pt-6">
              <div><p className="font-cabin font-semibold text-[22px] text-[#1D1D1F] tracking-[-0.02em]">3</p><p className="text-[#6E6E73] text-xs mt-1">Houses</p></div>
              <div><p className="font-cabin font-semibold text-[22px] text-[#1D1D1F] tracking-[-0.02em]">6</p><p className="text-[#6E6E73] text-xs mt-1">Space types</p></div>
              <div><p className="font-cabin font-semibold text-[22px] text-[#1D1D1F] tracking-[-0.02em]">8—11</p><p className="text-[#6E6E73] text-xs mt-1">Open daily</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
