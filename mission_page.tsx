import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Mission | JBU Association",
  description:
    "JBU Association's mission to bridge people to Jesus across nations through prayer, discipleship, leadership, and global mission.",
};

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 overflow-hidden bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10">
          <div className="max-w-3xl bridge-line-left">
            <h1 className="font-display font-bold text-[#04162e] text-5xl md:text-7xl leading-tight mb-4">
              Bridging People to Jesus Across Nations
            </h1>
            <h2 className="font-display font-bold text-[#C5A059] text-4xl md:text-5xl mb-8">
              열방을 예수 그리스도께 연결하는 다리
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <p className="font-sans text-lg text-[#44474d]">
                JBU Association is a mission community dedicated to prayer,
                discipleship, leadership development, and global mission.
              </p>
              <p className="font-sans text-[15px] text-[#44474d]">
                JBU Association은 기도와 제자훈련, 리더십 개발, 세계선교를 통해
                하나님 나라를 섬기는 선교 공동체입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block py-1 px-3 bg-[#b7d0fe] text-[#405880] font-sans text-xs font-semibold uppercase tracking-[0.05em] mb-6">
                Our Mission | 우리의 사명
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="font-display font-semibold text-[#04162e] text-2xl leading-relaxed">
                    JBU Association exists to connect people to Jesus Christ
                    through prayer, discipleship, leadership development, and
                    global mission. We seek to build bridges among churches,
                    communities, and nations for the glory of God.
                  </p>
                  <p className="font-sans text-lg text-[#44474d] font-medium">
                    JBU Association은 기도와 제자훈련, 리더십 개발, 세계선교를
                    통해 사람들을 예수 그리스도께 연결하는 사명을 감당합니다.
                    우리는 교회와 공동체, 열방을 잇는 다리가 되어 하나님의
                    나라를 세워가고자 합니다.
                  </p>
                </div>
                <div className="w-24 h-1 bg-[#C5A059]" />
              </div>
            </div>
            <div className="lg:col-span-5 relative h-[500px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQUF5F1p8sdfOu1TYwulUndVjj5G81Abnnuc-qfDtWDTy-3qakaHYjZT9Z7Bd0eXIDeCRnNg_Z5Hh7FI1gGYKQmF40p19_0K_IPWZot-lhbYFQj7mSncJ1Po1lLuTJYu6ERVLiMQlxiFvh148B84sCsV43WVWJIubeMtr6fkGyurZamo0bo-bb5yH1SaB4y3eQ3PBr1vwAzP49mwel6F4XzlOKqZXr_lE6TRvkqY9X-Lu1RwR7Etx--MaK6Yk9yfU_4FIlk1l13Q"
                alt="Mission"
                fill
                className="object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#04162e] p-8 hidden md:block">
                <span className="material-symbols-outlined text-white text-5xl">
                  language
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-[120px] bg-[#f8f9fa]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <div className="text-center mb-16">
            <h3 className="font-display font-bold text-[#04162e] text-4xl md:text-5xl mb-2">
              The Four Pillars
            </h3>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              사역의 네 기둥
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Prayer */}
            <div className="bg-white p-8 border border-[#c5c6ce]/30 flex flex-col justify-between hover:border-[#C5A059] transition-all group shadow-sm">
              <div>
                <span className="material-symbols-outlined text-3xl text-[#04162e] group-hover:text-[#C5A059] transition-colors">
                  prayer_times
                </span>
                <h4 className="font-display font-semibold text-2xl mt-4 mb-2">
                  Prayer
                </h4>
                <p className="font-sans text-xs font-semibold text-[#585062] mb-4 uppercase tracking-[0.05em]">
                  기도
                </p>
                <p className="text-base text-[#44474d]">
                  The foundation of our connection with the Father, seeking His
                  heart for the nations through intercession and spiritual
                  communion.
                </p>
              </div>
            </div>

            {/* Discipleship */}
            <div className="relative overflow-hidden group min-h-[320px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2tGGHszGcyL4skzhGPJ6fn-oCo8N9tjvCqcHkWPUzeCz83p56DZSS0jLctWDPJy7IuE7QcsreBdDpysoy6MOVr5AojXpcU370AvvJGBU5FGy-O5Ci_6_GQXfXCakOU837dNGlEPa3ht5bp9wtVLQAs7Y64psUpkCKDzPOOZf46batc-7gSGQnsH7LdgWQjRSuote3aYY9hFjBpGk_fZx_B41NQ2Isn_yt5ww2WzH6nr1dIKLLFiDwak_HOlEAPEk_5wYv00Wr4g"
                alt="Discipleship"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2A] to-transparent p-8 flex flex-col justify-end text-white">
                <h4 className="font-display font-semibold text-2xl">
                  Discipleship
                </h4>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#C5A059]">
                  제자훈련
                </p>
              </div>
            </div>

            {/* Leadership */}
            <div className="bg-[#0F1A2A] p-8 flex flex-col justify-center shadow-sm">
              <span className="material-symbols-outlined text-3xl text-[#C5A059] mb-4">
                groups
              </span>
              <h4 className="font-display font-semibold text-2xl text-white">
                Leadership
              </h4>
              <p className="font-sans text-xs font-semibold text-[#b6c7e7] uppercase tracking-[0.05em] mb-2">
                리더십 개발
              </p>
              <p className="text-base text-[#8292b0]">
                Empowering the next generation of spiritual leaders to serve
                with integrity and vision.
              </p>
            </div>

            {/* Global Mission */}
            <div className="bg-white p-8 flex flex-col justify-center shadow-sm border border-[#c5c6ce]/30 hover:bg-[#f3f4f5] transition-colors group">
              <div className="w-24 h-24 mb-6 relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5JDacU7MZSTf2msA7756mIARlb2uVbhKaaQ8VXQGTECLbOYzZg8unBuvwgFHk-SYN9na91ohSH0W-Ax_DehOIWbk32qv8NLGH31eAfWdZ3XIU2518nx6SEWw6eyCkOnvxb6-TeKmcXXdhGQ4Ps7JGa6WMOoERa4rnx93DdQA-SmztlqH_9CywwmhqTrudd-UPXz7E0dsBy-jCYxg8sUucG4rue92rL3lGq3hAVea-MGJcLdNmT9NioiwWsFEjSeTPXqbl07Gag"
                  alt="Global Mission"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h4 className="font-display font-semibold text-[#04162e] text-2xl">
                Global Mission
              </h4>
              <p className="font-sans text-xs font-semibold text-[#C5A059] uppercase tracking-[0.05em] mb-4">
                세계선교
              </p>
              <p className="text-base text-[#44474d]">
                Bridging cultures and languages to carry the message of hope to
                every corner of the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] relative bg-[#04162e]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 text-center relative z-10">
          <h2 className="font-display font-bold text-white text-5xl md:text-7xl mb-4">
            Join Our Journey
          </h2>
          <p className="font-display font-semibold text-[#b6c7e7] text-2xl mb-8">
            우리의 여정에 함께하세요
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              href="/donate"
              className="bg-[#C5A059] text-[#04162e] font-sans text-xs font-semibold uppercase tracking-[0.05em] px-10 py-4 hover:bg-white transition-all duration-300"
            >
              Donate Now
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white font-sans text-xs font-semibold uppercase tracking-[0.05em] px-10 py-4 hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
