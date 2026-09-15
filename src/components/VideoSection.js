import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="watch" className="py-24 px-6 md:px-[5%] bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <p className="font-sans text-sm uppercase tracking-widest text-primary mb-4 font-semibold opacity-0 animate-fade-up">
          Welcome to WaveFlow
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-center opacity-0 animate-fade-up delay-100">
          Begin your journey to <span className="text-primary italic">recovery</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mb-12 text-lg opacity-0 animate-fade-up delay-200">
          Discover a warm, inviting space designed for healing. Watch our brief video to see what to expect during your first session with us.
        </p>

        <div className="w-full aspect-video rounded-3xl overflow-hidden relative group cursor-pointer shadow-2xl opacity-0 animate-fade-up delay-300">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Therapy Session" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <details className="w-full max-w-2xl mt-12 group opacity-0 animate-fade-up delay-300 cursor-pointer">
          <summary className="font-sans text-sm uppercase tracking-widest text-primary font-semibold text-center list-none outline-none hover:text-primary/80 transition-colors">
            Read the transcript
          </summary>
          <div className="mt-8 p-6 rounded-2xl bg-muted/30 border border-border">
            <ol className="list-decimal list-inside space-y-4 text-muted-foreground leading-relaxed">
              <li>Welcome to WaveFlow Therapy.</li>
              <li>We know that taking the first step is often the hardest part.</li>
              <li>That's why we've created a space that feels less like a clinic, and more like a sanctuary.</li>
              <li>When you arrive, you'll be greeted with warmth and compassion.</li>
              <li>Our expert therapists are here to listen, validate, and guide you.</li>
              <li>Whether you're dealing with anxiety, depression, or a major life transition...</li>
              <li>You don't have to navigate it alone.</li>
              <li>We use evidence-based practices tailored to your unique story.</li>
              <li>Together, we'll rebuild your foundation on solid ground.</li>
              <li>Schedule a free consultation today, and let's begin.</li>
            </ol>
          </div>
        </details>
      </div>
    </section>
  );
}
