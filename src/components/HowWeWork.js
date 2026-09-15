import React from 'react';

export default function HowWeWork() {
  return (
    <section id="approach" className="w-full min-h-screen bg-secondary overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full flex-1">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[65%] flex flex-col justify-between px-8 xl:pl-[8%] xl:pr-24 py-16 min-h-[700px]">
          
          <div>
            <h4 className="text-[11px] tracking-[0.2em] font-medium text-foreground uppercase mb-24 lg:mb-32">
              My Approach
            </h4>
            
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.25] font-light text-foreground mb-16">
              A warm, grounded, and evidence-based approach.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              
              {/* Sub-column 1 */}
              <div className="flex-1 flex flex-col">
                <h4 className="text-[10.5px] tracking-[0.2em] font-medium text-foreground uppercase mb-6 leading-[1.8]">
                  Sessions are structured enough to feel supportive,<br className="hidden xl:block"/> while still leaving space for reflection and depth.
                </h4>
                <p className="text-foreground/80 text-[13.5px] leading-[2.2] font-light">
                  I integrate <span className="text-primary font-normal">evidence-based methods</span> such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — helping you understand <span className="text-primary font-normal">both the emotional and physiological sides</span> of what you're experiencing. (You won't find anything &quot;one-size-fits-all&quot; here.) If you're ready to <span className="text-primary font-normal">do the work</span>, I'm ready to help.
                </p>
              </div>
              
              {/* Sub-column 2 */}
              <div className="flex-1 flex flex-col pt-1 md:pt-0">
                <p className="text-foreground/80 text-[13.5px] leading-[2.2] font-light">
                  Trauma work is an important part of my practice. Whether you've experienced single-incident trauma or longer-standing patterns from <span className="text-primary font-normal">childhood, relationships, or chronic stress</span>, our work is <span className="text-primary font-normal">paced carefully</span> — with an emphasis on safety, stabilization, and feeling <span className="text-primary font-normal">more regulated in your daily life</span>, not just during sessions.
                </p>
              </div>

            </div>
          </div>
          
          <div className="mt-20">
            <a href="#approach" className="text-[11px] font-medium tracking-[0.2em] uppercase text-foreground border-b border-foreground/30 pb-1 hover:border-foreground transition-all">
              Learn More About My Approach
            </a>
          </div>
          
        </div>
        
        {/* Right Image Area */}
        <div className="w-full md:w-[35%] min-h-[400px] md:min-h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
            alt="Calm, bright therapy space" 
            className="absolute inset-0 object-cover w-full h-full object-center"
          />
        </div>

      </div>
    </section>
  );
}
