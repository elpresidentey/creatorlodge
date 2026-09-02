import Navbar from "@/components/Navbar";
import { useTitle } from "@/hooks/useTitle";
import Footer from "@/components/Footer";
import { menu } from "@/lib/lounge-data";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Menu() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const toggle = (name: string) => {
    const n = new Set(selected);
    if (n.has(name)) n.delete(name); else n.add(name);
    setSelected(n);
  };
  const selectedItems = menu.flatMap(s => s.items).filter(i => selected.has(i.name));
  const total = selectedItems.reduce((s, i) => s + parseInt(i.price.replace(/[^0-9]/g, "") || "0"), 0);
  return (
    <div className="min-h-screen bg-[#1D1D1F]">
      <Navbar />
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-[1312px] mx-auto text-center">
          <p className="text-white/50 font-semibold tracking-[0.18em] text-xs uppercase">Dine & Bar</p>
          <h1 className="font-cabin font-semibold text-[56px] leading-[0.92] tracking-[-0.04em] text-white mt-3">
            Wood-fired, garden-led
          </h1>
          <p className="text-white/60 text-[15px] mt-3">Seasonal plates from our open kitchen. Same menu across all domes.</p>
          <div className="mt-6">
            <Link to="/book?space=dine" className="inline-flex items-center justify-center bg-brand-yellow text-[#1D1D1F] font-semibold text-[15px] h-[50px] px-7 rounded-[10px] hover:opacity-90">
              Reserve a table
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-16 pb-8">
        <div className="max-w-[1312px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {menu.map((section) => (
            <div key={section.title} className="bg-white rounded-[20px] p-6 border border-black/5 shadow-sm">
              <h3 className="font-cabin font-semibold text-[15px] tracking-[-0.02em] text-[#1D1D1F] border-b border-black/5 pb-3">{section.title}</h3>
              <div className="flex flex-col gap-2 mt-4">
                {section.items.map((item) => {
                  const isSel = selected.has(item.name);
                  return (
                    <button key={item.name} onClick={() => toggle(item.name)} className={`text-left flex justify-between gap-3 rounded-xl px-3 py-2.5 border transition ${isSel ? "bg-[#1D1D1F] border-[#1D1D1F] shadow-sm" : "bg-[#F5F5F7] border-black/5 hover:border-black/10 hover:bg-white"}`}>
                      <div className="flex-1">
                        <p className={`font-semibold text-[13px] flex items-center gap-1.5 ${isSel ? "text-white" : "text-[#1D1D1F]"}`}>
                          {isSel && <span className="h-4 w-4 rounded-full bg-white text-[#1D1D1F] flex items-center justify-center text-[10px]">✓</span>}
                          {item.name}
                          {item.tag && <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${isSel ? "bg-white text-[#1D1D1F]" : "bg-brand-yellow text-[#1D1D1F]"}`}>{item.tag}</span>}
                        </p>
                        <p className={`text-xs leading-snug ${isSel ? "text-white/70" : "text-[#6E6E73]"}`}>{item.desc}</p>
                      </div>
                      <span className={`font-semibold text-xs shrink-0 ${isSel ? "text-white" : "text-[#1D1D1F]"}`}>{item.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        {selectedItems.length > 0 && (
          <div className="max-w-[1312px] mx-auto mt-6 bg-white rounded-[20px] border border-black/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm sticky bottom-4">
            <div>
              <p className="font-cabin font-semibold text-sm text-[#1D1D1F]">{selectedItems.length} selected · ₦{total.toLocaleString()}</p>
              <p className="text-xs text-[#6E6E73] truncate max-w-[420px]">{selectedItems.map(i=>i.name).join(" · ")}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={()=>setSelected(new Set())} className="h-[50px] px-5 rounded-[10px] border border-black/10 text-[#1D1D1F] font-medium text-sm hover:bg-[#F5F5F7]">Clear</button>
              <button onClick={()=>toast({title:`Pre-order saved`, description:`${selectedItems.length} items · ₦${total.toLocaleString()} — add to your booking at checkout.`})} className="h-[50px] px-6 rounded-[10px] bg-[#1D1D1F] text-white font-medium text-sm hover:bg-black">Add to booking</button>
            </div>
          </div>
        )}
        <p className="text-white/40 text-xs text-center mt-6">Tap any dish or cocktail to select — pre-order attaches to your booking. Vegetarian • Vegan • Allergies on request.</p>
      </section>

      <Footer />
    </div>
  );
}
