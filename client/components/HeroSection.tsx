const galleryImages = [
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a17517b6740d705b4b5b3226b710bce4592c89e3?width=258",
    alt: "Coffee espresso",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4486df4cbd68b09ffb22b9169032c3214d870982?width=258",
    alt: "Pink macarons",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a2d79f5fa182022918e90b753c3a5b4b75dfc937?width=258",
    alt: "Creative food",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/595a98739493be133f7eead6e680c84e63d41e1f?width=258",
    alt: "Artisan dish",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/8b568befc5a212ac6ee8da98235ab6eab514ee8d?width=258",
    alt: "Pineapple cocktail",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/97d281e546766b9da348ffeabf36504b94faf1f5?width=258",
    alt: "Tropical fruit",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4d36d0f7716f9d6fe4addb0bcf15f80192880fe5?width=258",
    alt: "Creative drink",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/a17517b6740d705b4b5b3226b710bce4592c89e3?width=258",
    alt: "Coffee",
  },
  {
    src: "https://api.builder.io/api/v1/image/assets/TEMP/4486df4cbd68b09ffb22b9169032c3214d870982?width=258",
    alt: "Sweet treat",
  },
];

// Split into 3 columns of 3 images each
const col1 = galleryImages.slice(0, 3);
const col2 = galleryImages.slice(3, 6);
const col3 = galleryImages.slice(6, 9);

export default function HeroSection() {
  return (
    <section className="bg-brand-dark w-full px-6 md:px-10 lg:px-16 py-12 md:py-20">
      <div className="max-w-[1312px] mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 lg:w-[40%] w-full">
          {/* Headline */}
          <div className="flex flex-col">
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl leading-none text-brand-pink">
              Dine.
            </h1>
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl leading-none text-brand-blue">
              Wine.
            </h1>
            <h1 className="font-black text-5xl sm:text-6xl md:text-7xl leading-none text-brand-yellow">
              &amp; Create.
            </h1>
          </div>

          {/* Description */}
          <p className="text-white text-base md:text-xl leading-relaxed max-w-[424px]">
            Welcome to the Creators' Dome — where creativity thrives. We elevate your focus and
            comfort, making every moment of your creative journey unforgettable.
          </p>

          {/* Explore Button */}
          <div>
            <button className="bg-brand-blue text-white font-bold text-lg md:text-xl px-10 md:px-12 py-3 md:py-4 rounded-[10px] hover:opacity-90 transition-opacity">
              Explore
            </button>
          </div>
        </div>

        {/* Right: Image Gallery Grid */}
        <div className="lg:w-[60%] w-full flex justify-center lg:justify-end">
          <div className="flex gap-[6px] sm:gap-[10px] md:gap-[13.5px]">
            {[col1, col2, col3].map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-[6px] sm:gap-[10px] md:gap-[13.5px]">
                {col.map((img, imgIdx) => (
                  <img
                    key={imgIdx}
                    src={img.src}
                    alt={img.alt}
                    className="w-[90px] h-[100px] sm:w-[110px] sm:h-[124px] md:w-[129px] md:h-[144px] rounded-[20px] md:rounded-[30px] object-cover"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
