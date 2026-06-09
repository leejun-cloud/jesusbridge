export const metadata = {
  title: "Get in Touch | JBU Association",
  description: "Connect with JBU Association. Bridging people to Jesus across nations.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[409px] min-h-[300px] flex items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 text-center px-5">
          <h1 className="font-display font-bold text-[#04162e] text-5xl md:text-7xl mb-2">
            Get in Touch
          </h1>
          <div className="flex flex-col items-center gap-3">
            <p className="font-sans text-lg text-[#475f87]">
              We look forward to serving you soon.
            </p>
            <p className="font-sans text-[15px] text-[#44474d]">
              더 좋은 모습으로 찾아뵙겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-5 md:px-6 py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bridge-line-left">
              <h2 className="font-display font-bold text-[#04162e] text-4xl md:text-5xl mb-2">
                Connect With Us
              </h2>
              <p className="font-sans text-[15px] text-[#44474d]">
                언제든지 문의해 주세요. 함께 동역하기를 원합니다.
              </p>
            </div>

            <div className="grid gap-8 mt-12">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#edeeef] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#04162e]">
                    location_on
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#C5A059] mb-1">
                    Office Address
                  </h3>
                  <p className="text-base text-[#191c1d]">
                    740 S Hobart Blvd
                    <br />
                    Los Angeles, CA 90005
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#edeeef] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#04162e]">
                    mail
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#C5A059] mb-1">
                    Email Contact
                  </h3>
                  <a
                    href="mailto:jbuassociation@gmail.com"
                    className="text-base text-[#191c1d] hover:text-[#C5A059] transition-colors"
                  >
                    jbuassociation@gmail.com
                  </a>
                </div>
              </div>

              {/* Web */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#edeeef] flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#04162e]">
                    public
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#C5A059] mb-1">
                    Digital Presence
                  </h3>
                  <p className="text-base text-[#191c1d]">jbridge.us</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-12 w-full aspect-video bg-[#e7e8e9] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 flex items-center justify-center">
              <div className="text-center space-y-2">
                <span className="material-symbols-outlined text-4xl text-[#C5A059]">
                  location_on
                </span>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d]">
                  740 S Hobart Blvd, Los Angeles
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(26,43,68,0.06)] border border-[#c5c6ce]/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d] block">
                    Full Name 성함
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-white border border-[#c5c6ce] px-4 py-3 focus:border-[#04162e] focus:ring-0 transition-all outline-none text-base"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d] block">
                    Email Address 이메일
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full bg-white border border-[#c5c6ce] px-4 py-3 focus:border-[#04162e] focus:ring-0 transition-all outline-none text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d] block">
                  Subject 주제
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full bg-white border border-[#c5c6ce] px-4 py-3 focus:border-[#04162e] focus:ring-0 transition-all outline-none text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="font-sans text-xs font-semibold uppercase tracking-[0.05em] text-[#44474d] block">
                  Message 메시지
                </label>
                <textarea
                  rows={6}
                  placeholder="Your message here..."
                  className="w-full bg-white border border-[#c5c6ce] px-4 py-3 focus:border-[#04162e] focus:ring-0 transition-all outline-none text-base resize-none"
                />
              </div>
              <div className="flex items-center gap-4 pt-4">
                <button
                  type="submit"
                  className="bg-[#04162e] text-white font-sans text-xs font-semibold uppercase tracking-[0.05em] px-10 py-4 hover:bg-[#04162e]/90 transition-all flex items-center gap-2 group"
                >
                  Send Message
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
                <p className="font-sans text-[11px] text-[#44474d] leading-tight max-w-[200px]">
                  By submitting, you agree to our privacy policy regarding data
                  collection.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Mission Visual */}
      <section className="py-[120px] bg-[#0F1A2A] relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-6 relative z-10 text-center">
          <div className="inline-block w-12 h-px bg-[#C5A059] mb-8" />
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
            Bridging People to Jesus Across Nations
          </h2>
          <p className="font-sans text-[15px] text-[#8292b0] max-w-2xl mx-auto opacity-80">
            JBU Association은 기도와 제자훈련, 리더십 개발, 세계선교를 통해
            사람들을 예수 그리스도께 연결하는 사명을 감당합니다.
          </p>
        </div>
      </section>
    </>
  );
}
