import React from 'react';

export default function FinalQuote() {
  return (
    <section className="w-full bg-white py-24 md:py-32 flex flex-col md:flex-row items-stretch overflow-hidden">
      
      {/* Left Image (Full Bleed Left) */}
      <div className="w-full md:w-1/2 flex">
        <img 
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
          alt="Family standing in water" 
          className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[1.4]"
        />
      </div>
      
      {/* Right Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-end px-8 md:pl-16 lg:pl-24 md:pr-[16%] pt-12 md:pt-0">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3rem] leading-[1.3] font-light text-foreground">
          Honoring where you've been<br className="hidden md:block" />
          <span className="font-cursive text-primary text-[4.5rem] lg:text-[5.5rem] leading-[0.3] align-middle -ml-1 mr-2">&amp;</span> 
          helping shape where you're<br className="hidden md:block" />
          headed.
        </h2>
      </div>
      
    </section>
  );
}
