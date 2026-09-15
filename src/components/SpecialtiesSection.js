import React from 'react';

export default function SpecialtiesSection() {
  const specialties = [
    {
      title: "Trauma",
      desc: "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone."
    },
    {
      title: "EMDR",
      desc: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing."
    },
    {
      title: "Dissociation",
      desc: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded."
    },
    {
      title: "Special Needs Parenting",
      desc: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care."
    }
  ];

  return (
    <section className="w-full bg-white py-24 md:py-32 px-8 md:px-[8%]">
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        
        {/* Left Heading Column */}
        <div className="w-full md:w-[35%] mb-16 md:mb-0 pt-2">
          <h2 className="font-serif text-[2.1rem] leading-[1.3] font-light text-foreground">
            Our <span className="font-cursive text-primary text-[3.25rem] leading-[0.5] align-middle -ml-1 mr-1">specialties</span><br />
            include...
          </h2>
        </div>
        
        {/* Right Grid Column */}
        <div className="w-full md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16">
          {specialties.map((item, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <h3 className="font-serif text-[1.2rem] font-light text-foreground mb-5">{item.title}</h3>
              <p className="text-foreground/80 text-[11px] leading-[2.2] font-light mb-12 flex-grow">
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
