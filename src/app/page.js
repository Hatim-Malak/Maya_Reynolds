import Header from "../components/Header";
import Hero from "../components/Hero";
import VideoSection from "../components/VideoSection";
import Introduction from "../components/Introduction";
import HowWeWork from "../components/HowWeWork";
import FinalQuote from "../components/FinalQuote";
import SpecialtiesSection from "../components/SpecialtiesSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function WhoWeHelp() {
  return (
    <section className="py-24 px-8 md:px-[8%] bg-white">
      <div className="w-full mx-auto">
        
        <div className="flex flex-col items-start mb-14">
          <h2 className="font-serif text-[2.75rem] leading-none text-foreground font-light">
            Who I <span className="font-cursive text-primary text-[4.5rem] leading-[0.5] ml-1 align-middle">help</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <div className="relative aspect-square mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773" 
                alt="Calm adult at ease" 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="font-serif text-[1.35rem] font-light text-foreground mb-4">Anxiety & Panic</h3>
            <p className="text-foreground/90 text-[11.5px] leading-[2.2] font-light pr-4">
              Constant worry, racing thoughts, body tension, and difficulty sleeping. I help adults understand what's driving their anxiety — and build <span className="text-primary font-normal">practical tools that help them feel steadier</span>, not just in session, but in <span className="text-primary font-normal">daily life.</span>
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <div className="relative aspect-square mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516585427167-9f4af9627e6c" 
                alt="Adult reflecting in therapy" 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="font-serif text-[1.35rem] font-light text-foreground mb-4">Trauma & PTSD</h3>
            <p className="text-foreground/90 text-[11.5px] leading-[2.2] font-light pr-4">
              I work with adults who have experienced <span className="text-primary font-normal">single-incident trauma</span> as well as more complex, long-standing patterns that may stem from <span className="text-primary font-normal">childhood, relationships, or chronic stress</span> — paced carefully, with an emphasis on <span className="text-primary font-normal">safety and stabilization</span>.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <div className="relative aspect-square mb-6 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494059980473-813e73ee784b" 
                alt="Professional taking time for herself" 
                className="object-cover w-full h-full object-bottom" 
              />
            </div>
            <h3 className="font-serif text-[1.35rem] font-light text-foreground mb-4">Burnout & Perfectionism</h3>
            <p className="text-foreground/90 text-[11.5px] leading-[2.2] font-light pr-4">
              Entrepreneurs, creatives, and professionals who feel <span className="text-primary font-normal">disconnected from themselves</span> after years of pushing through stress. A space to <span className="text-primary font-normal">slow down, reconnect,</span> and develop more <span className="text-primary font-normal">sustainable ways of living and working</span>.
            </p>
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
          src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop" 
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
  const leftCol = [
    "ANXIETY",
    "PANIC",
    "TRAUMA",
    "BURNOUT",
    "PERFECTIONISM",
    "STRESS"
  ];
  
  const rightCol = [
    "OVERTHINKING",
    "TROUBLE SLEEPING",
    "BODY TENSION",
    "RELATIONSHIPS",
    "SELF-CONFIDENCE",
    "...AND MORE."
  ];

  return (
    <section className="py-24 md:py-32 px-8 md:px-[8%] bg-white">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start">
        
        {/* Left Heading */}
        <div className="w-full md:w-[35%] mb-16 md:mb-0 pt-2">
          <h2 className="flex flex-col items-start font-serif text-[2.75rem] leading-none text-foreground font-light">
            <span>My areas of</span>
            <span className="font-cursive text-primary text-[5rem] leading-[0.5] mt-2">expertise</span>
          </h2>
        </div>
        
        {/* Right List */}
        <div className="w-full md:w-[55%] lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 lg:gap-x-16">
          
          <div className="flex flex-col">
            {leftCol.map((item, idx) => (
              <div 
                key={`left-${idx}`} 
                className={`py-6 border-b border-foreground/10 text-[9.5px] font-normal tracking-[0.2em] text-foreground/80 uppercase ${idx === 0 ? 'pt-2' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {rightCol.map((item, idx) => (
              <div 
                key={`right-${idx}`} 
                className={`py-6 border-b border-foreground/10 text-[9.5px] font-normal tracking-[0.2em] text-foreground/80 uppercase ${idx === 0 ? 'pt-2' : ''}`}
              >
                {item}
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <WhoWeHelp />
        <QuoteBanner />
        <WhatWeTreat />
        <HowWeWork />
        <FinalQuote />
        <SpecialtiesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
