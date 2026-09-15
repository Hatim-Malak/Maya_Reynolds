import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-accent pt-10 pb-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-4 md:pt-0">
        
        {/* Left Image Column */}
        <div className="w-full md:w-[35%] h-[50vh] md:h-[650px] relative order-2 md:order-1">
          <img 
            src="./Dr._Maya_Reynolds.png" 
            alt="Dr. Maya Reynolds, Psychologist" 
            className="object-contain w-full h-full object-bottom md:object-center"
          />
        </div>

        {/* Center Text Column */}
        <div className="w-full md:w-[48%] flex flex-col justify-center items-start text-left px-8 xl:px-16 order-1 md:order-2 mb-12 md:mb-0">
          <h3 className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium mb-12 md:mb-14">
            In-Person & Telehealth · Santa Monica, CA
          </h3>
          
          <h1 className="font-serif text-[2.75rem] sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] leading-[1.1] mb-10 text-foreground font-light tracking-tight">
            You don't have to feel<br className="hidden md:block" /> on edge all the time.
            <br />Find solid ground and<br className="hidden md:block" /> finally <span className="font-cursive text-primary text-[5rem] lg:text-[7rem] leading-[0.2] ml-2 align-bottom">Breathe.</span>
          </h1>
          
          <p className="text-foreground/80 mb-12 text-base md:text-lg leading-relaxed max-w-lg font-light">
            Warm, collaborative <span className="text-primary font-normal">therapy</span> for adults navigating <span className="text-primary font-normal">anxiety, panic, trauma</span> and <span className="text-primary font-normal">burnout</span> — many who feel functional on the outside and exhausted on the inside.
          </p>
          
          <a href="#contact" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all">
            <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors duration-300">
              Book a Consultation
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>

        {/* Right Image Column */}
        <div className="hidden md:block w-full md:w-[15%] h-[400px] lg:h-[480px] relative self-end mb-10 order-3">
          <img 
            src="./office1.jpeg" 
            alt="Calm office environment" 
            className="object-cover w-full h-full object-left"
          />
        </div>

      </div>
    </section>
  );
}
