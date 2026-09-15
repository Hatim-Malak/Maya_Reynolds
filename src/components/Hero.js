import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full bg-background pt-10 pb-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Image Column */}
        <div className="w-full md:w-[35%] h-[60vh] md:h-[650px] relative">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
            alt="Calm adult client at ease" 
            className="object-cover w-full h-full object-center"
          />
        </div>

        {/* Center Text Column */}
        <div className="w-full md:w-[48%] flex flex-col justify-center items-start text-left px-8 xl:px-16">
          <h3 className="text-[10px] tracking-[0.25em] text-muted uppercase font-normal mb-14">
            In-Person & Telehealth Therapy in Santa Monica, CA
          </h3>
          
          <h1 className="font-serif text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.25] mb-12 text-foreground font-light">
            You don't have to feel on edge<br/>
            all the time. Find solid ground<br/>
            and finally <span className="font-cursive text-primary text-[4.5rem] lg:text-[6.5rem] leading-[0.3] ml-2 align-bottom">Breathe.</span>
          </h1>
          
          <p className="text-foreground/90 mb-14 text-[14px] leading-relaxed max-w-md">
            Warm, collaborative <span className="text-primary">therapy</span> for adults navigating <span className="text-primary">anxiety, panic, trauma</span> and <span className="text-primary">burnout</span> — many who feel functional on the outside and exhausted on the inside.
          </p>
          
          <a href="#contact" className="text-[10px] font-normal tracking-[0.2em] uppercase text-muted hover:text-foreground border-b border-muted pb-1 hover:border-foreground transition-all">
            Book an Appointment
          </a>
        </div>

        {/* Right Image Column */}
        <div className="hidden md:block w-full md:w-[15%] h-[400px] lg:h-[480px] relative self-end mb-10">
          <img 
            src="https://images.unsplash.com/photo-1495555687398-3f50d6e79e1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Ocean waves" 
            className="object-cover w-full h-full object-left"
          />
        </div>

      </div>
    </section>
  );
}
