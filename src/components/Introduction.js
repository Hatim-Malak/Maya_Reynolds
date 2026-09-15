import React from 'react';

export default function Introduction() {
  return (
    <section id="about" className="w-full bg-background pt-16 pb-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full h-full">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[65%] flex flex-col justify-center px-8 xl:pl-[8%] xl:pr-24 py-10">
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.25] font-light text-foreground mb-16 max-w-[90%]">
            You look fine on the outside.<br className="hidden xl:block"/> On the inside, you're running on empty.
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
            
            {/* Sub-column 1 */}
            <div className="flex-1 flex flex-col">
              <h4 className="text-[10px] tracking-[0.2em] font-medium text-foreground/80 uppercase mb-5 leading-[1.8]">
                At Dr. Maya Reynolds, PsyD, you're not broken — you're carrying a lot.
              </h4>
              <p className="text-foreground/80 text-[13px] leading-[2] font-light">
                Many of the people I work with are <span className="text-primary font-normal">high-achieving, thoughtful, and self-aware</span> — but internally feel <span className="text-primary font-normal">exhausted, stuck in overthinking, or emotionally on edge</span>. Clients often come to me feeling <span className="text-primary font-normal">&quot;functional&quot; on the outside</span> while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're <span className="text-primary font-normal">always bracing for something to go wrong</span>.
              </p>
            </div>
            
            {/* Sub-column 2 */}
            <div className="flex-1 flex flex-col pt-1 md:pt-0">
              <p className="text-foreground/80 text-[13px] leading-[2] font-light">
                I take a <span className="text-primary font-normal">warm, collaborative, and grounded</span> approach to therapy. Sessions are <span className="text-primary font-normal">structured enough to feel supportive</span>, while still leaving space for reflection and depth. My work focuses on <span className="text-primary font-normal">anxiety, panic, trauma, and burnout</span> — and as we tap into what's driving your struggles, you can <span className="text-primary font-normal">find your footing again</span>.
              </p>
            </div>

          </div>
          
        </div>
        
        {/* Right Image Area */}
        <div className="w-full md:w-[35%] h-[500px] md:h-auto min-h-[600px] relative">
          <img 
            src="https://images.unsplash.com/photo-1583863788434-e58a36330cf0" 
            alt="Quiet, calming therapy office with natural light" 
            className="object-cover w-full h-full object-center"
          />
        </div>

      </div>
    </section>
  );
}
