import React from 'react';

export default function OurOffice() {
  return (
    <section id="office" className="w-full bg-accent pt-24 md:pt-32 pb-24 md:pb-32 overflow-hidden flex flex-col">
      
      {/* Top Image Grid */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[400px]">
        {/* Left Image (30%) */}
        <div className="w-full md:w-[30%] h-[300px] md:h-full relative shrink-0">
          <img 
            src="./office1.jpeg" 
            alt="Office space with ocean view" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        
        {/* Center Image (40%) */}
        <div className="w-full md:w-[40%] h-[400px] md:h-full relative shrink-0">
          <img 
            src="./office2.jpeg" 
            alt="Quiet therapy room" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        
        {/* Right Image (30%) - Using Unsplash as fallback for the 3rd image */}
        <div className="w-full md:w-[30%] h-[300px] md:h-full relative shrink-0">
          <img 
            src="./plant.jpeg" 
            alt="Minimalist warm interior" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* Bottom Text Content */}
      <div className="w-full px-8 md:px-[8%] mt-16 md:mt-24 max-w-7xl mx-auto">
        
        <h4 className="text-xs tracking-[0.2em] font-medium text-foreground uppercase mb-6">
          The Space
        </h4>
        
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.25] font-light text-foreground mb-16 max-w-2xl">
          A quiet place designed to feel <span className="font-cursive text-primary text-[4.5rem] lg:text-[5.5rem] leading-[0.5] ml-1 align-middle">calm</span>.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Column 1 */}
          <div className="flex-1 flex flex-col">
            <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light">
              My Santa Monica office is a quiet, private space designed to feel calm and grounding — with <span className="text-primary font-normal">natural light and a comfortable, uncluttered environment</span>. Clients often share that the space itself helps them feel more at ease when they arrive. Everything here is intentional: <span className="text-primary font-normal">unhurried, warm, and built around your comfort</span>.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="flex-1 flex flex-col">
            <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light mb-10">
              I offer both <span className="text-primary font-normal">in-person sessions</span> from this office and <span className="text-primary font-normal">secure telehealth appointments</span> for clients located anywhere in California. Whether you walk through the door or connect from home, the experience is the same — a space where you feel <span className="text-primary font-normal">safe, seen, and supported</span>.
            </p>
            
            <div>
              <p className="text-sm md:text-[15px] text-foreground font-medium mb-4">
                123th Street 45 W · Santa Monica, CA 90401
              </p>
              <a href="#" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all w-fit">
                <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors duration-300">
                  Get Directions
                </span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
}
