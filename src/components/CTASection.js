import React from 'react';

export default function CTASection() {
  return (
    <section id="contact" className="w-full bg-secondary py-24 md:py-32 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Image Snippet */}
      <div className="hidden md:block relative shrink-0 w-[15%] lg:w-[13%] h-[300px] lg:h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" 
          alt="Calm natural light" 
          className="absolute inset-0 w-full h-full object-cover object-right" 
        />
      </div>
      
      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 max-w-4xl py-12 mx-auto">
        
        <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground mb-10">
          SCHEDULE AN APPOINTMENT
        </h4>
        
        <h2 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.25rem] leading-[1.2] font-light text-foreground mb-10">
          Find a therapist who <span className="font-cursive text-primary text-[4rem] lg:text-[4.75rem] leading-[0.5] align-middle -ml-1 pr-1">feels</span> right<br className="hidden sm:block"/>
          for you.
        </h2>
        
        <div className="w-full max-w-xl">
          <p className="text-foreground/80 text-lg leading-relaxed font-medium mb-6">
            Therapy is personal. Finding the right fit matters.
          </p>
          <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light mb-6">
            I offer both in-person therapy from my quiet Santa Monica office — a private space designed to feel calm and grounding — and secure telehealth sessions for clients located anywhere in California.
          </p>
          <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light mb-14">
            You deserve a therapist who understands the realities of living and working in a fast-paced world. Click below to schedule a free phone consultation and see if we're a good fit.
          </p>
        </div>
        
        <div>
          <a href="#contact" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all w-fit">
            <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors duration-300">
              Get Started
            </span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>
        
      </div>
      
      {/* Right Image */}
      <div className="relative shrink-0 w-full md:w-[35%] lg:w-[32%] h-[400px] lg:h-[600px] mt-12 md:mt-0">
        <img 
          src="./therapist.jpeg" 
          alt="Quiet office space" 
          className="absolute inset-0 w-full h-full object-cover " 
        />
      </div>

    </section>
  );
}
