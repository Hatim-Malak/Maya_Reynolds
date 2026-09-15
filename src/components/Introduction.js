import React from 'react';

export default function Introduction() {
  return (
    <section id="about" className="w-full bg-secondary pt-16 pb-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full h-full">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[50%] flex flex-col justify-center px-8 xl:pl-[8%] xl:pr-20 py-16 lg:py-24">
          
          <h2 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.5rem] leading-[1.1] font-light text-foreground mb-12">
            You look fine on the outside.<br /> On the inside, you're running on empty.
          </h2>
          
          <div className="flex flex-col gap-10">
            
            <div className="flex flex-col">
              <h4 className="text-[11px] tracking-[0.2em] font-medium text-foreground uppercase mb-6">
                You're not broken — you're carrying a lot.
              </h4>
              <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light mb-6">
                Many of the people I work with are <span className="text-accent-foreground font-normal text-foreground">high-achieving, thoughtful, and self-aware</span> — but internally feel exhausted or emotionally on edge. Clients often come to me feeling <span className="text-accent-foreground font-normal text-foreground">"functional" on the outside</span> while quietly struggling with constant worry or a sense that they're always bracing for something to go wrong.
              </p>
              <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light">
                I take a warm, collaborative approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for depth. My work focuses on anxiety, panic, trauma, and burnout — and as we tap into what's driving your struggles, you can <span className="text-accent-foreground font-normal text-foreground">find your footing again</span>.
              </p>
            </div>
            
          </div>
          
        </div>
        
        {/* Right Image Area */}
        <div className="w-full md:w-[50%] h-[500px] md:h-auto min-h-[600px] relative">
          <img 
            src="./second_section.jpeg" 
            alt="Quiet, calming therapy office with natural light" 
            className="object-cover w-full h-full object-center"
          />
        </div>

      </div>
    </section>
  );
}
