import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Recent Works | JBU Association",
  description:
    "Showcasing JBU Association's global mission initiatives, leadership development, and community-driven projects.",
};

const stats = [
  { value: "12+", label: "Nations Reached" },
  { value: "5k+", label: "Students Trained" },
  { value: "200+", label: "Digital Resources" },
  { value: "24/7", label: "Prayer Network" },
];

export default function WorksPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden bg-[#0F1A2A] py-24 md:py-32 pt-40">
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-6">
          <div className="bridge-line-left pl-8 border-l-2 border-[#C5A059]">
            <h1 className="font-display font-bold text-white text-5xl md:text-7xl mb-6">
              Recent Works
            </h1>
            <div className="flex flex-col gap-3">
              <p className="font-sans text-lg text-[#b6c7e7] max-w-2xl">
                Showcasing our global mission initiatives, leadership
                development, and community-driven projects.
              </p>
              <p className="font-sans text-[15px] text-[#8292b0]/80 max-w-2xl">
                세계 선교 활동, 리더십 개발 및 지역 사회 프로젝트를 소개합니다.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Bento Portfolio Grid */}
      <section className="py-[120px] max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Virtual Library — Feature */}
          <div className="md:col-span-8 md:row-span-2 group relative overflow-hidden rounded shadow-xl bg-[#212121] min-h-[400px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXque8xuXao4EuFdwQn6BLP41CVbGVAqbv6-19lQHk8sdLFhHerj8-OXkww0_tv80uV9fAZ18e-6K9z3tnjRbCDAY5tjX0ScM_yafpma6198b_ZcWygoeug2RGTiC4TBtuRdxtkiM4bx9vphFt_sGN0QsWvz98klPfXbg9k9dPjxm5xb0BOQVHjUrBrem0yRa2zZhHyF4Yl8pmwO3zzNOf4WHFbcetZf7V8Fs0obvz3uvSLxd7KzHq5sa7FkV1GrQqBdHR3Bs80w"
              alt="Virtual Library"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A2A] via-[#0F1A2A]/40 to-transparent p-12 flex flex-col justify-end">
              <div className="mb-4">
                <span className="inline-block bg-[#C5A059] text-[#04162e] font-sans text-xs font-semibold px-3 py-1 uppercase tracking-[0.05em] mb-4">
                  Core Initiative
                </span>
                <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-2">
                  Virtual Library
                </h2>
                <p className="text-base text-[#8292b0]/90 max-w-lg mb-4">
                  Bridging the educational gap by providing digital access to
                  Christian resources across nations.
                </p>
                <p className="font-sans text-[15px] text-[#8292b0]/70 max-w-lg">
                  디지털 라이브러리를 통해 열방에 기독교 자원을 제공하며 교육의
                  격차를 해소합니다.
                </p>
              </div>
              <button className="flex items-center gap-2 text-white font-sans text-xs font-semibold uppercase tracking-[0.05em] group-hover:text-[#C5A059] transition-colors w-fit">
                Explore Collection
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Shalom QT */}
          <div className="md:col-span-4 group relative overflow-hidden rounded bg-[#e7e8e9] shadow-md min-h-[220px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlrU-5QwYRcg8ZUsaULDXBL_LOpml8jix14vd2rfqmjsQ1IGnQU2l-zg4r3oRHASVfC0d686bxLdQJXJ_ufxjt1XhIlQehegX-YZeFXupTjXQfpmOjk2MPHh7FSSZDmg7XF-2AgExX--Y8ppBkwNqkl_4Gxri4z4kgHPSRdn-erdmQ4VZqVvDiOxqtvMOTcPwmw5rZJ8U4tKW1yteS3RmJDiF9uCgsN6Lcf73lQWxxaCn8h7pf4SaNzKPv4lprGSO9m4SWPn1Tfg"
              alt="Shalom QT"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04162e]/80 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-display font-semibold text-white text-2xl mb-2">
                Shalom QT
              </h3>
              <p className="font-sans text-xs font-semibold text-[#b6c7e7] uppercase tracking-[0.05em]">
                Daily Spiritual Bridge
              </p>
            </div>
          </div>

          {/* IUTS */}
          <div className="md:col-span-4 relative overflow-hidden rounded bg-[#0F1A2A] shadow-md min-h-[220px]">
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-display font-semibold text-white text-2xl mb-2">
                IUTS Program
              </h3>
              <p className="text-base text-[#8292b0] mb-2">
                Intensive Leadership Training
              </p>
              <p className="font-sans text-[15px] text-[#8292b0]/70">
                집중 리더십 훈련 프로그램을 통해 다음 세대 지도자를 양성합니다.
              </p>
            </div>
          </div>

          {/* Global Mission */}
          <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded shadow-xl min-h-[320px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5Stlt1nKBpXiL8hlWN2biOlyxRo-n5K6zxtx7Dh72TsauAJBk2zfErSWv8Vqea3yWZRUSTdFTq5co7HpDMzFeOY5vsnqBOcS2xAQ_xXUf2escKpLbiwpUP2JmCVXJaRLPy2dx9SYJEPUi0twdDc26vrMWwKhmx14QTMeNOdl_0cm1RToZTcEyaB7Nzw_OlWo6Efyq3KQbggRbMa-oLpIZ0JiGMRYW4cCbvvA0bv-JJBuji9GqyBigabf7b334V-_8U1MJiBCHJg"
              alt="Global Mission"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04162e]/90 via-[#04162e]/20 to-transparent p-8 flex flex-col justify-end">
              <h3 className="font-display font-semibold text-white text-2xl mb-2">
                Global Mission
              </h3>
              <p className="text-base text-[#8292b0]/90 mb-4">
                Building bridges among churches and communities worldwide for
                the glory of God.
              </p>
              <div className="w-12 h-1 bg-[#C5A059]" />
            </div>
          </div>

          {/* Community Impact */}
          <div className="md:col-span-8 group relative overflow-hidden rounded bg-[#f3f4f5] shadow-sm p-8 flex flex-col md:flex-row items-center gap-8 border border-[#c5c6ce]/20 hover:border-[#C5A059]/50 transition-colors">
            <div className="w-full md:w-1/3 aspect-square overflow-hidden rounded relative min-h-[160px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdrbpfrdv5FDYtGsajxDK2lCqSsFLGh6m0dsRrG3L7Ysi2kS__2js9FULQfcaobPZZodLiZu90P-SooJzD21HuVTXdSF47x8fRn6aDhJl7jzy1o-1rWQn8_BdOjVbj5tAlmBFaVcJ-rUU1CQBjjsW27TuRiWgoY_lqZGcq4dQshGgMFAaLhkpGV2VKzQClO7gFNHaqjYzIKgwM3WJTN6GCgxT5HufAtwrACXX8RF6yDww-JXgHvEAz3vZ-1mPh-AtDk5AiwfZDA"
                alt="Community Impact"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="font-display font-semibold text-[#04162e] text-2xl mb-3">
                Community Resilience
              </h3>
              <p className="text-base text-[#44474d] mb-4">
                Empowering local communities through sustainable development and
                prayer-centered initiatives.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#C5A059] font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:underline"
              >
                Read Impact Report
                <span className="material-symbols-outlined">description</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f8f9fa] py-24 border-y border-[#c5c6ce]/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-bold text-[#04162e] text-4xl md:text-5xl mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-xs font-semibold text-[#44474d] uppercase tracking-[0.05em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-[120px]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6">
          <div className="bg-[#04162e] p-12 md:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 text-center md:text-left">
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
                Partner With Us
              </h2>
              <div className="flex flex-col gap-3">
                <p className="font-sans text-lg text-[#8292b0]">
                  We look forward to serving you soon.
                </p>
                <p className="font-sans text-[15px] text-[#8292b0]/80">
                  더 좋은 모습으로 찾아뵙겠습니다.
                </p>
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="bg-[#C5A059] text-[#04162e] px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-white transition-all duration-300"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="border border-[#8292b0] text-white px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.05em] hover:bg-white/10 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
