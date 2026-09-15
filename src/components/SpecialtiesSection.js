import React from 'react';

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Anxiety & Panic",
      desc: "Constant worry, tension in the body, difficulty sleeping, or a sense that you're always bracing for something to go wrong. In therapy, we'll work together to understand what's driving it — and build tools that help you feel calmer, more grounded, and more in control."
    },
    {
      title: "Trauma",
      desc: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. Our work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life."
    },
    {
      title: "EMDR",
      desc: "Eye Movement Desensitization and Reprocessing (EMDR) is an evidence-based therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in the brain. This allows you to find relief and move toward lasting healing."
    },
    {
      title: "Burnout & Perfectionism",
      desc: "Many of the clients I support are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working."
    }
  ];

  return (
    <section id="specialties" className="w-full bg-accent py-24 md:py-32 px-8 md:px-[8%]">
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        
        {/* Left Heading Column */}
        <div className="w-full md:w-[35%] mb-16 md:mb-0 pt-2">
          <h2 className="font-serif text-[2.1rem] leading-[1.3] font-light text-foreground">
            My <span className="font-cursive text-primary text-[3.25rem] leading-[0.5] align-middle -ml-1 mr-1">specialties</span><br />
            include...
          </h2>
        </div>
        
        {/* Right Grid Column */}
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16">
          {specialties.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <h3 className="font-serif text-[1.2rem] font-light text-foreground mb-5">{item.title}</h3>
              <p className="text-foreground/80 text-[13px] md:text-[14px] leading-[2.2] font-light mb-12 flex-grow">
                {item.desc}
              </p>
              <div className="border-t border-foreground/10 pt-4 mt-auto">
                <a href="#" className="text-[8.5px] font-medium tracking-[0.2em] uppercase text-foreground/60 hover:text-foreground transition-all">
                  LEARN MORE
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
