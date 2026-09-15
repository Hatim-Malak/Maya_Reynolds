import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col border-t border-foreground/10">
      {/* Top Main Footer Area */}
      <div className="bg-accent pt-24 pb-32 px-8 md:px-[8%] flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-8">
        
        {/* Column 1: Brand & Info */}
        <div className="w-full md:w-[35%] flex flex-col items-start lg:pr-16">
          <div className="flex flex-col items-start mb-6">
            <h2 className="font-serif text-4xl lg:text-[3.25rem] leading-none text-foreground font-light mb-3">Maya Reynolds</h2>
            <h3 className="font-sans text-[10.5px] font-medium tracking-[0.45em] text-primary uppercase ml-1">PsyD, Licensed Clinical Psychologist</h3>
          </div>
          <p className="text-foreground/80 text-[13px] md:text-[14px] leading-[2.2] font-light">
            I'm a licensed clinical psychologist in Santa Monica, California, offering warm, evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout — in person and online.
          </p>
        </div>

        {/* Column 2: Navigate */}
        <div className="w-full md:w-[15%] flex flex-col items-start pt-2">
          <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">NAVIGATE</h4>
          <ul className="flex flex-col gap-y-3">
            <li><a href="#" className="text-[13px] md:text-[14px] font-light text-foreground/80 hover:text-primary transition-colors">Home</a></li>
            <li><a href="#about" className="text-[13px] md:text-[14px] font-light text-foreground/80 hover:text-primary transition-colors">About</a></li>
            <li><a href="#specialties" className="text-[13px] md:text-[14px] font-light text-foreground/80 hover:text-primary transition-colors">Specialties</a></li>
            <li><a href="#contact" className="text-[13px] md:text-[14px] font-light text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Specialties */}
        <div className="w-full md:w-[25%] lg:w-[20%] flex flex-col items-start pt-2">
          <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">SPECIALTIES</h4>
          <ul className="flex flex-col gap-y-3">
            <li className="text-[13px] md:text-[14px] font-light text-foreground/80">Anxiety & Panic</li>
            <li className="text-[13px] md:text-[14px] font-light text-foreground/80">Trauma</li>
            <li className="text-[13px] md:text-[14px] font-light text-foreground/80">EMDR</li>
            <li className="text-[13px] md:text-[14px] font-light text-foreground/80">Burnout & Perfectionism</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="w-full md:w-[25%] lg:w-[30%] flex flex-col items-start pt-2">
          <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">CONTACT</h4>
          <div className="text-[13px] md:text-[14px] font-light text-foreground/80 leading-[1.8] flex flex-col mb-8">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <p><a href="mailto:hello@mayareynoldspsyd.com" className="hover:text-primary transition-colors">hello@mayareynoldspsyd.com</a></p>
            <p>+1 (310) 555-0192</p>
          </div>
          <div className="text-[13px] md:text-[14px] font-light text-foreground/80 leading-[1.8] flex flex-col">
            <p>In-person in Santa Monica &</p>
            <p>telehealth across California</p>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Teal Bar */}
      <div className="w-full bg-primary py-5 px-8 md:px-[8%] flex items-center">
        <p className="text-[11px] md:text-[12px] font-light text-white/90 tracking-wide">
          Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.
        </p>
      </div>
      
    </footer>
  );
}
