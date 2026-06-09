import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChjmxwdsGau22Pyjs5SAZqkxwogsXLKFXPsIlE8e9RhRTN_oxpgTUHQKsooYFxUeJM45j71ZlEuvpH15UQ05wxrO66sHiTmlicYUxnywf9GxbxAt470Jju8ov4PE_dHq02N_qamAluDifsHDmLvmtCJNPnfZ8krNUXH_IBKtp2Bt2jXkcfWNX4wwIisA_KLzFEqFks7K9KPgRueonJYUuB3e1FiV-fXGWYxA6bv4pckKE0ThQR8In9nzCVz2xjj-aT0IKT5rZrig"
            alt="Global Mission"
            fill
            className="object-cover grayscale opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-5 md:px-6 max-w-[1280px] mx-auto">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-[#b7d0fe] text-[#405880] text-xs font-semibold uppercase tracking-[0.2em]">
                International Mission Community
              </span>
              <h1 className="font-display font-bold text-[#04162e] tracking-tighter text-5xl md:text-6xl lg:text-7xl leading-tight">
                Bridging People
                <br />
                to Jesus Across
                <br />
                <span className="text-[#C5A059]">Nations</span>
              </h1>
            </div>

            <div className="bilingual-bridge space-y-3">
              <p className="font-sans text-lg text-[#44474d]">
                열방을 예수 그리스도께 연결하는 다리
              </p>
              <p className="font-sans text-[15px] leading-relaxed text-[#585062] max-w-xl">
                JBU Association은 기도와 제자훈련, 리더십 개발, 세계선교를 통해
                하나님 나라를 섬기는 선교 공동체입니다. 우리는 교회와 공동체,
                열방을 잇는 다리가 되어 하나님의 나라를 세워가고자 합니다.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/donate"
                className="bg-[#04162e] text-white px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:shadow-xl transition-all text-center"
              >
                Join Our Community
              </Link>
              <Link
                href="/works"
                className="border border-[#75777e] text-[#04162e] px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-[#04162e]/5 transition-all text-center"
              >
                Explore Works
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d]/50 mb-2">
            Scroll
          </span>
          <span className="material-symbols-outlined text-[#44474d]/50">
            arrow_downward
          </span>
        </div>
      </header>

      {/* Our Mission Section */}
      <section className="py-[120px] bg-[#f8f9fa]" id="mission">
        <div className="w-full px-5 md:px-6 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
            <div className="space-y-4">
              <p className="text-[#C5A059] font-sans text-xs font-semibold uppercase tracking-[0.05em]">
                Core Values
              </p>
              <h2 className="font-display font-bold text-[#04162e] text-4xl md:text-5xl">
                Our Mission | 우리의 사명
              </h2>
            </div>
            <p className="max-w-md text-[#44474d] text-base">
              We exist to connect people to Jesus Christ through prayer,
              discipleship, leadership development, and global mission.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Prayer */}
            <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-500 rounded-lg">
              <div className="p-10 flex flex-col justify-between h-full min-h-[320px]">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-4xl text-[#C5A059]">
                    folded_hands
                  </span>
                  <h3 className="font-display font-semibold text-[#04162e] text-2xl">
                    Deep Intercession
                  </h3>
                  <p className="text-[#44474d]">
                    Building a foundation of prayer that spans across borders
                    and cultures.
                  </p>
                </div>
                <div className="flex items-center border-t border-[#c5c6ce] pt-6 mt-6">
                  <span className="font-sans text-[15px] text-[#585062]">
                    열방을 향한 중보기도의 힘으로 사명을 시작합니다.
                  </span>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="md:col-span-4 bg-[#0F1A2A] text-white p-10 flex flex-col justify-center rounded-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/20 blur-3xl rounded-full -mr-16 -mt-16" />
              <h3 className="font-display font-semibold text-2xl mb-4">
                Leadership
              </h3>
              <p className="text-[#8292b0] text-base mb-8">
                Developing the next generation of spiritual leaders.
              </p>
              <div className="w-full h-px bg-white/10 mb-6" />
              <p className="font-sans text-[15px] opacity-80 italic">
                리더십 개발을 통한 제자훈련
              </p>
            </div>

            {/* Virtual Library */}
            <div className="md:col-span-4 bg-[#e7e8e9] rounded-lg overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbHzIjgPiFxCtLt_2V-zPFl2FGlWNUqDQdOcix9oAFxka4UPvGU4eyO30Tr7DbLUUmMk90vc-ALXxd5pT9_elQwnGcg5tGGluYt8zB0niLK8bHEn1L6LrGFJ8cGgnVrP5XYo8brN6FjCI1yRKM_gHIYxgIIolfeZswAtP9-NEWbyTAuTmHIrf20S0AnDheAFvNeCAB9kLzc28zmg9r9cu1FIYWuzMN076E51R4SqWCfYwLg8iqEAgCgJFsfE297M6yLdYyUvf-RQ"
                  alt="Virtual Library"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="font-display font-semibold text-[#04162e] text-2xl mb-2">
                  Virtual Library
                </h3>
                <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-[0.05em] mb-4">
                  IUTS &amp; Shalom QT
                </p>
                <p className="text-base text-[#44474d]">
                  Global access to spiritual resources and training materials.
                </p>
              </div>
            </div>

            {/* Global Outreach */}
            <div className="md:col-span-8 flex flex-col md:flex-row bg-white shadow-sm rounded-lg overflow-hidden border border-[#c5c6ce]/20">
              <div className="md:w-1/2 p-10 flex flex-col justify-center space-y-4">
                <h3 className="font-display font-semibold text-[#04162e] text-2xl">
                  Global Outreach
                </h3>
                <p className="text-base text-[#44474d]">
                  Connecting churches and communities worldwide to the message
                  of Jesus.
                </p>
                <Link
                  href="/mission"
                  className="inline-flex items-center text-[#04162e] font-sans text-xs font-semibold uppercase tracking-[0.05em] group"
                >
                  Learn More
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo_MTggYVF17cg6SyUQ7uaiZZQjurkN86RUSPUgIa6Hp4tB85tNckjWFA-1aooE4og8zDNSN7lsebu9e-5d4pHE1C2q_Ay3yiaUoGwQ93Ht45ykOAFQhkrzhiMmsIPejXoMQHLIgkMRELWJTgXmxKhKntzUPxqDmTog-_uycvGNh0jTGF3Hn4d1HPot4RlkUDueuDrMWRcbpl6B0PAgw0DNVNkLE583sWTaqSaNr5H_IJKoFybVU-2VIWgYMCrcz3grrcfOtZuPQ"
                  alt="Global Outreach"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Works CTA */}
      <section className="py-[120px] relative bg-[#0F1A2A]" id="works">
        <div className="w-full px-5 md:px-6 max-w-[1280px] mx-auto text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl">
              We look forward to serving you soon.
            </h2>
            <p className="font-sans text-2xl text-[#8292b0]">
              더 좋은 모습으로 찾아뵙겠습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            {[
              {
                icon: "menu_book",
                title: "IUTS",
                desc: "International Union of Theological Seminary resources.",
              },
              {
                icon: "wb_sunny",
                title: "Shalom QT",
                desc: "Daily spiritual guidance and quiet time meditations.",
              },
              {
                icon: "public",
                title: "JBU Global",
                desc: "Active mission works in churches across nations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 border border-white/10 hover:border-[#C5A059] transition-colors text-left space-y-4"
              >
                <span className="material-symbols-outlined text-[#C5A059]">
                  {item.icon}
                </span>
                <h4 className="font-display font-semibold text-white text-2xl">
                  {item.title}
                </h4>
                <p className="text-[#8292b0] text-base">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a
              href="mailto:jbuassociation@gmail.com"
              className="inline-flex items-center space-x-4 group"
            >
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all">
                <span className="material-symbols-outlined text-white">
                  mail
                </span>
              </span>
              <span className="text-white font-sans text-xs font-semibold uppercase tracking-[0.2em] group-hover:text-[#C5A059] transition-colors">
                jbuassociation@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
