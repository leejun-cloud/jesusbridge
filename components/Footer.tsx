import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1A2A] border-t border-white/10" id="contact">
      <div className="w-full px-5 md:px-6 max-w-[1280px] mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-white text-xl tracking-tighter">JBU ASSOCIATION</h2>
            <p className="text-[#8292b0]/70 text-base max-w-sm">Jesus Bridge Us. Bridging People to Jesus Across Nations through prayer, discipleship, and global mission.</p>
          </div>
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-white font-sans text-xs font-semibold uppercase tracking-[0.05em]">Navigation</h3>
            <ul className="space-y-4">
              {[{href:"/",label:"Home"},{href:"/mission",label:"About Us"},{href:"/works",label:"Recent Works"},{href:"/donate",label:"Donate"}].map((link) => (
                <li key={link.href}><Link href={link.href} className="text-[#8292b0]/70 hover:text-white transition-colors text-base">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-white font-sans text-xs font-semibold uppercase tracking-[0.05em]">Headquarters</h3>
            <div className="flex items-start space-x-4 text-[#8292b0]/70">
              <span className="material-symbols-outlined text-[#C5A059]">location_on</span>
              <p className="text-base">740 S Hobart Blvd<br/>Los Angeles, CA 90005</p>
            </div>
            <div className="flex items-center space-x-4 text-[#8292b0]/70">
              <span className="material-symbols-outlined text-[#C5A059]">mail</span>
              <a href="mailto:jbuassociation@gmail.com" className="text-base hover:text-white transition-colors">jbuassociation@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 text-[#8292b0]/70">
              <span className="material-symbols-outlined text-[#C5A059]">language</span>
              <p className="text-base">jbridge.us</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[#8292b0]/50 text-xs font-semibold uppercase tracking-[0.05em]">
          <p>© 2024 JBU Association. Bridging People to Jesus Across Nations.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
