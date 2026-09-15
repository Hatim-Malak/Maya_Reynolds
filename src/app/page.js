import Header from "../components/Header";
import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
import HowWeWork from "../components/HowWeWork";
import FinalQuote from "../components/FinalQuote";
import OurOffice from "../components/OurOffice";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function WhoWeHelp() {
  return (
    <section className="py-24 px-8 md:px-[8%] bg-accent">
      <div className="w-full mx-auto">
        
        <div className="flex flex-col items-start mb-14">
          <h2 className="font-serif text-[2.75rem] leading-none text-foreground font-light">
            Who I <span className="font-cursive text-primary text-[4.5rem] leading-[0.5] ml-1 align-middle">help</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" 
                alt="Calm adult at ease" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-[1.03]" 
              />
            </div>
            <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-4">Anxiety & Panic</h3>
            <p className="text-foreground/80 text-base leading-relaxed font-light mb-6 pr-4">
              Support for navigating persistent worry, panic, and feeling constantly on edge.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-foreground uppercase mt-auto">
              <span className="group-hover:opacity-70 transition-opacity">Explore</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c" 
                alt="Adult reflecting in therapy" 
                className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-[1.03]" 
              />
            </div>
            <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-4">Trauma & PTSD</h3>
            <p className="text-foreground/80 text-base leading-relaxed font-light mb-6 pr-4">
              A safe, collaborative space to process difficult experiences and move forward.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-foreground uppercase mt-auto">
              <span className="group-hover:opacity-70 transition-opacity">Explore</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col group cursor-pointer">
            <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1494059980473-813e73ee784b" 
                alt="Professional taking time for herself" 
                className="object-cover w-full h-full object-bottom transform transition-transform duration-700 group-hover:scale-[1.03]" 
              />
            </div>
            <h3 className="font-serif text-[1.5rem] font-light text-foreground mb-4">Burnout & Perfectionism</h3>
            <p className="text-foreground/80 text-base leading-relaxed font-light mb-6 pr-4">
              Support for people who feel exhausted from always trying to do more.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-foreground uppercase mt-auto">
              <span className="group-hover:opacity-70 transition-opacity">Explore</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-[8%] relative flex items-center justify-start overflow-hidden min-h-[550px]">
      <div className="absolute inset-0 z-0">
        <img 
          src="./conversation.jpeg" 
          alt="Background Texture" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-stone-900/50"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.4rem] leading-[1.5] font-light text-white">
          I believe therapy works best when clients feel <span className="italic">respected, understood,</span> and actively involved in the process. My goal is not just <span className="italic">symptom relief</span> — it's insight, resilience,<br/>
          <span className="italic">and a stronger relationship</span> with yourself.
        </h2>
      </div>
    </section>
  );
}

function WhatWeTreat() {
  const expertiseList = [
    "Anxiety & Panic",
    "Trauma & PTSD",
    "Burnout & Perfectionism",
    "Life Transitions",
    "Self-Esteem",
    "Relationship Patterns",
    "Stress & Overwhelm"
  ];

  return (
    <section className="py-24 md:py-32 px-8 md:px-[8%] bg-secondary">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Heading */}
        <div className="w-full md:w-[40%] mb-16 md:mb-0 pt-2">
          <h2 className="flex flex-col items-start font-serif text-[2.75rem] sm:text-5xl lg:text-[4rem] leading-none text-foreground font-light">
            <span>My areas of</span>
            <span className="font-cursive text-accent text-[5rem] lg:text-[6.5rem] leading-[0.5] mt-4 lg:mt-6">expertise</span>
          </h2>
        </div>
        
        {/* Right Editorial List */}
        <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col">
          {expertiseList.map((item, idx) => (
            <a 
              key={idx} 
              href="#contact"
              className="group flex items-center justify-between py-6 border-b border-foreground/10 hover:border-foreground/30 transition-colors duration-300"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xs text-foreground/50 font-normal tracking-[0.2em]">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <span className="text-lg md:text-xl font-light text-foreground group-hover:text-primary transition-colors duration-300">
                  {item}
                </span>
              </div>
              <span className="text-foreground/50 transform group-hover:translate-x-1 group-hover:text-primary transition-all duration-300">
                &rarr;
              </span>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col font-sans bg-accent text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <WhoWeHelp />
        <QuoteBanner />
        <WhatWeTreat />
        <HowWeWork />
        <OurOffice />
        <FinalQuote />
        <SpecialtiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
