import React from 'react';

export default function CTASection() {
  return (
    <section className="w-full bg-background py-24 md:py-32 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Left Image Snippet */}
      <div className="hidden md:block relative shrink-0 w-[15%] lg:w-[13%] h-[300px] lg:h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" 
          alt="Hands in sand" 
          className="absolute inset-0 w-full h-full object-cover object-right" 
        />
      </div>
      
      {/* Center Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-20 max-w-4xl py-12 mx-auto">
        
        <h4 className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#a59480] mb-12">
          SCHEDULE AN APPOINTMENT
        </h4>
        
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.3] font-light text-foreground mb-8">
          Find a therapist who is the right<br className="hidden sm:block"/>
          fit for <span className="font-cursive text-primary text-[3.75rem] lg:text-[4.25rem] leading-[0.5] align-middle -ml-1">you</span>.
        </h2>
        
        <div className="w-full max-w-2xl">
          <p className="text-foreground/80 text-[11px] leading-[2.2] font-light mb-6">
            Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
          </p>
          <p className="text-foreground/80 text-[11px] leading-[2.2] font-light mb-12">
            Click the button below to schedule an appointment.
          </p>
        </div>
        
        <div>
          <a href="#" className="inline-block border border-foreground/30 text-foreground px-8 py-3 rounded-full text-[8.5px] font-medium uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-all">
            BOOK NOW
          </a>
        </div>
        
      </div>
      
      {/* Right Image */}
      <div className="relative shrink-0 w-full md:w-[35%] lg:w-[32%] h-[400px] lg:h-[600px] mt-12 md:mt-0">
        <img 
          src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2070&auto=format&fit=crop" 
          alt="Child on beach" 
          className="absolute inset-0 w-full h-full object-cover object-left" 
        />
      </div>

    </section>
  );
}
