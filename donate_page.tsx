import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Support Our Mission | JBU Association",
  description:
    "Partner with JBU Association to bridge people to Jesus across nations.",
};

const projects = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChdOEVjPs5EznPFTQlwxZ-EsTkTFkjR9dPfESTEznzwxFNuBGlcTkjR9dPfESTEznzwxFNuBGlcTkjR9dPfESTEznzwxFNuBGlcTkjR9dPfESTEz",
    fallbackSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChdOEVjPs5EznPFTQlwxZ-EsTkTFpTn9oG3lqojtqMSmk3jMY4LMDm4snSZVBaSrdYAOnpRXSLr1YgialFcHH7SAorMw-jdvR1nX9NODHTMZdwtgFA6ZVkiR6R93GMIxXn5JEjkTWWNKK8aO8znQ-QFqayORHSYbnwePzRUJoIS3LU427z8VYcLmhaszYjNvmJwjxLvQ9Z8aM_-5p76Q4nWhvF_Bp3VS6JuRhKbEekPkMNpqDS3geHevJ2pYrIP-vQsiL7re_FGg",
    category: "Education",
    title: "IUTS Seminary Expansion",
    desc: "Expanding our theological footprint to equip 500 new ministry leaders across South East Asia with modern facilities and digital resources.",
    percent: 75,
    raised: "$150,000",
    goal: "$200,000",
  },
  {
    fallbackSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC5WGwit0HNyE-_iblLohOmJkG4AmES9cNrEustzQg_GEbHrP4Gz7Al42jeM_pPbJU33TdQR6f5TAgP04fuzOy5IYUY1qHD8JAc1Z9UJYIEooa5VSGKCMIIMWeAXTpaNZaOe8LGlQfkVqrWm04y-hXl6xHGQITatK9R6izW88Gj8gpYtPCceSdsE5-y-AaXHTipVB2lGYH4qEpdRYvuiHOaN3Eld2SkdEo6jLYvdNVp7m-f3bPQw77NbH1S_7Aoz3Xk3oam8tAbNQ",
    category: "Resources",
    title: "Shalom QT Translation",
    desc: "Translating our daily devotional series into 5 major languages to reach unreached communities with daily spiritual bread.",
    percent: 42,
    raised: "$21,000",
    goal: "$50,000",
  },
  {
    fallbackSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBUgvAIdTpBs0JNm0-u-cVnCIJuJbKhQreg8BdAgO1qENWTTLG7CttnY4Dszi-qN3ZajkoRgjVp9ZzfGCwSgN6w16UImdtyCvJ1SqYpw_oeXmkSn8fnZmgq87eaPQMENOVVuiBZn0WoSizDcRrTcHrHwBnpumqtqLX7q26b6FLpbgYdCinmmj6ihPhWtPdXdjQ43GE7tHx6P-LE0ypkFC7vR5YAmYophMnVeLCGt7GybLXEziCfVoQj95tmV_MEQp95rsSSNi63VQ",
    category: "Global Mission",
    title: "Global Mission Bridge",
    desc: "Supporting logistics and deployment for short-term and long-term mission teams serving in high-need regions globally.",
    percent: 90,
    raised: "$90,000",
    goal: "$100,000",
  },
];

const trustItems = [
  {
    icon: "handshake",
    title: "100% Integrity",
    desc: "We ensure that 100% of designated funds go directly to the field operations.",
  },
  {
    icon: "analytics",
    title: "Annual Reporting",
    desc: "Transparency through independently audited financial reports published annually.",
  },
  {
    icon: "history_edu",
    title: "Mission First",
    desc: "Every dollar spent is measured against our core mission of spiritual bridging.",
  },
  {
    icon: "public",
    title: "Global Network",
    desc: "Partnered with trusted local leaders across 24 countries for maximum impact.",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#04162e] z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGkmNqMTy9eopAiIAg_BNl0562RSZqylVCMow-06C3HUI75WhuAGFULESnV0Ilen1QyL98hl5OmkYlj95AsbztjFEbUzOLOs3mHbowfoEoDWIg2KuqupG8ggzHHUW1lWdaWKFVBGsupvyNxPvYyIAOTw-hAr_PzgMkt2JYbgIv0RiuKIDzTSAGqt2icWo4sqTJoDgN9P3Yf8ra5gPz8_utSy1ANX3ZObHUh3edad4fCaXIaglTmIvEUVXYUxyinjVyWRMgGGgHGQ"
            alt="Donate Hero"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04162e] via-[#04162e]/80 to-transparent" />
        </div>
        <div className="relative z-10 px-5 md:px-24 max-w-[1280px] mx-auto w-full">
          <div className="max-w-3xl space-y-6">
            <span className="inline-block text-[#ffdea5] font-sans text-xs font-semibold tracking-[0.2em] uppercase">
              Supporting Eternal Impact
            </span>
            <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-tight">
              Invest in <br />
              <span className="text-[#E6D5B8]">Eternal Impact</span>
            </h1>
            <p className="text-[#8292b0] text-lg max-w-2xl leading-relaxed">
              Join us in building bridges across cultures through global
              missions, equipping the next generation of leaders, and providing
              spiritual resources to the ends of the earth.
              <br />
              <span className="text-sm opacity-60">
                온 세계 열방을 향한 영적 교두보를 함께 세워갑니다.
              </span>
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="bg-[#775a19] hover:bg-[#775a19]/90 text-white px-8 py-4 rounded font-sans text-xs font-semibold uppercase tracking-[0.05em] transition-all inline-flex items-center gap-2 group"
              >
                VIEW PROJECTS
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <Link
                href="/mission"
                className="border border-[#E6D5B8] text-[#E6D5B8] hover:bg-[#E6D5B8] hover:text-[#04162e] px-8 py-4 rounded font-sans text-xs font-semibold uppercase tracking-[0.05em] transition-all"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        className="py-[120px] px-5 md:px-24 max-w-[1280px] mx-auto"
        id="projects"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="font-display font-bold text-[#04162e] text-4xl md:text-5xl">
              Active Missions
            </h2>
            <p className="text-[#75777e] text-base">
              Current opportunities to partner in our global vision.
            </p>
          </div>
          <div className="w-24 h-px bg-[#775a19] hidden md:block mb-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-[#c4c6cd] overflow-hidden hover:shadow-xl transition-all flex flex-col h-full"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={project.fallbackSrc}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#04162e] text-white px-3 py-1 text-xs font-medium tracking-wider uppercase">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display font-semibold text-2xl mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#44474c] mb-6 line-clamp-3">
                  {project.desc}
                </p>
                <div className="mt-auto space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="font-sans text-xs font-semibold text-[#775a19] uppercase tracking-wider">
                      {project.percent}% Funded
                    </span>
                    <span className="text-sm text-[#74777d]">
                      {project.raised} / {project.goal}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#edeeef] rounded-full overflow-hidden">
                    <div
                      className="bg-[#775a19] h-full rounded-full"
                      style={{ width: `${project.percent}%` }}
                    />
                  </div>
                  <button className="w-full py-3 bg-[#04162e] text-white rounded font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-[#775a19] transition-all active:scale-[0.98]">
                    DONATE NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Partnership */}
      <section className="bg-[#0D151E] py-[120px] overflow-hidden relative">
        <div className="relative z-10 px-5 md:px-24 max-w-[1280px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
                Become a <br />
                <span className="text-[#e9c176]">Mission Partner</span>
              </h2>
              <p className="text-[#8192a7] text-lg">
                Monthly partners are the lifeblood of our association. Your
                consistent support allows us to plan with confidence and respond
                quickly to global needs.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: "auto_graph",
                    title: "Sustainable Growth",
                    desc: "Long-term vision support.",
                  },
                  {
                    icon: "verified_user",
                    title: "Priority Reporting",
                    desc: "Monthly impact updates.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 border border-white/30 rounded flex items-start gap-4 hover:border-[#775a19] transition-colors"
                  >
                    <span className="material-symbols-outlined text-[#775a19] text-3xl">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-sm text-[#8192a7]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 md:p-12 shadow-2xl rounded-lg">
                <h3 className="font-display font-semibold text-[#04162e] text-2xl mb-6">
                  Start Your Partnership
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-3 flex-wrap">
                    {["$25/mo", "$50/mo", "$100/mo", "Other"].map(
                      (amount, i) => (
                        <button
                          key={amount}
                          className={`px-6 py-3 border rounded font-bold transition-colors text-sm ${
                            i === 1
                              ? "border-[#775a19] bg-[#775a19]/10 text-[#775a19]"
                              : "border-[#74777d] hover:border-[#775a19]"
                          }`}
                        >
                          {amount}
                        </button>
                      )
                    )}
                  </div>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full border-b border-[#B1ACA8] bg-transparent py-3 focus:border-[#775a19] focus:ring-0 outline-none transition-colors text-base"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full border-b border-[#B1ACA8] bg-transparent py-3 focus:border-[#775a19] focus:ring-0 outline-none transition-colors text-base"
                    />
                  </div>
                  <button className="w-full py-4 bg-[#04162e] text-white rounded font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-[#775a19] transition-colors">
                    SET UP RECURRING GIFT
                  </button>
                  <p className="text-[11px] text-center text-[#74777d] uppercase tracking-wider">
                    Secure SSL Encrypted Transaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-24 px-5 md:px-24 bg-[#f3f4f5] border-y border-[#c4c6cd]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            {trustItems.map((item) => (
              <div key={item.title} className="space-y-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto md:mx-0 shadow-sm">
                  <span className="material-symbols-outlined text-[#775a19]">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-[#04162e]">{item.title}</h4>
                <p className="text-sm text-[#44474c]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
