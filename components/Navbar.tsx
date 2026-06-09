"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [{href:"/",label:"Home"},{href:"/mission",label:"Our Mission"},{href:"/works",label:"Recent Works"},{href:"/contact",label:"Get in Touch"}];
export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fa]/90 backdrop-blur-md border-b border-[#c5c6ce]/30 h-20">
      <div className="flex justify-between items-center w-full px-5 md:px-6 max-w-[1280px] mx-auto h-full">
        <Link href="/" className="font-display font-bold tracking-tighter text-[#04162e] text-xl">JBU ASSOCIATION</Link>
        <div className="hidden md:flex items-center space-x-8">{navLinks.map((link) => (<Link key={link.href} href={link.href} className={`font-sans text-xs font-semibold uppercase tracking-[0.05em] transition-all duration-300 ${pathname === link.href ? "text-[#04162e] border-b-2 border-[#C5A059] pb-1" : "text-[#44474d] hover:text-[#C5A059]"}`}>{link.label}</Link>))}</div>
        <div className="flex items-center space-x-4"><Link href="/donate" className="bg-[#04162e] text-white px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-[#C5A059] transition-all duration-300 active:scale-95">Join Community</Link><button className="md:hidden text-[#04162e]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span className="material-symbols-outlined">{menuOpen ? "close" : "menu"}</span></button></div>
      </div>
      {menuOpen && (<div className="md:hidden bg-[#f8f9fa] border-b border-[#c5c6ce]/30 px-5 py-4 flex flex-col space-y-4">{navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`font-sans text-xs font-semibold uppercase tracking-[0.05em] ${pathname === link.href ? "text-[#04162e]" : "text-[#44474d]"}`}>{link.label}</Link>))}<Link href="/donate" onClick={() => setMenuOpen(false)} className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#C5A059]">Donate</Link></div>)}
    </nav>
  );
}
