import React from 'react';

export default function FinalQuote() {
  return (
    <section className="w-full bg-secondary py-24 md:py-32 flex flex-col md:flex-row items-stretch overflow-hidden">
      
      {/* Left Image (Full Bleed Left) */}
      <div className="w-full md:w-1/2 flex">
        <img 
          src="./quote.jpeg" 
          alt="Calm ocean shoreline" 
          className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[1.4]"
        />
      </div>
      
      {/* Right Text */}
      <div className="w-full md:w-[50%] flex flex-col justify-center px-8 md:pl-16 lg:pl-32 md:pr-[12%] pt-16 md:pt-0 pb-12 md:pb-0">
        <h2 className="font-serif text-[2.75rem] sm:text-5xl lg:text-[4rem] leading-[1.2] font-light text-foreground">
          Not just symptom relief —<br className="hidden md:block" />
          <span className="font-cursive text-accent text-[5.5rem] lg:text-[7rem] leading-[0.3] align-middle -ml-2 mr-3">&</span>
          a deeper sense of<br className="hidden md:block" />
          connection to yourself.
        </h2>
      </div>
      
    </section>
  );
}
