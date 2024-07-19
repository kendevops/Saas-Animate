import Image from "next/image";

const images = [
  { src: "/assets/images/acme.png", alt: "Acme Logo" },
  { src: "/assets/images/quantum.png", alt: "Quantum Logo" },
  { src: "/assets/images/echo.png", alt: "Echo Logo" },
  { src: "/assets/images/celestial.png", alt: "Celestial Logo" },
  { src: "/assets/images/pulse.png", alt: "Pulse Logo" },
  { src: "/assets/images/apex.png", alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams{" "}
        </h2>
        <div className="overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5  before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] relative  ">
          <div className="flex gap-16">
            {images.map((image, index) => {
              return (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={120}
                  height={32}
                  className="flex-none h-8"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
