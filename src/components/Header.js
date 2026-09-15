import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[120px] items-center justify-between bg-accent/95 backdrop-blur-sm border-b border-foreground/5 px-8 md:px-[8%] transition-all duration-500">
      <div className="flex flex-col items-start pt-2 max-w-[80%]">
        <Link href="/" className="font-serif text-[2rem] sm:text-[2.5rem] leading-none tracking-tight text-foreground font-light mb-2">
          Maya Reynolds
        </Link>
        <span className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-primary uppercase font-normal ml-0.5 leading-snug break-words">
          PsyD, Licensed Clinical Psychologist
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-10">
        <nav className="flex items-center gap-8 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
          <Link href="#about" className="hover:text-foreground hover:opacity-70 transition-all duration-300">About</Link>
          <Link href="#approach" className="hover:text-foreground hover:opacity-70 transition-all duration-300">Approach</Link>
          <Link href="#specialties" className="hover:text-foreground hover:opacity-70 transition-all duration-300">Specialties</Link>
          <Link href="#faqs" className="hover:text-foreground hover:opacity-70 transition-all duration-300">FAQs</Link>
        </nav>
        <Link href="#contact" className="border border-foreground/80 rounded-full px-8 py-3 text-xs font-medium tracking-[0.2em] hover:bg-foreground hover:text-background transition-all duration-500 uppercase ml-4 text-foreground">
          Contact
        </Link>
      </div>

      <button className="md:hidden text-foreground hover:opacity-70 transition-opacity">
        <Menu className="w-7 h-7 stroke-[1.5]" />
      </button>
    </header>
  );
}
