import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { outlets, spaces } from "@/lib/lounge-data";

export default function OutletDetail() {
  const { slug } = useParams();
  const outlet = outlets.find((o) => o.slug === slug);
  if (!outlet) {
    return (
      <div className="min-h-screen bg-[#1D1D1F]">
        <Navbar />
        <div className="px-6 md:px-10 lg:px-16 py-20 text-center">
          <p className="text-white/60 text-[15px]">Outlet not found.</p>
          <Link to="/outlets" className="text-brand-yellow underline mt-4 inline-block text-[15px]">
            Back to outlets
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  const outletSpaces = spaces.filter((s) => s.outletSlugs.includes(outlet.slug));

  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />

      <section className="relative h-[320px] md:h-[460px] overflow-hidden">
        <img src={outlet.image} alt={outlet.name} className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full flex flex-col justify-end px-6 md:px-10 lg:px-16 pb-10">
          <div className="max-w-[1312px] mx-auto w-full">
            <p className="text-white/70 font-semibold tracking-[0.18em] text-xs uppercase">{outlet.tag}</p>
            <h1 className="text-white font-cabin font-semibold text-[40px] sm:text-[56px] leading-[0.92] tracking-[-0.04em] mt-2">{outlet.name}</h1>
            <p className="text-white/70 text-[15px] mt-2">{outlet.address} • {outlet.hours}</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 py-8">
        <div className="max-w-[1312px] mx-auto flex flex-wrap gap-2">
          {outlet.amenities.map((a) => (
            <span key={a} className="bg-white text-[#1D1D1F] text-xs font-semibold px-3 py-1.5 rounded-full border border-black/5">
              {a}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid grid-cols-3 gap-5">
          {outlet.gallery.map((g, i) => (
            <img key={i} src={g} alt="" className="h-[140px] md:h-[200px] w-full object-cover rounded-[20px] border border-white/10" />
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-[1312px] mx-auto">
          <h2 className="text-white font-cabin font-semibold text-[32px] tracking-[-0.03em] mb-6">Spaces at {outlet.name.split("—")[0]}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {outletSpaces.map((s) => (
              <div key={s.id} className="group surface-card">
                <div className="surface-media h-[160px]">
                  <img src={s.image} alt={s.name} />
                </div>
                <div className="p-5">
                  <p className="font-cabin font-semibold text-[17px] text-[#1D1D1F]">{s.name}</p>
                  <p className="text-[#6E6E73] text-[15px] mt-1">{s.desc}</p>
                  <Link to={`/book?space=${s.id}&outlet=${outlet.slug}`} className="inline-flex items-center justify-center mt-4 bg-[#1D1D1F] text-white text-[15px] font-medium px-5 h-[50px] rounded-[10px] hover:bg-black">
                    Book • {s.price}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <Link to={`/book?outlet=${outlet.slug}`} className="inline-flex bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] px-8 rounded-[10px] h-[50px] items-center justify-center hover:opacity-90">
              Book at this outlet
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center border border-white/20 text-white font-medium text-[15px] px-8 rounded-[10px] hover:bg-white/10 h-[50px]">
              Contact concierge
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
