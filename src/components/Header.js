import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative z-50 flex h-[140px] items-center justify-between bg-background px-8 md:px-[8%]">
      <div className="flex flex-col items-start pt-2">
        <Link href="/" className="font-serif text-[2.75rem] leading-none tracking-tight text-foreground font-light mb-2.5">
          Maya Reynolds
        </Link>
        <span className="text-[9px] tracking-[0.4em] text-primary uppercase font-normal ml-0.5">
          PsyD, Licensed Clinical Psychologist
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-12">
        <nav className="flex items-center gap-10 text-[9px] font-normal tracking-[0.2em] text-muted uppercase">
          <Link href="#about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="#approach" className="hover:text-foreground transition-colors">Approach</Link>
          <Link href="#specialties" className="hover:text-foreground transition-colors">Specialties</Link>
          <Link href="#faqs" className="hover:text-foreground transition-colors">FAQs</Link>
        </nav>
        <Link href="#contact" className="border border-foreground rounded-[100px] px-8 py-3.5 text-[9px] font-normal tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors uppercase ml-4 text-foreground">
          Contact
        </Link>
      </div>

      <button className="md:hidden text-foreground">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
