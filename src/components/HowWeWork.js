import React from 'react';

export default function HowWeWork() {
  return (
    <section id="approach" className="w-full min-h-screen bg-accent overflow-hidden flex flex-col">
      <div className="flex flex-col md:flex-row items-stretch justify-between w-full flex-1">
        
        {/* Left Content Area */}
        <div className="w-full md:w-[50%] flex flex-col justify-between px-8 xl:pl-[8%] xl:pr-20 py-16 lg:py-24 min-h-[700px]">
          
          <div>
            <h4 className="text-xs tracking-[0.2em] font-medium text-foreground uppercase mb-16 lg:mb-20">
              My Approach
            </h4>
            
            <h2 className="font-serif text-[2.25rem] sm:text-5xl lg:text-[3.25rem] leading-[1.2] font-light text-foreground mb-16">
              A warm, grounded, and evidence-based approach.
            </h2>
            
            <div className="flex flex-col gap-10">
              
              <div className="flex flex-col">
                <h4 className="text-[12px] md:text-[13px] tracking-[0.2em] font-medium text-foreground uppercase mb-6 leading-relaxed">
                  Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
                </h4>
                <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light mb-6">
                  I integrate <span className="text-primary font-normal">evidence-based methods</span> such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques — helping you understand <span className="text-primary font-normal">both the emotional and physiological sides</span> of what you're experiencing. (You won't find anything "one-size-fits-all" here.) If you're ready to <span className="text-primary font-normal">do the work</span>, I'm ready to help.
                </p>
                <p className="text-foreground/80 text-base md:text-[17px] leading-relaxed font-light">
                  Trauma work is an important part of my practice. Whether you've experienced single-incident trauma or longer-standing patterns from <span className="text-primary font-normal">childhood, relationships, or chronic stress</span>, our work is <span className="text-primary font-normal">paced carefully</span> — with an emphasis on safety, stabilization, and feeling <span className="text-primary font-normal">more regulated in your daily life</span>, not just during sessions.
                </p>
              </div>

            </div>
          </div>
          
          <div className="mt-20">
            <a href="#approach" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-foreground transition-all">
              <span className="border-b border-foreground/30 pb-1 group-hover:border-foreground transition-colors duration-300">
                Learn More About My Approach
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                &rarr;
              </span>
            </a>
          </div>
          
        </div>
        
        {/* Right Image Area */}
        <div className="w-full md:w-[50%] min-h-[400px] md:min-h-full relative">
          <img 
            src="./office2.jpeg" 
            alt="Calm, bright therapy space" 
            className="absolute inset-0 object-cover w-full h-full object-center"
          />
        </div>

      </div>
    </section>
  );
}
