import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col border-t border-foreground/10">
      {/* Top Main Footer Area */}
      <div className="bg-white pt-24 pb-32 px-8 md:px-[8%] flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-8">
        
        {/* Column 1: Brand & Info */}
        <div className="w-full md:w-[35%] flex flex-col items-start lg:pr-16">
          <div className="flex flex-col items-start mb-6">
            <h2 className="font-serif text-4xl lg:text-[3.25rem] leading-none text-foreground font-light mb-3">Conejo Valley</h2>
            <h3 className="font-sans text-[10.5px] font-medium tracking-[0.45em] text-[#86a6a4] uppercase ml-1">Family Counseling</h3>
          </div>
          <p className="text-foreground/80 text-[11px] leading-[2.2] font-light">
            We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
          </p>
        </div>

        {/* Column 2: Navigate */}
        <div className="w-full md:w-[15%] flex flex-col items-start pt-2">
          <h4 className="text-[9.5px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">NAVIGATE</h4>
          <ul className="flex flex-col gap-y-3">
            <li><a href="#" className="text-[11px] font-light text-foreground/80 hover:text-[#86a6a4] transition-colors">Home</a></li>
            <li><a href="#" className="text-[11px] font-light text-foreground/80 hover:text-[#86a6a4] transition-colors">About</a></li>
            <li><a href="#" className="text-[11px] font-light text-foreground/80 hover:text-[#86a6a4] transition-colors">FAQs</a></li>
            <li><a href="#" className="text-[11px] font-light text-foreground/80 hover:text-[#86a6a4] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Our Team */}
        <div className="w-full md:w-[25%] lg:w-[20%] flex flex-col items-start pt-2">
          <h4 className="text-[9.5px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">OUR TEAM</h4>
          <ul className="flex flex-col gap-y-3">
            <li className="text-[11px] font-light text-foreground/80">Jennifer Anderson</li>
            <li className="text-[11px] font-light text-foreground/80">Heather Williams-Baumgart</li>
            <li className="text-[11px] font-light text-foreground/80">Autumn Bodily</li>
            <li className="text-[11px] font-light text-foreground/80">Candace Bletscher</li>
            <li className="text-[11px] font-light text-foreground/80">Samantha Johnson</li>
            <li className="text-[11px] font-light text-foreground/80">Andrea Watkins</li>
            <li className="text-[11px] font-light text-foreground/80">Rosa Gomez</li>
            <li className="text-[11px] font-light text-foreground/80">Chad Flores</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="w-full md:w-[25%] lg:w-[30%] flex flex-col items-start pt-2">
          <h4 className="text-[9.5px] uppercase tracking-[0.2em] font-medium text-[#a59480] mb-8">CONTACT</h4>
          <div className="text-[11px] font-light text-foreground/80 leading-[1.8] flex flex-col mb-8">
            <p>925 Broadbeck Dr</p>
            <p>Suites 200 and 225</p>
            <p>Newbury Park, CA 91320</p>
            <p><a href="mailto:info@conejovalleycounseling.com" className="hover:text-[#86a6a4] transition-colors">info@conejovalleycounseling.com</a></p>
            <p>805.242.3120</p>
          </div>
          <div className="text-[11px] font-light text-foreground/80 leading-[1.8] flex flex-col">
            <p>Serving Thousand Oaks, Westlake Village,</p>
            <p>Camarillo, Moorpark, & Simi Valley</p>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Teal Bar */}
      <div className="w-full bg-[#86a6a4] py-5 px-8 md:px-[8%] flex items-center">
        <p className="text-[10.5px] font-light text-white/90 tracking-wide">
          Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.
        </p>
      </div>
      
    </footer>
  );
}
